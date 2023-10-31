import React, { useEffect, useState } from "react";
import VehicleService from "../services/VehicleService";
import { Link } from "react-router-dom";

function VehicleListComponent() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    listVehicles();
  }, []);

  const listVehicles = () => {
    VehicleService.getAll()
      .then((res) => {
        setVehicles(res.data.content);
      })
      .catch((error) => {
        console.log("Error al obtener el listado de vehículos: " + error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Listado de Vehiculos</h1>
      <Link to="/agregar-vehiculo" className="btn btn-primary mb-2 mr-auto">
        Agregar Vehiculo
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table table-dark">
            <tr>
              <th scope="col">Placa</th>
              <th scope="col">Modelo</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.plate}>
                <td>{vehicle.plate}</td>
                <td>{vehicle.model}</td>
                <td>{`$ ${vehicle.price}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VehicleListComponent;
