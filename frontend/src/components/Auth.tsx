import { Link } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useState } from "react";
import { SignupSchema } from "@rishibeesu/medium-common";

export function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setPostInputs] = useState<SignupSchema>({
    email: "",
    password: "",
    name: "",
  });
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div>
          <div className="font-extrabold text-4xl px-10">
            {type === "signup" ? "Create an account" : "Login to account"}
          </div>
          <div className="flex text-slate-500 font-medium justify-center text-lg py-3">
            <div className="">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
            </div>
            <Link
              className="underline pl-2"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Login" : "Sign up"}
            </Link>
          </div>
          {type === "signup" ? (
            <InputBox
              label="First Name"
              placeholder="Enter your first name"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : (
            <></>
          )}

          <InputBox
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <InputBox
            type="password"
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            type="button"
            className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 mt-8"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
