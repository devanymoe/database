
exports.up = function(knex, Promise) {
  return knex.schema.createTable('habits_users', function(table) {
    table.increments();
    table.integer('habit_id').references('id').inTable('habits').onDelete('cascade');
    table.date('success');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('habits_users');
};
