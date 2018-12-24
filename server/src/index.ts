import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
// import morgan from "morgan"

import db from "./db"
import * as homeController from "./controllers/home"
import * as userController from "./controllers/user"

const app = express()

// Express configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(morgan("dev"))

// Primary app routes
app.get("/", homeController.index)
app.get("/users/all", userController.fetchAllUsers)

const initializeDb = async () => {
  await db.query("DROP TABLE IF EXISTS users").catch(err => console.log(err))

  await db
    .query(
      "CREATE TABLE IF NOT EXISTS users(id SERIAL, FirstName varChar(255), LastName varchar(255), Email varchar(255), PRIMARY KEY (id))"
    )
    .catch(err => console.log(err))
  await db.query(
    "INSERT INTO users(id, FirstName, LastName, Email) VALUES($1, $2, $3, $4)",
    [1, "Andrew", "Test", "andrew@test.com"]
  )
}

initializeDb()

app.listen(4000, () => console.log("Server is listening on port 4000"))
