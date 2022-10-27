import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourse from "./AllCourse";
import LeftSideBar from "./LeftSideBar";

const Courses = () => {
  const courseDetails = useLoaderData();
  // console.log(courseDetails);

  return (
    <div className="block my-10 mx-5 lg:grid grid-cols-12 gap-5">
      <div className="col-span-4">
        <LeftSideBar />
      </div>
      <div className="col-span-8">
        <h2 className="text-xl">All Courses</h2>
        <div className="divider my-4" />
        {courseDetails.map((courses) => (
          <AllCourse key={courses.course_id} courses={courses}></AllCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
