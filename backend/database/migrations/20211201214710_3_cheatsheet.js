exports.up = function(knex) {
    return knex.schema.createTable("cheatsheet", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")

        table.integer("hourglass_id").unsigned().references("hourglass.id").onUpdate("CASCADE")
        table.integer("problem_id").unsigned().references("problem.id").onUpdate("CASCADE")
        table.string("title");
        table.string("key_info");
        table.string("description");
        table.string("notes");
        table.string("structure");
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("cheatsheet");
};