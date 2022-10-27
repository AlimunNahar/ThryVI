import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const OtherLogin = () => {
  const { providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = (event) => {
    event.preventDefault();
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-row gap-3">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline text-3xl text-white hover:text-teal-800"
      >
        <AiOutlineGoogle />
      </button>
      <button
        onClick={handleGithubSignIn}
        className="btn btn-outline text-3xl text-white hover:text-teal-600"
      >
        <AiOutlineGithub />
      </button>
      {/* <button
        onClick={handleGithubSignIn}
        className="btn btn-outline text-3xl text-white hover:text-teal-600"
      >
        <AiOutlineFacebook />
      </button> */}
    </div>
  );
};

export default OtherLogin;
