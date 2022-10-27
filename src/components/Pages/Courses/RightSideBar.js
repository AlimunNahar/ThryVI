import React from "react";
import { useLoaderData } from "react-router-dom";

const RightSideBar = () => {
  const hi = useLoaderData();
  // console.log(hi);
  return (
    <div>
      <h1>Right Side Bar</h1>
    </div>
  );
};

export default RightSideBar;
