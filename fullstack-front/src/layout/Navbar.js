import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
 
  const handleSearch = () => {
   console.log('Pesquisando por:', searchQuery);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar- dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            HotWheels management application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="form-inline">
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-light"
              onClick={handleSearch}
            >
              Pesquisar
            </button>
          </div>
          <Link className="btn btn-outline-light" to="/addCar" >
            Add Cars
          </Link>
        </div>
      </nav>
    </div>
  )
}