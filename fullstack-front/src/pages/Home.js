import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [totalCars, setTotalCars] = useState(10);
  const {id} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;

 
  useEffect(() => {
    loadCars(currentPage);
  },[currentPage]) ;
const loadCars = async (page) => {
const result2 = await axios.get(`http://localhost:8080/carrinhos`);
const result = await axios.get(`http://localhost:8080/carrinhos/p?page=${page}&pageSize=${PAGE_SIZE}`);
const sortedCars = result.data.sort((a, b) => a.marca.localeCompare(b.marca));
setTotalCars(result2.data.length);
setCars(sortedCars);
};
function getTotalCars() {
  return totalCars;
}
const deleteCars = async (id)=>{
  const response = await axios.delete(`http://localhost:8080/carrinho/${id}`);
  alert(response.data);
  loadCars(currentPage);
};
const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
};

return (
    <div className='container'>
      <h4>Total Cars: {totalCars}</h4>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Cor</th>
              <th scope="col">Ano</th>           
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cars.map((car, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{car.marca}</td>
                  <td>{car.modelo}</td>
                  <td>{car.cor}</td>
                  <td>{car.ano}</td>                 
                  <td>
                  <Link className="btn btn-primary mx-2"to={`/viewCar/${car.id}`}>View</Link>
                  <Link className="btn btn-outline-primary mx-2"to={`/editCar/${car.id}`}>Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={()=>deleteCars(car.id)}>Delete</button>
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
};
