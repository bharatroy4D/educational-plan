import React from "react";
import loginImg from "../../assets/loginStudent.png"; // your image here

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f6f6] px-4 py-5 lg:py-10">

      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT IMAGE SIDE */}
        <div className="relative">
          <img
            src={loginImg}
            alt="login"
            className="h-full w-full object-cover"
          />

          {/* White text on image */}
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">
              Lorem Ipsum is simply
            </h1>
            <p className="text-sm mt-2">Lorem Ipsum is simply</p>
          </div>

          {/* Blue border overlay */}
          <div className="absolute inset-0 border-4 border-[#34b3f1] rounded-xl pointer-events-none"></div>
        </div>

        {/* RIGHT FORM SIDE */}
        <div className="px-10 py-10 flex flex-col">

          <h2 className="text-center text-gray-700 text-xl font-medium mb-2">
            Welcome to lorem..!
          </h2>

          {/* LOGIN & REGISTER BUTTONS */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <button className="px-6 py-2 rounded-full text-white bg-[#28bfc4] font-semibold shadow-md">
              Login
            </button>
            <button className="px-6 py-2 rounded-full bg-[#c2f1f1] text-gray-700 font-semibold hover:bg-[#bdf0f0]">
              Register
            </button>
          </div>

          {/* Small description */}
          <p className="text-center text-gray-500 text-sm mt-6 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* INPUT FIELDS */}
          <label className="text-gray-700 mb-1">User name</label>
          <input
            type="text"
            placeholder="Enter your User name"
            className="w-full px-4 py-3 mb-4 rounded-full border border-[#aeeeee] focus:outline-none"
          />

          <label className="text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-3 rounded-full border border-[#aeeeee] focus:outline-none"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              👁️
            </span>
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex justify-between items-center mt-3">
            <label className="flex items-center gap-2 text-gray-600 text-sm">
              <input type="checkbox" />
              Remember me
            </label>
            <button className="text-sm text-gray-600 hover:text-gray-800">
              Forgot Password ?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button className="w-full mt-3 lg:mt-6 bg-[#28bfc4] py-3 rounded-full text-white font-semibold text-lg shadow-md hover:bg-[#22acb0] transition">
            Login
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
