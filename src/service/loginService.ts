import { Request, Response } from "express";
import fs from "fs";

export class LoginService {
    nextId: number;
    signup(req: Request, res:Response){
        const { username, email, password, imageUrl} = req.body;
        
    }
    

     readData() {
        const data = fs.readFileSync("src/database/db.json", "utf-8");
        return JSON.parse(data);
      }
      
}