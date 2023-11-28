import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [totalCars, setTotalCars] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Pesquisando por:', searchQuery);
  };

  useEffect(() => {
    loadCars(currentPage);
  }, [currentPage, sortBy, sortOrder]);

  const loadCars = async (page) => {
    try {
      const result2 = await axios.get(`http://localhost:8080/carrinhos`);
      const result = await axios.get(`http://localhost:8080/carrinhos/p`, {
        params: {
          page: page,
          pageSize: PAGE_SIZE,
          sortBy: sortBy,
          sortOrder: sortOrder,
        },
      });

      let sortedCars = result.data;

      if (sortBy) {
        sortedCars.sort((a, b) => {
          const valueA = a[sortBy];
          const valueB = b[sortBy];

          return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });
      }

      setTotalCars(result2.data.length);
      setCars(sortedCars);
    } catch (error) {
      console.error("Error loading cars:", error);
    }
  };

  const handleSort = (columnName) => {
    if (sortBy === columnName) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(columnName);
      setSortOrder('asc');
    }
  };

  const deleteCars = async (id) => {
    const response = await axios.delete(`http://localhost:8080/carrinho/${id}`);
    alert(response.data);
    loadCars(currentPage);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='container'>
      <h4>Total Carros: {totalCars}</h4>
      <div className='py-4'>
        <div className="form-inline">
          <input
            type="text"
            className="search-box"
            placeholder="procurar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-primary mx-2"
            onClick={handleSearch}
          >
            Pesquisa
          </button>
        </div>
        <p> </p>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">
                <div>
                  <span>Marca</span>
                  <button className="btn btn-link" onClick={() => handleSort("marca")}>
                    {sortBy === "marca" && sortOrder === "asc" ? "▲" : "▼"}
                  </button>
                </div>
              </th>
              <th scope="col">
                <div>
                  <span>Modelo</span>
                  <button className="btn btn-link" onClick={() => handleSort("modelo")}>
                    {sortBy === "modelo" && sortOrder === "asc" ? "▲" : "▼"}
                  </button>
                </div>
              </th>
              <th scope="col">
                <div>
                  <span>Cor</span>
                  <button className="btn btn-link" onClick={() => handleSort("cor")}>
                    {sortBy === "cor" && sortOrder === "asc" ? "▲" : "▼"}
                  </button>
                </div>
              </th>
              <th scope="col">
                <div>
                  <span>Ano</span>
                  <button className="btn btn-link" onClick={() => handleSort("ano")}>
                    {sortBy === "ano" && sortOrder === "asc" ? "▲" : "▼"}
                  </button>
                </div>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{car.marca}</td>
                <td>{car.modelo}</td>
                <td>{car.cor}</td>
                <td>{car.ano}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewCar/${car.id}`}>View</Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/editCar/${car.id}`}>Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteCars(car.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <span>Página {currentPage} de {Math.ceil(totalCars / PAGE_SIZE)}</span>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Anterior
        </button>
        <button
          disabled={currentPage === Math.ceil(totalCars / PAGE_SIZE)}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
