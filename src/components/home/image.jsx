import { React } from "react";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomepageImage = () => {
  return (
    <div className="text-center homepageImage col-12">
     <img
        srcSet="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-288/web-revival_discoverywidget-collection-202010130410.jpg"
        alt=""
        className="rounded"
        width="100%"
      />
  </div>
    
  );
};

export default HomepageImage;
