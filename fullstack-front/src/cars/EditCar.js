import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCar() {
let navigate = useNavigate();

  const { id } = useParams();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  const [car, setCars] = useState({
    Marca: "",
    Modelo: "",
    Cor: "",
    Ano: "",
    tipo:"",
    preco:"",
  });

  const{ marca, modelo, cor, ano, tipo, preco } = car;

  const onImputChange = (e) => {
    setCars({ ...car, [e.target.name]: e.target.value });
  };
      useEffect(()=>{
      loadCars();
    },[]);
    
  const onSubmit = async (e) => {
    e.preventDefault();
    const response =  await axios.put(`http://localhost:8080/carrinho/${id}`, car);
     alert(response.data);
     navigate("/home");
  };

  const loadCars = async () => {
    const result = await axios.get(`http://localhost:8080/carrinho/${id}`);
   
    setCars(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Car</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="marca" className="form-lab">
                Marca
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter marca"
                name="marca"
                value={marca}
                onChange={(e) => onImputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="modelo" className="form-lab">
                Modelo
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Modelo"
                name="modelo"
                value={modelo}
                onChange={(e) => onImputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cor" className="form-lab">
                Cor
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Cor"
                name="cor"
                value={cor}
                onChange={(e) => onImputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Ano" className="form-lab">
                Ano
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Ano"
                name="ano"
                value={ano}
                onChange={(e) => onImputChange(e)}
                min="1900"
                max={currentYear}
              />
              <div className="mb-3">
              <label htmlFor="tipo" className="form-lab">
                Tipo
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter tipo"
                name="tipo"
                value={tipo}
                onChange={(e) => onImputChange(e)}
              />
            </div>
              <div className="mb-3">
            <label htmlFor="preco" className="form-label">
              Preço
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder="Enter preço"
              name="preco"  
              value={preco}
              onChange={(e) => onImputChange(e)}
              min="0.00"
            />
            </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/home">Cancel</Link>
          </form>
        </ div>
      </div>
    </div >
  );
}
