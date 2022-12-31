import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <form>
            <input
              style={{ width: "250px" }}
              type="text"
              placeholder="What is it that you truly desire?"
              name="item"
              id="search=box"
            />
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
