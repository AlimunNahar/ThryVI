import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import OtherLogin from "../OtherLogin/OtherLogin";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email address.");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handleEmailVerification = () => {
    // console.log(event.target.checked);
    verifyEmail()
      .then(() => {})
      .catch((e) => console.error(e));
  };

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
      <form
        onSubmit={handleSubmit}
        className="card mx-auto mt-12 mb-10 w-full lg:w-1/2 shadow-2xl bg-base-100"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="full name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photo url"
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

          <p>{error}</p>

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
        <OtherLogin />
      </div>
    </div>
  );
};

export default Register;
