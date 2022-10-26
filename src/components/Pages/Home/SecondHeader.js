import React from "react";
import { Link } from "react-router-dom";

const SecondHeader = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp2700084.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:px-60 py-20">
          <h1 className="mb-5 text-5xl font-bold">DON'T JUST WATCH. LEARN.</h1>
          <p className="mb-5">
            "If you are not willing to learn, no one can help you. If you are
            determined to learn, no one can stop you."
            <br />
            <span className="italic">-by Zig Zigler</span>
          </p>
          <Link to="/blog" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
