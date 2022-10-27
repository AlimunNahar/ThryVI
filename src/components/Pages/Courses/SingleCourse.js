import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse);

  return <div>This is single Course page</div>;
};

export default SingleCourse;
