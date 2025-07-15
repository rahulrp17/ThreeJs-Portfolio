import React from 'react'


const Alert = ({type, text}) => {
  return (
  
    <div className='absolute top-10 mr-5  flex justify-center items-center'>
       <div className={`p-2 ${type === "danger" ? "bg-red-500" : "bg-green-500"} items-center leading-none lg:rounded-full flex lg:inline-flex justify-between text-white rounded-lg`}>
        <p className={`flex rounded-full ${ type === "danger" ? "bg-red-500" : "bg-green-500"} uppercase px-2 py-1 text-xs font-semibold mr-3`}>{type === "danger" ? "Failed" : "Success"}</p>
        <p className='mr-2 text-left text-black'>{text}</p>
       </div>
    </div>
    
  )
}

export default Alert

