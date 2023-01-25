
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class FeedbackController {

    get(request: Request, response: Response) {
        try {
            const prismaUser: PrismaClient = new PrismaClient()
            prismaUser.feedbacks.findMany().then(feedbacks => {
                response.status(200)
                    .json(feedbacks);
            })
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    create(request: Request, response: Response) {
        const prismaUser: PrismaClient = new PrismaClient();
        try {
            prismaUser.feedbacks.create({
                data: request.body
            }
            ).then(createdService => response.status(201).json(createdService))
        } catch (error) {

            response.json(error);
        }
        prismaUser.$disconnect()
    }

    update(request: Request, response: Response) {
        const prismaUser: PrismaClient = new PrismaClient();

        if (!request.query.id) {
            response.status(403).json('Page ID not informed');
            return
        }

        try {
            prismaUser.feedbacks.update({
                where: {
                    id: Number(request.query.id)
                },
                data: request.body
            }
            ).then(createdService => response.status(201).json(createdService))
        } catch (error) {

            response.json(error);
        }
        prismaUser.$disconnect()
    }
}