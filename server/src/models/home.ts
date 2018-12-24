import { Request, Response } from "express"

export const getHome = async (req: Request, res: Response) => {
  res.send("hello world! This is the home page!")
}
