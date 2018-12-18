import { Request, Response } from "express"
import * as Home from "../models/home"

export const index = (req: Request, res: Response) => {
  try {
    return Home.getHome(req, res)
  } catch (error) {
    console.log(error)
  }
}
