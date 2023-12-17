import express from 'express'
const app = express()

import todos from "./routes/todosRoutes"

app.use(express.json())


app.use(todos)

app.listen(4000)