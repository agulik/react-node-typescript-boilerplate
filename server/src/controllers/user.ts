import { Request, Response } from "express"
import * as User from "../models/user"

export const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    return await User.getAllUsers(req, res)
  } catch (error) {
    console.log(error)
  }
}
