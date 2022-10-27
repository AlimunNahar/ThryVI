import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OtherLogin from "../OtherLogin/OtherLogin";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
      <form
        onSubmit={handleSubmit}
        className="card mx-auto mt-12 mb-10 w-full lg:w-1/2 shadow-2xl bg-base-100"
      >
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
          <div className="text-red-700">{error}</div>
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
        <OtherLogin />
      </div>
    </div>
  );
};

export default Login;
