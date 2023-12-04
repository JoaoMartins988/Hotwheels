import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCar() {
const [car, setCars] = useState({
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    tipo:"",
    preço:""
});

const {id} = useParams();

useEffect(() => {
    loadCars();
},);

const loadCars = async () => {
    const result = await axios.get(`http://localhost:8080/carrinho/${id}`);
    setCars(result.data);   
};
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Car Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of car id : {car.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>marca:</b>
                                    {car.marca}
                                </li>
                                <li className="list-group-item">
                                    <b>modelo:</b>
                                    {car.modelo}
                                </li>
                                <li className="list-group-item">
                                    <b>cor:</b>
                                    {car.cor}
                                </li>    
                                <li className="list-group-item">
                                    <b>ano:</b>
                                    {car.ano}
                                </li>
                                <li className="list-group-item">
                                    <b>tipo:</b>
                                    {car.tipo}
                                </li>
                                <li className="list-group-item">
                                    <b>preço:</b>
                                    {car.preço}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/home"}>back to Home</Link>
                </div>
            </div>
        </div>
    );
}