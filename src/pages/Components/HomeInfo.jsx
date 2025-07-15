import React from "react";
import arrow from "../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import './homeInfo.css'


const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-2xl sm:leading-snug  md:h-30  text-center neo-brutalism-blue  py-4 px-8 mt-10 text-white">
        HI, I'm
        <span className="font-semibold mx-2 text-white">Rahul</span>
        👋
        <br />A Java Full Stack Developer from India
      </h1>
    );
  }
  if (currentStage === 2) {
    return (
      <div className="info-box mx-5 relative flex text-white flex-col  gap-3 max-w-2xl  neo-brutalism-blue pt-4 pb-10 px-8 mt-2.5 top-5">
        <p className=" font-medium sm:text-xl text-center md:w-70 md:h-20">
          Worked with many Companies <br /> and picked up many skills along the
          way
        </p>

        <Link
          to="/about"
          className="neo-btn neo-brutalism-white py-2 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 s w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3 ;"
        >
          Learn More
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box  neo-brutalism-blue   mx-5 relative flex text-white flex-col gap-3 max-w-120 mt-2.5 neo-brutalism-blue pt-4 pb-10 px-8 top-5">
        <p className="font-medium sm:text-xl text-center md:w-80 md:h-20">
          Led multiple projects to success over the year, <br /> Curious about
          the impact?
        </p>

        <Link
          to="/projects"
          className="neo-btn neo-brutalism-white py-2 px-6 md:w-60  rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3"
        >
          Visit my Project
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box  neo-brutalism-blue mx-5 relative flex mt-2.5   text-white flex-col gap-3 max-w-110 neo-brutalism-blue pt-4 pb-10 px-8  top-5">
        <p className="font-medium sm:text-xl text-center md:w-80 md:h-20">
          Get in touch with me for any project ideas or just to say hi!
        </p>

        <Link
          to="/contact"
          className="neo-btn neo-brutalism-white  py-2 px-6   rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3"
        >
          Let's Talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  return null;
};

export default HomeInfo;
