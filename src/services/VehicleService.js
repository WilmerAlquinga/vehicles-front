import axios from "axios";

const VEHICLE_SERVICE_BASE_URL = "http://localhost:8080/api/v1/vehicles";

class VehicleService {
  getAll() {
    return axios.get(VEHICLE_SERVICE_BASE_URL);
  }

  create(vehicle) {
    return axios.post(VEHICLE_SERVICE_BASE_URL, vehicle);
  }
}

export default new VehicleService();
