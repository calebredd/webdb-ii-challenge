exports.seed = function(knex, Promise) {
  // // Deletes ALL existing entries
  // return knex('cars').del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('cars').insert([
  //       {id: 1, colName: 'rowValue1'},
  //       {id: 2, colName: 'rowValue2'},
  //       {id: 3, colName: 'rowValue3'}
  //     ]);
  //   });
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          make: "Chevrolet",
          model: "Colorado",
          VIN: 123456789,
          mileage: 36000,
          transmissionType: "automatic",
          title: "clean",
          MSRP: 29000,
          Year: 2018
        },
        {
          make: "Ford",
          model: "F-150",
          VIN: 223456782,
          mileage: 56000,
          transmissionType: "automatic",
          title: "salvage",
          MSRP: 5000,
          Year: 1995
        },
        {
          make: "Dodge",
          model: "Dakota",
          VIN: 123456787,
          mileage: 116000,
          transmissionType: "standard",
          title: "clean",
          MSRP: 3000,
          Year: 2001
        },
        {
          make: "Nissan",
          model: "Altima",
          VIN: 323456786,
          mileage: 136000,
          transmissionType: "automatic",
          title: "salvage",
          MSRP: 12000,
          Year: 2013
        },
        {
          make: "Honda",
          model: "CR-V",
          VIN: 523456785,
          mileage: 336000,
          transmissionType: "automatic",
          title: "clean",
          MSRP: 17500,
          Year: 2020
        }
      ]);
    });
};
