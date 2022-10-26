import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineGoogle,
  AiOutlineGithub,
} from "react-icons/ai";

const Login = () => {
  return (
    <div
      className="min-h-screen bg-base-200 px-5"
      style={{
        backgroundImage: `url("https://a-static.besthdwallpaper.com/silver-lining-wallpaper-1920x1280-16884_38.jpg")`,
      }}
    >
      <div className="text-center pt-14 text-white">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Join with the millions of learners to learn for free!
        </p>
      </div>
      <form className="card mx-auto mt-12 mb-10 w-full lg:w-1/2 shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Log in</button>
          </div>
          <div className="py-3">
            <p>
              Not a member yet? &nbsp;&nbsp;
              <Link
                to="/register"
                className="hover:underline underline-offset-8 text-cyan-600"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </form>
      <div className="mx-5 pb-20 lg:mx-auto text-white w-1/2">
        <h1 className="text-xl mb-10">Or sign in using:</h1>
        <div className="flex flex-row gap-3">
          <Link to="">
            <button className="btn btn-outline text-3xl">
              <AiOutlineMail />
            </button>
          </Link>
          <Link to="">
            <button className="btn btn-outline text-3xl">
              <AiOutlineGoogle />
            </button>
          </Link>
          <Link to="">
            <button className="btn btn-outline text-3xl">
              <AiOutlineGithub />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
