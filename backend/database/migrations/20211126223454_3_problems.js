exports.up = function (knex, Promise) {
  return knex.schema.createTable("problems", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");

    table.integer("project_id").unsigned();
    table.foreign("project_id").references("projects.id");
    table.integer("feature_id").unsigned();
    table.foreign("feature_id").references("features.id");
    table.string("problem");
    table.string("whatshouldbe");
    table.string("whatactuallyis");
    table.string("hypothesis");
    table.string("plan");
    table.string("status");
    table.timestamp("created").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("problems");
};
