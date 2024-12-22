import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function AutoSuggestionInput({ onUserSelect, searchTerm, setSearchTerm }) {
  const [user, setUsers] = useState([]);
  const [listVisibility, setListVisibility] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/get/user");
        if (!response.data.success) {
          console.log("Error fetching users");
        }
        const data = response.data.users;
        setUsers(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setListVisibility(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filterUser = user.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.aliasEmail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = (u) => {
    setSearchTerm(u.aliasEmail);
    setListVisibility(false);
    onUserSelect(u); // Pass the selected user to the parent
  };

  return (
    <div className="relative" ref={inputRef}>
      <input
        type="text"
        name="assignTo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={() => setListVisibility(true)}
        placeholder="Employee Name"
        className="border p-2 outline-none lg:w-[500px] w-full"
      />
      {listVisibility && (
        <div className="lg:w-[500px] w-full mt-2 p-2 absolute shadow-lg bg-white">
          {filterUser.map((u) => (
            <div
              key={u._id}
              className="mb-2 cursor-pointer"
              onClick={() => handleUserSelect(u)}
            >
              <p>{u.name}</p>
              <p className="text-sm text-gray-500">{u.aliasEmail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoSuggestionInput;