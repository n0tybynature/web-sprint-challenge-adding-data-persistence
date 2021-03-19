
exports.up = function(knex) {
    return knex.schema
        .createTable('project', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name').notNullable()
            tbl.string('project_description')
            tbl.boolean('project_completed')
                .defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name').unique().notNullable()
            tbl.string('resource_description')
        })
        .createTable('task', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description').notNullable()
            tbl.string('task_notes')
            tbl.boolean('task_completed')
                .defaultTo(false)
            tbl.integer('project_id')
                .notNullable()
                .references('project_id')
                .inTable('project')
        })
        .createTable('project_resources', tbl => {
            tbl.increments('project_resources_id')
            tbl.integer('resource_id')
                .notNullable()
                .references('resource_id')
                .inTable('resource')
            tbl.integer('project_id')
                .notNullable()
                .references('project_id')
                .inTable('project')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resource_assignment')
        .dropTableIfExists('task')
        .dropTableIfExists('resources')
        .dropTableIfExists('project')
};
