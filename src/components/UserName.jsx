import React, { useState, useEffect } from "react";
import axios from "axios";

const UserName = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch user names from an API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/get/user");
        let userName=response.data.users.map((user)=>user.aliasEmail);
        setUsers(userName);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filteredSuggestions = users.filter((user) =>
        user.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a name"
         className="border p-2 outline-none lg:w-[500px] w-full"
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-96 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserName;
