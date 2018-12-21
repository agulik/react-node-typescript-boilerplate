import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import db from "./db"
import * as homeController from "./controllers/home"
import * as userController from "./controllers/user"

const app = express()

// Express configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Primary app routes
app.get("/", homeController.index)
app.get("/users/all", userController.fetchAllUsers)

db.query("DROP TABLE IF EXISTS values").catch(err => console.log(err))

db.query(
  "CREATE TABLE IF NOT EXISTS users (id INT, FirstName varChar(255), LastName varchar(255), Email varchar(255))"
).catch(err => console.log(err))
db.query(
  "INSERT INTO users(id, FirstName, LastName, Email) VALUES($1, $2, $3, $4)",
  [1, "Andrew", "Test", "andrew@test.com"]
)

app.listen(4000, () => console.log("Server is listening on port 4000"))
