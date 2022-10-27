import React from "react";

const AllCourse = ({ courses }) => {
  const { _id } = courses;
  console.log(courses);
  return (
    <div>
      <h2>All Course{_id}</h2>
    </div>
  );
};

export default AllCourse;
