import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert  from "./Components/Alert";
import { Canvas } from "@react-three/fiber";
import  Loader  from "../pages/Components/Loader";
import Fox from "./models/Fox";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { showAlert, alert, hideAlert } = useAlert();
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm((currForm) => {
      return { ...currForm, [name]: value };
    });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        "service_framg9p",
        "template_mpwyjnn",
        {
          from_name: form.name,
          to_name: "Rahul",
          from_email: form.email,
          to_email: "@ragulpant411gmail.com",
          message: form.message,
        },
        "HV2nSVWgF0Ts1PqIX"
      )
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          text: "Thank you, I will get back to you as soon as possible.",
          type: "success",
        });
        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didn't get your message, please try again.",
          type: "danger",
        });
      });
  };
  return (
    <section className="relative flex lg:flex-row  flex-col max-container max-w-3xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] top-15 bottom-20">
      {alert.show && <Alert text={alert.text} type={alert.type} />}
      <div className="flex-1 min-w-[80%] flex flex-col rounded-2xl p-2.5">
       <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug '>
        Get in{" "}
        <span className='blue-gradient_text  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow-2xl'>
          Touch
        </span>
      </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input bg-white border outline-blue-600 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black font-semibold">
            Your Message
            <textarea
              type="text"
              name="message"
              className="textarea  block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card "
              placeholder="Write your thoughts here..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight
            position={[5, 10, 0]}
            intensity={2}
          />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.400, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
        </>
    </section>
  );
};

export default Contact;
