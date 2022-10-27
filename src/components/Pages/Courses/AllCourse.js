import React from "react";
import { Link } from "react-router-dom";

const AllCourse = ({ courses }) => {
  const { _id, Course_title, img, course_details } = courses;
  // console.log(Course_title);

  return (
    <div className="hero bg-base-200 rounded-lg mb-8">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <img
          src={img}
          className="w-auto lg:max-w-sm  rounded-lg shadow-2xl"
          alt="card images"
        />
        <div>
          <h1 className="text-3xl font-bold">{Course_title}</h1>
          <p className="py-6">
            {course_details.length >= 100 ? (
              <>
                {course_details.slice(0, 100) + "... "}
                <Link to={`/course/${_id}`} className="text-indigo-500">
                  &nbsp;Read More
                </Link>
              </>
            ) : (
              <>{course_details}</>
            )}
          </p>
          <Link to={`/course/${_id}`} className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
