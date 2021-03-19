
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description:"baz",
          task_notes:null,
          task_completed:false,
          project_id:1
        }
      ]);
    });
};
