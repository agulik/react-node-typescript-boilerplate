import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

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

app.listen(4000, () => console.log("Server is listening on port 4000"))
