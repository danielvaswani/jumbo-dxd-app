import React, { useState } from 'react';
import './searchbar.css';
const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

 
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="search-component">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
     
    </div>
  );
};

export default SearchBar;
