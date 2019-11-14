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
  const handleChangeMileage = e => {
    setCar({ ...car, mileage: e.target.value });
  };
  const handleChangeMSRP = e => {
    setCar({ ...car, MSRP: e.target.value });
  };
  const handleChangeImg = e => {
    setCar({ ...car, imgURL: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const vehicle = {
      mileage: e.target.mileage.value,
      transmissionType: e.target.transmissionType.value,
      title: e.target.title.value,
      msrp: e.target.msrp.value,
      imgURL: e.target.imgURL.value
    };
    // console.log(vehicle);
    axios
      .put(`/api/cars/${id}`, vehicle)
      .then(res => {
        // console.log(res.data);
        setCar(res.data);
        axios
          .get("/api/cars")
          .then(res => {
            // console.log(res.data.cars);
            setCars(res.data.cars);
            props.history.push(`/cars/${id}`);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };
  const goBack = () => {
    props.history.goBack();
  };
  // console.log(car);
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <p>Update Your Vehicle Information:</p>
        <p>{car.Year + " " + car.make + " " + car.model}</p>
        <label>Mileage:</label>
        <input
          onChange={e => handleChangeMileage(e)}
          required
          type="number"
          name="mileage"
          value={car.mileage}
          placeholder="Mileage"
        />
        <lable>MSRP:</lable>
        <input
          required
          type="number"
          onChange={e => handleChangeMSRP(e)}
          name="msrp"
          value={car.MSRP}
          placeholder="MSRP"
        />
        <label>Car Photo Link:</label>
        <input
          type="text"
          name="imgURL"
          onChange={e => handleChangeImg(e)}
          value={car.imgURL != null ? car.imgURL : undefined}
          placeholder={car.imgURL != null ? car.imgURL : "Add Photo Link"}
        />
        <label>Transmission:</label>
        <select name="transmissionType">
          <option value="">Select and Option</option>
          <option
            value="automatic"
            selected={car.transmissionType === "automatic" ? true : false}
          >
            Automatic
          </option>
          <option
            value="standard"
            selected={car.transmissionType === "standard" ? true : false}
          >
            Standard
          </option>
        </select>
        <label>Title:</label>
        <select name="title">
          <option value="">Select and Option</option>
          <option value="clean" selected={car.title === "clean" ? true : false}>
            Clean
          </option>
          <option
            value="salvage"
            selected={car.title === "salvage" ? true : false}
          >
            Salvage
          </option>
        </select>
        <div>
          <button type="submit">Update Vehicle</button>
          <button onClick={() => goBack()}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
