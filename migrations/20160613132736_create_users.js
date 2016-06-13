
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('handle').unique();
    table.string('firstName');
    table.boolean('notify');
    table.boolean('media');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
