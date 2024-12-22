
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddUserForm({submit,change,value,btnVal}) {
 

  return (
    <div className="lg:w-fit pl-8 pr-8 pt-8 pb-10 shadow-all bg-white rounded-md">
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={change}
              placeholder="Name"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <label htmlFor="position" className="font-semibold">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={value.position}
              onChange={change}
              placeholder="Position of the Employee"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
        </div>

        <div className="flex gap-4 lg:items-end flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <label htmlFor="aliasEmail" className="font-semibold">
              Give a Work ID
            </label>
            <input
              type="text"
              name="aliasEmail"
              value={value.aliasEmail}
              onChange={change}
              placeholder="m@example.com"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="font-semibold">
              Email ID
              <span className="text-sm block text-gray-500 font-light">
                (Ensure the email ID is active and accessible by the employee)
              </span>
            </label>
            <input
              type="text"
              name="email"
              value={value.email}
              onChange={change}
              placeholder="m@gmail.com"
              className="border p-2 outline-none lg:w-[500px] w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="role" className="font-semibold">
            Role
          </label>
          <select
            name="role"
            value={value.role}
            onChange={change}
            className="border p-2 outline-none lg:w-[300px] w-full"
          >
            <option value="" disabled>
              Role
            </option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 font-bold rounded-sm mt-8"
        >
          {btnVal}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddUserForm;
