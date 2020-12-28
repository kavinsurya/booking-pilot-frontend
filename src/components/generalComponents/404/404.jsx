import { React } from "react";
import "./404.css";

const Error = () => {
  return (
    <div className="container-404" >
  <h1>Whoops!!</h1>

<section className="error-container">
  <span>4</span>
  <span><span className="screen-reader-text">0</span></span>
  <span>4</span>
</section>
<p className="zoom-area"><b> Looks like the page you were looking for is no longer here</b> </p>
<div className="link-container">
  <a  href="/" className="more-link">Visit the Home page</a>
</div>
    </div>
  );
};


const Error404 = () => {
  return (
   <Error/>
  );
};

export default Error404;
