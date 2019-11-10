import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UpdateCar(props) {
  const { setCars } = props;
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
  const handleSubmit = e => {
    e.preventDefault();

    const vehicle = {
      mileage: e.target.mileage.value,
      transmissionType: e.target.transmissionType.value,
      title: e.target.title.value,
      msrp: e.target.msrp.value,
      year: e.target.year.value,
      imgURL: e.target.imgURL.value
    };
    // console.log(vehicle);
    axios
      .put(`/api/cars/${id}`, vehicle)
      .then(res => {
        // console.log(res.data);
        setCars(res.data);
        props.history.push("/");
      })
      .catch(err => console.error(err));
  };
  const goBack = () => {
    props.history.goBack();
  };
  console.log(car.imgURL);
  return (
    <div>
      <p className="backButton">
        <span onClick={() => goBack()}>&#8592; Cancel</span>
      </p>
      <form onSubmit={e => handleSubmit(e)}>
        <p>Update Your Vehicle Information:</p>
        <input type="number" name="year" placeholder={car.Year} />
        <input
          required
          type="number"
          name="mileage"
          placeholder={car.mileage}
        />
        <input required type="number" name="msrp" placeholder={car.MSRP} />
        <input
          type="text"
          name="imgURL"
          placeholder={car.imgURL != null ? car.imgURL : "Add Photo Link"}
        />
        <label>Transmission:</label>
        <select name="transmissionType">
          <option value="">Select and Option</option>
          <option
            value="automatic"
            selected={car.transmissionType == "automatic" ? true : false}
          >
            Automatic
          </option>
          <option
            value="standard"
            selected={car.transmissionType == "standard" ? true : false}
          >
            Standard
          </option>
        </select>
        <label>Title:</label>
        <select name="title">
          <option value="">Select and Option</option>
          <option value="clean">Clean</option>
          <option value="salvage">Salvage</option>
        </select>
        <button type="submit">Update Vehicle</button>
      </form>
    </div>
  );
}
