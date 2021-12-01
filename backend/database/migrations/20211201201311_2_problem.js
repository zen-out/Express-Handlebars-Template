exports.up = function(knex, Promise) {
    return knex.schema.createTable("problem", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")

        table.integer("hourglass_id").unsigned().references("hourglass.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.string("problem");
        table.string("whatshouldbe");
        table.string("whatactuallyis");
        table.string("hypothesis");
        table.string("plan");
        table.timestamp("created").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("problem");
};