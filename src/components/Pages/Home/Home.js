import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Learners from "./Learners";
import { FiArrowRight } from "react-icons/fi";
import SecondHeader from "./SecondHeader";

const Home = () => {
  const learners = useLoaderData();
  // console.log(learners);
  return (
    <div>
      <SecondHeader />
      <div className="flex flex-col my-10">
        <div className="card bg-base-300 rounded-box place-items-left  p-10 gap">
          <div className="md:flex flex-row justify-between items-baseline">
            <div>
              <h1 className="pl-18 text-5xl font-semibold">
                Stories from real people
              </h1>
              <p className="pl-18 text-xl pt-5">
                Watch and read stories from the ThryVI community.
              </p>
            </div>
            <Link to="/courses">
              <button className="btn btn-active mt-10">
                Explore more &nbsp;&nbsp; <FiArrowRight />
              </button>
            </Link>
          </div>
          <div className="divider py-8"></div>
          <div className="md:flex flex-row gap-5">
            {learners.map((l) => (
              <Learners key={l.people_id} learner={l} />
            ))}
          </div>
        </div>
      </div>

      <footer className=" footer p-10 lg:pl-40 bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-3xl">
        <div>
          <h1>Join in on Something big</h1>
        </div>
        <div>
          <h1>50M</h1>
          <p>Learners</p>
        </div>
        <div>
          <h1>190+</h1>
          <p>Countries</p>
        </div>
        <div>
          <h1>3.7B</h1>
          <p>Submits</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
