import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllCourse from "./AllCourse";
import LeftSideBar from "./LeftSideBar";

const Courses = () => {
  const courseDetails = useLoaderData();
  // console.log(courseDetails);

  return (
    <div className="block my-10 mx-5 lg:grid grid-cols-12 gap-10">
      <div className="col-span-4">
        <Link to={``}>
          <LeftSideBar />
        </Link>
      </div>
      <div className="col-span-8">
        <AllCourse courses={courseDetails}></AllCourse>
      </div>
    </div>
  );
};

export default Courses;
