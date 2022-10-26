import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="mb-5 text-5xl font-bold">
          Some Common Questions & Answers
        </h1>
      </div>

      <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:px-60 py-20">
            <h1 className="mb-5 text-5xl font-bold">Connect With Us!</h1>
            <div className="form-control">
              <label className="input-group mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="input input-bordered w-9/12 "
                />
                <Link to="/register">
                  <span className="py-3">SIGN UP</span>
                </Link>
              </label>
            </div>
            <p className="mt-4">Receive updates & free lessons!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
