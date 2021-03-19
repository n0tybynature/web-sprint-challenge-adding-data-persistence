
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name:"bar", project_description:"none", project_completed:false},   
      ]);
    });
};
