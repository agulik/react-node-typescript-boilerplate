import { Pool } from "pg"
import keys from "../../keys"

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
} as any)

pgClient.on("error", () => console.log("Lost PG connection"))

// initialize table
pgClient
  .query("CREATE TABLE IF NOT EXISTS users (id INT)")
  .catch((error: string) => console.log(error))

const db = {
  query: (text: string, params?: any, callback?: any) => {
    const start = Date.now()
    return pgClient.query(text, params, (err, res) => {
      const duration = Date.now() - start
      console.log("executed query", { text, duration, rows: res.rowCount })
      callback(err, res)
    })
  }
}

export default db
