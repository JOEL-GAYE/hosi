import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({ handleSearch }) => {
  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  }
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-10">
      <div className="form-group w-50">
        <label htmlFor="search" className="sr-only"></label>
        <input
          type="text"
          id="search"
          className="form-control border-0 border-bottom rounded-5"
          placeholder="Type a name to search..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Search;
