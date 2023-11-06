import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import Home from '../pages/Home';
import { totalCars } from '../pages/Home';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
const mostraTotalCars = () => {
const totalCarsElemento = document.getElementById('teste');
totalCarsElemento.textContent = '${totalCars}';
};
//mostraTotalCars();
  const handleSearch = () => {
   console.log('Pesquisando por:', searchQuery);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar- dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
          <p id="teste"></p>
          <p>{totalCars}</p>
          <p>{Home.totalCars}</p>
          <script src="Home.js">

          </script>
        </div>
      </nav>
    </div>
  )
}