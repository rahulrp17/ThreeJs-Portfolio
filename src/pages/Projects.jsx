import React from 'react'
import {project} from '../constants/index.js'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const projects = () => {
  return (
    <div className=' max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug '>
        My{" "}
        <span className='blue-gradient_text  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow-2xl'>
          Projects
        </span>
      </h1>
      
      <p className='mt-2 text-justify text-gray-800 leading-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et architecto, similique veniam natus possimus sit voluptatibus praesentium? Expedita est odio exercitationem officia quibusdam quos corporis pariatur, similique eaque fugiat quidem quis laborum tempora harum, dolores optio nam, error corrupti itaque! Iusto dolore consequuntur sapiente amet quasi eius dolorem at.
      </p>

      <div className='flex my-20 flex-wrap  gap-10'>
        {
          project.map((project,index)=>{
            return(
              <div key={index} className='lg:w-[400px] w-full'>
                  <div className='block-container w-12 h-12'>
                    <div className="btn-back rounded-xl "></div>
                    <div className="btn-front rounded-xl flex items-center justify-center">
                      <img src={project.iconUrl}  className="w-10 h-100 object-contain" />
                    </div>
                  </div>
                  <div className='mt-5 flex flex-col'>
                     <h1 className='text-black font-poppins text-2xl font-bold'>{project.name}</h1>
                     <p className='text-gray-500 mt-2'>{project.description}</p>
                     <div className='mt-5 flex items-center gap-3 font-poppins'>
                      <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600 '>Live Link</Link>
                      <img src={arrow} className='4-4 h-4 object-contain'/>
                     </div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default projects
