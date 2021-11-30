exports.up = function (knex) {};

exports.down = function (knex) {};
exports.up = function (knex) {
  return knex.schema.createTable("timer", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.integer("project_id").unsigned();
    table.foreign("project_id").references("projects.id");
    table.integer("task_id").unsigned();
    table.foreign("task_id").references("tasks.id");
    table.integer("feature_id").unsigned();
    table.foreign("feature_id").references("features.id");
    table.integer("problem_id").unsigned();
    table.foreign("problem_id").references("problems.id");
    table.integer("days");
    table.integer("hours");
    table.integer("minutes");
    table.integer("seconds");
    table.timestamp("created").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("timer");
};
