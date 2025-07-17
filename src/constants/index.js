import {  css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    spring,
    java,
    mySql,
    contact,
    linkedin,
    todo,
    food,
    auth,
    weather,
    user
    } from '../assets/icons/index.js'


 const skills=[
         { imageUrl: html, name: "HTML", type: "Frontend" },
         { imageUrl: css, name: "CSS", type: "Frontend" },
         { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
         { imageUrl: react, name: "React", type: "Frontend" },
         { imageUrl: redux, name: "Redux", type: "Frontend" },
         { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
         { imageUrl: mui, name: "MUI", type: "Frontend" },
         { imageUrl: sass, name: "SASS", type: "Frontend" },
         { imageUrl: nodejs, name: "Node.js", type: "Backend" },
         { imageUrl: express, name: "Express.js", type: "Backend" },
         { imageUrl: java, name: "Java", type: "Backend" },
         { imageUrl: spring, name: "Spring", type: "Backend" },
         { imageUrl: mongodb, name: "MongoDB", type: "Database" },
         { imageUrl: git, name: "Git", type: "Version Control" },
         { imageUrl: mySql, name: "MySQL", type: "Database" },
         { imageUrl: github, name: "GitHub", type: "Version Control" },
         { imageUrl: motion, name: "Framer Motion", type: "Animation" },
         {imageUrl:nextjs,name:"Next.js",type:"Frontend"}
    ];

    export const socialLinks=[
        {
            name:"Contact",
            iconUrl:contact,
            link:"/contact"
        },
        {
            name:"Github",
            iconUrl:github,
            link:"#"
        },
        {
            name:"linkedin",
            iconUrl:linkedin,
            link:"#"
        },
        
    ];

    export const project=[
        {
            iconUrl:food,
            name:"Food Deliver App",
            description:"A food delivery app that allows users to order food from different restaurants and track their orders in real-time.",
            link:"https://food-delivery-frontend-ib75.onrender.com/"
        },
        {
            iconUrl:auth,
            name:"Authentication System",
            description:"A secure authentication system that verifies users using credentials and OTP.Spring Boot handles login, OTP verification, JWT tokens, and stores users in MySQL.React ",
            link:"https://authentication-system-frontend-cukc.onrender.com"
        },
        {
            iconUrl:todo,
            name:"Todo Application",
            description:"A simple todo application that allows users to add, edit, and delete tasks.",
            link:"https://todo-applicaton.onrender.com"
        },
        {
            iconUrl:user,
            name:"User Management system",
            description:"A user management system that allows users to create, update, and delete users.",
            link:"https://user-management-2-l8v9.onrender.com"
        },
        {
            iconUrl:weather,
            name:"Weather App",
            description:"A weather app that displays the current weather conditions for a given location.",
            link:"https://user-management-phi-roan.vercel.app"
        }
        ]

export default skills;
   
