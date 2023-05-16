import React from "react";
import picture from "./../../picture.jpeg";
import { BsFillPlayFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_image">
          <img src={picture} alt="hero" />
        </div>
        <div className="hero_content">
          <div className="hero_text">
            <h1>Hey...This is Ram</h1>
            <p>We have to enjoy every moment of our life.</p>
          </div>
          <div className="hero_btn">
            <button>
              <a href="#">See How</a> <BsFillPlayFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;