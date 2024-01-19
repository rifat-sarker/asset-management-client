// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={"https://i.ibb.co/Ln3ZJpy/website-3374825-1920.jpg"}
            className="w-full"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <button className="btn btn-primary w-1/4 relative -top-0 ">
              <Link to='/admin'>Join as Admin</Link>
            </button>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={
              "https://i.ibb.co/mzWS4LH/10e2d64fa0ebd9387475aed3eb5228eed868e6d5.webp"
            }
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <button className="btn btn-primary w-1/4 relative -top-0 ">
              <Link to="/employee">Join as Employee</Link>
            </button>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
