
import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { User } from "./User.model";
import { BaseController } from "../base/BaseController";

export class UserController extends BaseController<User>{

    getDataFromRequest(request: Request) {
        let { id, name, fotoUrl, address, isUser, isMech } = request.body
        
        return { 
            id: Number(id), name, fotoUrl, address, isUser, isMech 
        };
    }

}