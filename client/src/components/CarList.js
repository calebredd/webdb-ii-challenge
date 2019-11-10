import React from "react";
import { Link } from "react-router-dom";
export default function CarList(props) {
  const { cars } = props;
  return (
    <div>
      <h2>Cars on the Lot:</h2>
      <div className="carList">
        {cars.map(car => (
          <Link to={`/cars/${car.id}`} key={car.id}>
            <div className="carCard">
              <p className="carHeader">
                {" "}
                {car.Year} {car.make} {car.model}
              </p>
              <img src={car.imgURL} alt={car.imgURL} />
              <p>Transmission: {car.transmissionType}</p>
              <p>Odometer: {car.mileage}</p>
              <p>Title: {car.title}</p>
              <p>MRSP: {car.MSRP}</p>
              <p>Location: {car.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
