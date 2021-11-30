exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.string("name");
    table.string("importance");
    table.string("status");
    table.string("image_url");
    table.timestamp("deadline");
    table.string("color");
    table.string("purpose");
    table.string("friendOneEmail");
    table.string("friendTwoEmail");

    table.timestamp("created").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
