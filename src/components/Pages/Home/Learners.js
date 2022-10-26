import React from "react";

const Learners = ({ learner }) => {
  const { _image, title, tag } = learner;

  // console.log(_image);
  return (
    <div className="mb-10 lg:mb-1 basis-1/4 card w-auto bg-base-100 shadow-xl">
      <figure>
        <img src={_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{tag}</p>
      </div>
    </div>
  );
};

export default Learners;
