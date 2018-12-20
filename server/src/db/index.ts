import { Pool } from "pg"
import keys from "../../keys"

const db = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
} as any)

db.on("error", () => console.log("Lost PG connection"))

// const db = {
//   query: (text: any, params?: any, callback?: any) => {
//     const start = Date.now()
//     return pgClient.query(text, params, (err, res) => {
//       const duration = Date.now() - start
//       console.log("executed query", { text, duration, rows: res.rowCount })
//       // callback(err, res)
//     })
//   }
// }

export default db
