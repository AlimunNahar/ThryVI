import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineDownload, AiOutlineStar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { ImPriceTag } from "react-icons/im";

const SingleCourse = () => {
  const singleCourse = useLoaderData();
  // console.log(singleCourse);

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/88/26/25/1000_F_288262511_CHeZkdXl18BjZ122pIPeNkJf754oTiCW.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <div className="md:px-20 py-20">
            <h1 className="mb-5 text-5xl font-bold animate-bounce">
              DOWNLOAD PDF
            </h1>
            <p className="mb-5">
              Click the button below to download the pdf file.
            </p>
            <Link to="" className="btn btn-primary">
              <AiOutlineDownload className="mr-2 text-2xl" /> PDF
            </Link>
          </div>
        </div>
      </div>
      {singleCourse.map((c) => (
        <div className="flex flex-col mx-auto w-8/12 my-16" key={c.course_id}>
          <div className="text-center text-xl lg:text-3xl mb-10">
            Instructor Information
          </div>
          <div className="grid bg-base-300 rounded-box">
            <div className="rounded-xl">
              <div className="hero-content flex-col lg:flex-row ">
                <div className="">
                  <div className="w-auto md:w-6/12 lg:w-6/12  lg:max-w-sm">
                    <img
                      src={c.instructor.instructor_img}
                      className="w-auto rounded-full shadow-2xl"
                      alt="InstructorImage"
                    />
                  </div>
                </div>

                <div className="">
                  <h1 className="text-2xl font-bold">
                    {c.instructor.instructor_name}
                  </h1>
                  <p className="mt-3 text-sm">{c.instructor.published_date}</p>
                  <div className="pt-6 pb-2">
                    <div className="flex content-center">
                      <BsFillPeopleFill className="pr-3 text-3xl pb-1" />
                      {c.instructor.students} students
                    </div>
                  </div>
                  <p className="mb-3 text-sm">
                    To know more info contact with the instructor
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Call Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-xl lg:text-3xl my-10">
            Course Information
          </div>
          <div className="grid card w-10/12 mx-auto bg-base-300 rounded-box place-items-left">
            <div className="shadow-xl">
              <img src={c.img} alt="Shoes" className="w-full" />
              <div className="card-body">
                <h2 className="card-title">{c.Course_title}</h2>
                <div className="flex flex-col md:flex-row lg:flex-row  bg-zinc-600 p-3 text-white">
                  <p className="flex gap-3">
                    <GiDuration className="mt-1" />
                    {c.course_duration} hours
                  </p>
                  <p className="flex gap-3">
                    <AiOutlineStar className="mt-1" />
                    {c.ratings} stars
                  </p>

                  <p className="text-bold text-lime-500 flex gap-3">
                    <ImPriceTag className="mt-1" />$ {c.price}
                  </p>
                </div>
                <p className="text-justify">{c.course_details}</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-outline">
                    <Link to={`/details/${c.course_id}`}>
                      Get Premium Access
                    </Link>
                  </button>
                  <button className="btn btn-outline">
                    <Link to="/courses">Return</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCourse;
