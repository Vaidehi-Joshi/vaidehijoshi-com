import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  showNavigationbar,
  showBlog,
} from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";

const Home = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <MainBody ref={ref} />
      <AboutMe />
      <Project />
    </Fragment>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {showNavigationbar && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {showBlog && <Route path="/blog" exact component={Blog} />}
      {showBlog && <Route path="/blog/:id" component={BlogPost} />}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
