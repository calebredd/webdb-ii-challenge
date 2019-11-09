const express = require("express"),
  router = express(),
  Cars = require("../data/data-config");
router.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h2>Welcome to the Car Lot</h2><p>Click <a href='api/cars'>here</a> to see our list of vehicles!</p>"
    );
});
router.get("/cars", (req, res) => {
  Cars.find()
    .then(cars => {
      res.status(200).json({ cars });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Unable to access database" })
    );
});
router.get("/cars/:id", (req, res) => {
  Cars.findById(req.params.id)
    .then(cars => {
      res.status(200).json({ cars });
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Unable to access database" })
    );
});
router.post("/cars", (req, res) => {
  const newCar = req.body;
  // console.log(newCar);
  if (!newCar.make || !newCar.model || !newCar.vin || !newCar.mileage) {
    console.log("Something was missing in the Post Request");
    res.status(404).json({
      errorMessage:
        "To add a car to the lot it must have a: Make, Model, VIN, and Mileage."
    });
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
        res.status(200);
        Cars.find()
          .then(cars => {
            res.status(200).json(cars);
          })
          .catch(() =>
            res.status(500).json({ errorMessage: "Unable to access database" })
          );
      })
      .catch(err => res.status(500).send(err));
  }
});
router.put("/cars/:id", (req, res) => {
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
router.delete("/cars/:id", (req, res) => {
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

module.exports = router;
