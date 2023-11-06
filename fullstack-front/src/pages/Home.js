import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [totalCars, setTotalCars] = useState(10);
  const {id} = useParams();
 
  useEffect(() => {
    loadCars();
  },[]) ;
const loadCars = async () => {
const result = await axios.get("http://localhost:8080/carrinhos");
const sortedCars = result.data.sort((a, b) => a.marca.localeCompare(b.marca));
setTotalCars(sortedCars.length);
setCars(sortedCars);
};
function getTotalCars() {
  return totalCars;
}
console.log(getTotalCars());

const deleteCars = async (id)=>{
  await axios.delete(`http://localhost:8080/carrinho/${id}`);
  loadCars();
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
    </div>
  );
}
const totalCars = 0;
export { totalCars };