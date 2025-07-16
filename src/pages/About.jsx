import React from 'react'
import skills from '../constants/index.js'
import './About.css'
import CTA from './Components/CTA.jsx'

const About = () => {
  return (
    <section className='max-container max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <h1 className='head-text sm:text-5xl text-3xl font-semibold sm:leading-snug '>
        Hello, I'm {""}
        <span className='blue-gradient_text  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow-2xl'>
          {""}
          Rahul
        </span>
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500" >
        <p className='text-justify leading-9'>
          Motivated and detail-oriented <strong >Java Full Stack Developer (Fresher)</strong> with hands-on experience in building web applications using <b> Java, Spring Boot, React.js, and MySQL</b>. Adept at writing clean code, developing <b>REST APIs,</b> and creating responsive user interfaces. Looking for an entry-level opportunity to contribute to impactful projects while growing in a collaborative software development environment.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className='subhead-text font-semibold sm:text-3xl text-xl relative sm:leading-snug '>My Skills</h3>
        <div className="mt-16 flex flex-wrap  justify-start gap-9 items-start ">

          {skills.map((skill,index) => (
            <div key={index} className="w-19 h-19 block-container">
              <div className="btn-back rounded-xl">
                <div className='btn-front rounded-2xl flex items-center justify-center   '>
                  <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-full object-contain" />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <hr className='border-t-1 border-gray-300'/>
      <CTA />
    </section>
  )
}

export default About
