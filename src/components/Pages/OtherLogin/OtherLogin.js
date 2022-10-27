import React from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const OtherLogin = () => {
  return (
    <div className="flex flex-row gap-3 ">
      <Link to="">
        <button className="btn btn-outline text-3xl text-white hover:text-teal-800">
          <AiOutlineGoogle />
        </button>
      </Link>
      <Link to="">
        <button className="btn btn-outline text-3xl text-white hover:text-teal-600">
          <AiOutlineGithub />
        </button>
      </Link>
    </div>
  );
};

export default OtherLogin;
