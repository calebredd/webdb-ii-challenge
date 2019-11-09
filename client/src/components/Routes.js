import React from "react";
import { Route } from "react-router-dom";
import CarCard from "./CarCard";
import ParkCar from "./ParkCar";
import CarList from "./CarList";
export default function Routes(props) {
  const { setCars, cars } = props;
  return (
    <div>
      <Route
        exact
        path="/"
        render={props => <CarList {...props} cars={cars} />}
      />

      <Route
        exact
        path="/cars"
        render={props => <CarList {...props} cars={cars} />}
      />

      <Route path="/about">
        <h2>Hello welcome to the About Page</h2>
      </Route>
      <Route
        path="/parkit"
        render={props => <ParkCar {...props} setCars={setCars} />}
      />
      <Route path="/cars/:id" component={CarCard} />
    </div>
  );
}
