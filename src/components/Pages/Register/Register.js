import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineGoogle,
  AiOutlineGithub,
} from "react-icons/ai";

const Register = () => {
  return (
    <div
      className="min-h-screen bg-base-200 px-5"
      style={{
        backgroundImage: `url("https://www.womenbuildingaustralia.com.au/sites/default/files/images/Poly_BG_Grad%20%281%29_0_1.png")`,
      }}
    >
      <div className="text-center pt-14 text-white">
        <h1 className="text-5xl font-bold">Register Now!</h1>
        <p className="py-6">
          Join with the millions of learners to learn for free!
        </p>
      </div>
      <form className="card mx-auto mt-12 mb-10 w-full lg:w-1/2 shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="text"
              placeholder="full name"
              className="input input-bordered"
            />
          </div>
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
              <Link to="" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <div className="py-3">
            <p>
              Already have an account? &nbsp;&nbsp;
              <Link
                to="/login"
                className="hover:underline underline-offset-8 text-cyan-600"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </form>
      <div className="mx-5 pb-20 lg:mx-auto text-white w-1/2">
        <h1 className="text-xl mb-10">Or sign up using:</h1>
        <div className="flex flex-row gap-3">
          <Link to="">
            <button className="btn btn-outline text-3xl text-white">
              <AiOutlineMail />
            </button>
          </Link>
          <Link to="">
            <button className="btn btn-outline text-3xl text-white">
              <AiOutlineGoogle />
            </button>
          </Link>
          <Link to="">
            <button className="btn btn-outline text-3xl text-white">
              <AiOutlineGithub />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
