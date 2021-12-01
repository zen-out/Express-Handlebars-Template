exports.up = function(knex) {
    return knex.schema.createTable("tag_snippet", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.integer("problem_id").unsigned().references("problem.id").onUpdate("CASCADE")
        table.integer("cheatsheet_id").unsigned().references("cheatsheet.id").onUpdate("CASCADE")
        table.integer("hourglass_id").unsigned().references("hourglass.id").onUpdate("CASCADE")
        table.integer("task_id").unsigned().references("task.id").onUpdate("CASCADE")
        table.string("tag");
        table.string("snippet");
        table.string("link");
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("tag_snippet");
};