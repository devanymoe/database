exports.seed = function(knex, Promise) {
  return Promise.join(
    //delete existing rows and restart
    knex('users').del(),
    //seed db
    knex('users').insert({
      handle: 'GiulianaJoe',
      firstName: 'Giuliana',
      notify: true,
      media: false
    }),
    knex('users').insert({
      handle: 'SonalNiko',
      firstName: 'Sonal',
      notify: true,
      media: false
    }),
    knex('users').insert({
      handle: 'JulietCeres',
      firstName: 'Juliet',
      notify: true,
      media: false
    }),
    knex('users').insert({
      handle: 'AnnekeRobert',
      firstName: 'Anneke',
      notify: true,
      media: false
    }),
    knex('users').insert({
      handle: 'CarynHermione',
      firstName: 'Caryn',
      notify: false,
      media: false
    })
  );
}
console.log('users');
