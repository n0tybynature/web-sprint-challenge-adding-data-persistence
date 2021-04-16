
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments("project_id")
        table.string('project_name')
            .notNullable()
        table.text('project_description')
        table.boolean('project_completed')
            .defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name')
            .unique()
            .notNullable()
        table.text('resource_description')
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.text('task_description')
            .notNullable()
        table.string('task_notes', 255)
        table.boolean('task_completed')
            .defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('resource_assignment', table => {
        table.increments('resource_assignment_id')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resource')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource_assignment')
};
