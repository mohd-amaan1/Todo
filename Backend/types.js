// input validation using zod

const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().min(3),
    desc: zod.string().min(5)
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}