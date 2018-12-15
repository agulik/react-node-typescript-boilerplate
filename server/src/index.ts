import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Pool } from "pg"

import keys from "../keys"
import * as homeController from "./controllers/home"
import * as usersController from "./controllers/users"

const app = express()

// Express configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Postgres configuration
export const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
})

pgClient.on("error", () => console.log("Lost PG connection"))

pgClient
  .query("CREATE TABLE IF NOT EXISTS users (id INT)")
  .catch((error: string) => console.log(error))

// Primary app routes
app.get("/", homeController.index)
app.get("/users/all", usersController.allUsers)

app.listen(8080, () => console.log("Server is listening on port 8080"))
