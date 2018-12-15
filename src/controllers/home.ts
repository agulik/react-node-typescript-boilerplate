import { Request, Response } from "express"
import { pgClient } from "../index"

export const index = async (req: Request, res: Response) => {
  res.send("hello world")
}
