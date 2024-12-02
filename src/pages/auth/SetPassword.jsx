import React from "react";

function SetPassword() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form action="" className="flex flex-col gap-4 shadow-all p-8">
      <p className="text-2xl font-bold">Set Password</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="border outline-none w-[300px] p-2 shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassowrd">Confirm Password</label>
          <input
            type="text"
            className="border outline-none w-[300px] p-2 shadow-sm"
          />
        </div>
        <button className="bg-black text-white px-4 py-2 font-bold rounded-sm">
          Login
        </button>
      </form>
    </div>
  );
}

export default SetPassword;
