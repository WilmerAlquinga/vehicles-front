import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VehicleService from "../services/VehicleService";
import listModels from "../assets/Models";

function VehicleCreateComponent() {
  const [plate, setPlate] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2023);
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [observation, setObservation] = useState("");
  const navigate = useNavigate();

  const saveVehicle = (e) => {
    e.preventDefault();
    const vehicle = { plate, model, year, purchaseDate, observation };
    VehicleService.create(vehicle)
      .then((res) => {
        navigate("/vehiculos");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container">
      <h1>Agregar Vehiculo</h1>
      <form>
        <div className="row mb-3">
          <div className="mb-3">
            <label className="form-label">Placa</label>
            <input
              type="text"
              name="plate"
              className="form-control"
              placeholder="Placa"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Modelo</label>
            <select className="form-select"  value={model} onChange={(e) => setModel(e.target.value)}>
              {listModels.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Año</label>
            <input
              type="number"
              placeholder="Año"
              name="year"
              className="form-control"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de compra</label>
            <input
              type="date"
              name="purchaseDate"
              className="form-control"
              id="purchaseDate"
              placeholder="Fecha de compra"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Observaciones</label>
            <textarea
              name="observation"
              className="form-control"
              id="observation"
              placeholder="Observaciones..."
              rows="3"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => saveVehicle(e)}
            >
              Guardar
            </button>
            <Link
              to="/vehicles"
              type="button"
              className="btn btn-secondary mx-3"
            >
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VehicleCreateComponent;
