
exports.up = function(knex) {
  return knex.schema.createTable("dealer", tbl => {
    tbl.increments(),
    tbl.text('VIN', 32).unique().notNullable()
    tbl.text('make').notNullable(),
    tbl.text('model').notNullable(),
    tbl.float('milage').notNullable()    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("dealer");
};
