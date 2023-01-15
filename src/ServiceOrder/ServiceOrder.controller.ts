
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class ServiceOrderController {

    get(request: Request, response: Response) {
        try {
            const prismaClient: PrismaClient = new PrismaClient()
            prismaClient.services.findMany().then(services => {
                response.status(200)
                    .json(services);
            })
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    create(request: Request, response: Response) {
        const prismaClient: PrismaClient = new PrismaClient();
        try {
            prismaClient.services.create({
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

        try {
            prismaClient.services.update({
                where: {
                    id: Number(request.query.id)
                },
                data: request.body
            }
            ).then(createdService => response.status(201).json(createdService))
        } catch (error) {

            response.json(error);
        }
        prismaClient.$disconnect()
    }
}