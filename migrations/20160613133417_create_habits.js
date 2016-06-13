
exports.up = function(knex, Promise) {
  return knex.schema.createTable('habits', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('cascade');
    table.string('title');
    table.string('desc');
    table.boolean('notify');
    table.time('time');
    table.boolean('sun');
    table.boolean('mon');
    table.boolean('tue');
    table.boolean('wed');
    table.boolean('thu');
    table.boolean('fri');
    table.boolean('sat');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('habits');
};
