/** @type {import('tailwindcss').Config} */
export default{
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                grey:{
                    200:"#d5dae1"
                },
                black:{
                    DEFAULT:"#000",
                    500:"#1D2235"
                },
                fontFamily:{
                    worksans:["'Work Sans', sans-serif"],
                    poppins:["'Poppins', sans-serif"]
                },
                boxShadow:{
                    curd:"0px 1px 2px 0px rgb(0, 0, 0, 0.05)",
                }
            }
        },

    },
    plugins: [],
}