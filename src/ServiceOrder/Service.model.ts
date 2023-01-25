import { Contacts, Prisma, Users } from "@prisma/client";
import { BaseModel } from "../base/BaseModel";

export class ServiceOrder extends BaseModel {

    id: number | null = null
    description: string | null = null
    usersId: number | null = null
    contactId: number | null = null
    state: ("Aberto" | "Designado" | "Concluido" | "Cancelado") = "Aberto"
    city: number | null = null
    vehicleYear: number | null = null
    vehicleModel: string | null = null
    vehicleBrand: string | null = null

    client: Users[] | null = null
    contact: Contacts[] | null = null

    constructor(data = {}) {
        super()
    }

    protected get persistenceData(): any {
        return {
            id           : this.id,
            description  : this.description,
            usersId      : this.usersId,
            contactId    : this.contactId,
            state        : this.state,
            city         : this.city,
            vehicleYear  : this.vehicleYear,
            vehicleModel : this.vehicleModel,
            vehicleBrand : this.vehicleBrand,
            client       : this.client,
            contact      : this.contact,
        }
    }

    protected get prismaModel(): Prisma.ServicesDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined> {
        return this.prisma.services;
    }

}