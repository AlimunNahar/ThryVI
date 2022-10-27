import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp5162474.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">{details.Course_title}</h1>
          <p className="mb-5">
            This is a protected page. Only verified account holders can access
            this page!
          </p>
          <button className="btn btn-primary">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
