import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { BsFillMicFill } from "react-icons/bs";

export const SearchBar = () => {
  const [input, setInput] = useState("");   //jo bhi input me value aa rha h usko store krega
  const [states, setStates] = useState([]); //storing the list of states fetch from the API
  const [filter, setFilter] = useState([]); //hold the filtered list of states based on search input.

  useEffect(() => {
    const fetchData = () => {
      fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then((response) => response.json())
        .then((data) => setStates(data.states));
    };
 
    fetchData();
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    filterdata(inputValue);
  };

  const filterdata = (inputValue) => {
    const data = states.filter((user) =>
      user.state_name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilter(data);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search Google or type a URL"
        value={input}
        onChange={handleChange}
      />
      <BsFillMicFill id="mic-icon" />

      <ul>
        {filter.map((state) => (
          <li key={state.state_id}>{state.state_name}</li>
        ))}
      </ul>
    </div>
  );
};
