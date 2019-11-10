exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.string("imgURL");
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("imgURL");
  });
};
