import express, { Request, Response, NextFunction } from "express";
import helpers from '../helpers/uniquePassword'

export default {

    async PasswordGenerator (req: Request, res: Response){
      
       const length:string = req.body.length
      const data:number= parseInt(length)
       console.log(length);
       const uniquePassword = helpers.uniquePassword(data)

    }

}