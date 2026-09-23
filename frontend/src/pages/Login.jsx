import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.msg);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.msg);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.msg);
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  })

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white-300 shadow-lg rounded-sm p-8 w-[90%] border border-gray-400 sm:max-w-96 flex flex-col gap-4 text-gray-800 rounded-tl-2xl rounded-br-2xl"
      >
        <div className="inline-flex items-center gap-2 mb-2 justify-center">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === "Login" ? null : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Name"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Email"
          required
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-1">
          <p className="cursor-pointer text-gray-600 hover:text-black">
            Forgot Your Password
          </p>

          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Login
            </p>
          )}
        </div>

        <button className="bg-black text-white rounded-md font-light px-8 py-2 mt-4 hover:bg-gray-900">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
