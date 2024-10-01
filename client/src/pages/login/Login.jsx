import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInput] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col backdrop-blur-sm bg-white/30 shadow-xl rounded-xl p-8 min-w-96 space-y-2 border border-white/30"
      >
        <h2 className="text-3xl font-semibold text-center text-white mb-4">
          Login
        </h2>
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
            className="px-4 py-2 mb-2 w-full bg-slate-600 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-600 px-4 py-2 rounded-lg hover:bg-gradient-to-l transition duration-300"
        >
          Login
        </button>
        <p className="text-sm text-center ">
          {"Don't"} have an account ?
          <a href="#" className="text-blue-200 ml-2 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
      {loading && <div>loading.....</div>}
    </div>
  );
};

export default Login;
