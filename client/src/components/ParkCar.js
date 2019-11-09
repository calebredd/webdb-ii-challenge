import React from "react";
import axios from "axios";
export default function ParkCar(props) {
  const { setCars } = props;
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.Year.value);
    // console.log(e.target.make.value);
    // console.log(e.target.model.value);
    const vehicle = {
      year: e.target.year.value,
      make: e.target.make.value,
      vin: e.target.vin.value,
      mileage: e.target.mileage.value,
      model: e.target.model.value,
      transmissionType: e.target.transmissionType.value,
      title: e.target.title.value,
      msrp: e.target.msrp.value
    };
    // console.log(vehicle);
    axios
      .post("/api/cars", vehicle)
      .then(res => {
        // console.log(res.data);
        setCars(res.data);
        props.history.push("/");
      })
      .catch(err => console.error(err));
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <p>Your Vehicle Information:</p>
        <input type="number" name="year" placeholder="Year" />
        <input required type="text" name="make" placeholder="Make" />
        <input required type="text" name="model" placeholder="Model" />
        <input required type="number" name="vin" placeholder="VIN" />
        <input required type="number" name="mileage" placeholder="Mileage" />
        <input required type="number" name="msrp" placeholder="MSRP" />
        <label>Transmission:</label>
        <select name="transmissionType">
          <option value="">Select and Option</option>
          <option value="automatic">Automatic</option>
          <option value="standard">Standard</option>
        </select>
        <label>Title:</label>
        <select name="title">
          <option value="">Select and Option</option>
          <option value="clean">Clean</option>
          <option value="salvage">Salvage</option>
        </select>
        <button type="submit">Park It</button>
      </form>
    </div>
  );
}
