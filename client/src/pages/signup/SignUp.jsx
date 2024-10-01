import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInput] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInput({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col backdrop-blur-sm bg-white/30 shadow-xl rounded-xl p-8 min-w-96 space-y-2 border border-white/30"
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-4">
          Sign Up
        </h2>
        <div>
          <label className="label p-2">
            <span className="text-base text-slate-700">Full Name</span>
          </label>
          <input
            value={inputs.name}
            onChange={(e) => setInput({ ...inputs, name: e.target.value })}
            placeholder="Full Name"
            className="px-4 py-2 w-full bg-slate-600 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base text-slate-700">Username</span>
          </label>
          <input
            value={inputs.username}
            onChange={(e) => setInput({ ...inputs, username: e.target.value })}
            placeholder="Username"
            className="px-4 py-2 w-full bg-slate-600 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base text-slate-700">Password</span>
          </label>
          <input
            value={inputs.password}
            onChange={(e) => setInput({ ...inputs, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="px-4 py-2 w-full bg-slate-600 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base text-slate-700">Confirm Password</span>
          </label>
          <input
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInput({ ...inputs, confirmPassword: e.target.value })
            }
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-2 w-full bg-slate-600 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <GenderCheckbox
          onCheckboxChange={handleCheckboxChange}
          selectedGender={inputs.gender}
        />
        <button
          type="submit"
          className="bg-slate-600 px-4 py-2 rounded-lg hover:bg-gradient-to-l transition duration-300"
        >
          Sign Up
        </button>
        <p className="text-sm text-center ">
          Already have an account ?{" "}
          <a href="#" className="text-blue-200 ml-2  hover:underline">
            Log In
          </a>
        </p>
      </form>
      {loading && <div>loading.....</div>}
    </div>
  );
};

export default SignUp;
