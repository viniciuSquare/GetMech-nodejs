import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { BaseModel } from "./BaseModel";

export class BaseController<Model> {
    model: typeof BaseModel

    constructor( model: typeof BaseModel ) { 
        this.model = model;
    }
    
    protected getDataFromRequest( request: Request ) {
        return request.body
    }


    get(request: Request, response: Response) {
        try {
            
            response.json(this.model.list().then(data=>console.log(data)));

        } catch (error) {
            console.log(error);
            return error;
        }
        // prismaUser.$disconnect()
    }

    create(request: Request, response: Response) {
        const model = this.getDataFromRequest(request)
        console.log(user)
        model.create(user).then( data => console.log(data) );

        
        
        // this.getUserDataFromRequest(request);

        // try {
        //     prismaUser.users.create({
        //         data: request.body
        //     }
        //     ).then(createdService => response.status(201).json(createdService))
        // } catch (error) {

        //     response.json(error);
        // }
        // prismaUser.$disconnect()
    }

    update(request: Request, response: Response) {
        const prismaUser: PrismaClient = new PrismaClient();

        if (!request.query.id) {
            response.status(403).json('Page ID not informed');
            return
        }

        let data = this.getUserDataFromRequest(request);

        try {
            prismaUser.users.update({
                where: {
                    id: Number(data.id)
                },
                data
            }
            ).then(createdService => response.status(201).json(createdService))
        } catch (error) {

            response.json(error);
        }
        prismaUser.$disconnect()
    }
}