import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("EMAIL, PASSWORD", email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-lg p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center rpun justify-center"
        >
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-4 px-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-4 px-3 placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;