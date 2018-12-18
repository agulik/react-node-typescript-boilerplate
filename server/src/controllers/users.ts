import { Request, Response } from "express"
import { pgClient } from "../index"

export const allUsers = async (req: Request, res: Response) => {
  try {
    const values = await pgClient.query("SELECT * from users")
    res.send(values.rows)
  } catch (error) {
    console.log(error.stack)
  }
}
