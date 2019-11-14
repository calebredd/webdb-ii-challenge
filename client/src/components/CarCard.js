import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function CarCard(props) {
  // console.log(props.match.params.id);
  const id = props.match.params.id;
  const [car, setCar] = useState({});
  useEffect(() => {
    axios
      .get(`/api/cars/${id}`)
      .then(res => {
        // console.log(res.data.cars);
        setCar(res.data.cars[0]);
      })
      .catch(err => console.error(err));
  }, [id]);
  // const goBack = () => {
  //   props.history.goBack();
  // };
  // console.log(car);
  return (
    <>
      <p className="cardNav">
        <Link to={"/"}>
          <span>&#8592; Back to Cars</span>
        </Link>
        <Link to={`/updatecar/${id}`}>
          <span>Update Car Listing &#8594;</span>
        </Link>
      </p>
      <div className="carView">
        <div className="carCard">
          <p className="carHeader">
            {" "}
            {car.Year} {car.make} {car.model}
          </p>
          <img src={car.imgURL} alt={car.imgURL} />
          <p>Transmission: {car.transmissionType}</p>
          <p>Odometer: {car.mileage} miles</p>
          <p>Title: {car.title}</p>
          <p>MRSP: ${car.MSRP}</p>
          <p>Location: Lot #{car.id}</p>
        </div>
      </div>
    </>
  );
}
