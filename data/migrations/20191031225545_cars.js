exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl
      .integer("VIN")
      .unique()
      .notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.string("transmissionType");
    tbl.string("title");
    tbl.integer("MSRP");
    tbl.integer("Year");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
