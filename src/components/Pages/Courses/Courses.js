import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Courses = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  return (
    <div className="block my-10 mx-5 lg:grid grid-cols-2">
      <div className="grow w-1/5">
        <LeftSideBar />
      </div>
      <div className="grow w-4/5">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Courses;
