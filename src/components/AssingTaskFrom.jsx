import React from "react";
import { ToastContainer } from "react-toastify";
import AutoSuggestionInput from "./AutoSuggestionInput";

function AssingTaskFrom({ taskDetails, handleInputChange, handleUserSelect, handleSubmit, searchTerm, setSearchTerm }) {
  return (
    <div className="lg:w-fit pl-8 pr-8 pt-8 pb-10 shadow-all bg-white rounded-md">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Task"
              value={taskDetails.title}
              onChange={handleInputChange}
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="priority" className="font-semibold">Priority</label>
            <select name="priority" className="border p-2 outline-none lg:w-[500px] w-full" value={taskDetails.priority} onChange={handleInputChange}>
              <option value="" disabled>
                Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <label htmlFor="assignTo" className="font-semibold">
              Assign To
            </label>
            <AutoSuggestionInput
              onUserSelect={handleUserSelect}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="dueDate" className="font-semibold">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              className="border p-2 outline-none lg:w-[500px] w-full"
              value={taskDetails.dueDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]} 
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={taskDetails.description}
            onChange={handleInputChange}
            className="border p-2 outline-none lg:w-[500px] w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 font-bold rounded-sm mt-8"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AssingTaskFrom;