import "./App.css";
import HeaderComponent from "./layout/HeaderComponent";
import FooterComponent from "./layout/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehicleListComponent from "./components/VehicleListComponent";
import VehicleCreateComponent from "./components/VehicleCreateComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<VehicleListComponent />}></Route>
          <Route path="/vehiculos" element={<VehicleListComponent />}></Route>
          <Route
            path="/agregar-vehiculo"
            element={<VehicleCreateComponent />}
          ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
