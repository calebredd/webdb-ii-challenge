const express = require("express");
const server = express();
const Cars = require("./data/data-config");
server.use(express.json());

server.get("/api/cars", (req, res) => {
  Cars.find()
    .then(cars => {
      res.status(200).json({ cars });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Unable to access database" })
    );
});
server.get("/api/cars/:id", (req, res) => {
  Cars.findById(req.params.id)
    .then(cars => {
      res.status(200).json({ cars });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Unable to access database" })
    );
});
server.post("/api/cars", (req, res) => {
  const newCar = req.body;
  if (!newCar.make || !newCar.model || !newCar.vin || !newCar.mileage) {
    res
      .status(404)
      .send(
        "To add a car to the lot it must have a: Make, Model, VIN, and Mileage."
      );
  } else {
    Cars.insert({
      make: newCar.make,
      model: newCar.model,
      VIN: Number(newCar.vin),
      mileage: Number(newCar.mileage),
      transmissionType: newCar.transmissionType,
      title: newCar.title,
      MSRP: newCar.msrp,
      Year: newCar.year
    })
      .then(cars => {
        res.status(200).json({ cars });
      })
      .catch(err => res.status(500).send(err));
  }
});
server.put("/api/cars/:id", (req, res) => {
  const newCar = req.body;
  if (
    // newCar.make &&
    // newCar.model &&
    // newCar.vin &&
    newCar.mileage &&
    newCar.transmissionType &&
    newCar.title &&
    newCar.msrp &&
    newCar.year
  ) {
    Cars.update(req.params.id, {
      // make: newCar.make,
      // model: newCar.model,
      // VIN: Number(newCar.vin)
      mileage: Number(newCar.mileage),
      transmissionType: newCar.transmissionType,
      title: newCar.title,
      MSRP: newCar.msrp,
      Year: newCar.year
    })
      .then(cars => {
        res.status(201).json({ cars });
      })
      .catch(err => res.status(500).send(err));
  } else {
    res.status(500).send("Something went wrong");
  }
});
server.delete("/api/cars/:id", (req, res) => {
  Cars.remove(req.params.id)
    .then(cars => {
      res.status(202).json({ cars });
    })
    .catch(() =>
      res
        .status(500)
        .json({ errorMessage: "Unable to remove vehicle from the lot" })
    );
});
server.listen(4000, () => {
  console.log("Server listening at localhost:4000...");
});
