
import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

export class ClientController {

    getClientDataFromRequest(request: Request) {
        let { id, name, fotoUrl, address, isClient, isMech } = request.body
        
        return { 
            id: Number(id), name, fotoUrl, address, isClient, isMech 
        };
    }

    get(request: Request, response: Response) {
        const prismaClient: PrismaClient = new PrismaClient()
        try {
            prismaClient.users.findMany().then(users => {
                response.status(200)
                    .json(users);
            })
        } catch (error) {
            console.log(error);
            return error;
        }
        prismaClient.$disconnect()
    }

    create(request: Request, response: Response) {
        const prismaClient: PrismaClient = new PrismaClient();
        
        this.getClientDataFromRequest(request);

        try {
            prismaClient.users.create({
                data: request.body
            }
            ).then(createdService => response.status(201).json(createdService))
        } catch (error) {

            response.json(error);
        }
        prismaClient.$disconnect()
    }

    update(request: Request, response: Response) {
        const prismaClient: PrismaClient = new PrismaClient();

        if (!request.query.id) {
            response.status(403).json('Page ID not informed');
            return
        }

        let data = this.getClientDataFromRequest(request);

        try {
            prismaClient.users.update({
                where: {
                    id: Number(data.id)
                },
                data
            }
            ).then(createdService => response.status(201).json(createdService))
        } catch (error) {

            response.json(error);
        }
        prismaClient.$disconnect()
    }
}