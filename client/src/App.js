import React, { useEffect, useState } from "react";
import "./App.scss";
// import CarCard from "./components/CarCard";
// import CarList from "./components/CarList";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
// import ParkCar from "./components/ParkCar";
import axios from "axios";
// import { Link, Route } from "react-router-dom";
function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cars")
      .then(res => {
        // console.log(res.data.cars);
        setCars(res.data.cars);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  // console.log(cars);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>The Car Lot</h1>
          <p className="motto">Park your car and watch it sell!</p>
        </div>
        <Navbar />
      </header>
      <Routes cars={cars} setCars={setCars} />
    </div>
  );
}

export default App;
