import { Prisma, PrismaClient } from "@prisma/client";

export abstract class BaseService {

    protected prismaClient: PrismaClient
    private model: string

    constructor (
        prismaClient: PrismaClient,
        model: string
    ) {
        this.model = model;
        this.prismaClient = prismaClient;
    }
}