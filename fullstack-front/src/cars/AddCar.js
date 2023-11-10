import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

export default function AddCar() {
  let navigate=useNavigate();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [car, setCar] = useState({
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    preco:"",
  });

  const { marca, modelo, cor, ano, preco } = car;

  const onImputChange = (e) => { 
   setCar({...car,[e.target.name]: e.target.value });
    }; 
    const onSubmit=async(e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8080/carrinho", car);
      navigate("/");
    };
 
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Car</h2>
          
          <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="marca" className="form-label">
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
            <label htmlFor="modelo" className="form-label">
            Modelo
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter modelo"
              name="modelo"
              value={modelo}
              onChange={(e) => onImputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cor" className="form-label">
              Cor
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter cor"
              name="cor"  
              value={cor}
              onChange={(e) => onImputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ano" className="form-label">
              Ano
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder="Enter ano"
              name="ano"  
              value={ano}
              onChange={(e) => onImputChange(e)}
              min="1900"
              max={currentYear}
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
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
        </form>
        </ div>
      </div>
    </div >
  );
}
