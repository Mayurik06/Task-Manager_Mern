import React from "react";
import { GoTasklist } from "react-icons/go";

function Login() {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <p className="text-2xl font-bold mb-4">Connect with you Team!</p>
          <div className="shadow-all p-8">
            <div>
              <form action="" className="flex flex-col gap-4">
                <label htmlFor="email" className="font-semibold">
                  Continue with your work id
                </label>
                <input
                  type="text"
                  placeholder="m@example.com"
                  className="border p-2 outline-none w-[300px]"
                />
                <button className="bg-black text-white px-4 py-2 font-bold rounded-sm">
                  Connect
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Login;
