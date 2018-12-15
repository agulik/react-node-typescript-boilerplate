import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

// Express configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Primary app routes.
 */
app.get("/", function(req, res) {
  res.send("hello world")
})

app.listen(8080, () => console.log("Server is listening on port 8080"))
