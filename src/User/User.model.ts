import { Prisma } from "@prisma/client";
import { BaseModel } from "../base/BaseModel";


export class User extends BaseModel {
    name:     string  | null= null
    fotoUrl:  string  | null= null
    address:  string  | null= null
    isClient: boolean | null= null
    isMech:   boolean | null= null

    constructor( data = {} ) {
        super();
        
        console.log(data)
    }
    
    protected prismaModel: Prisma.UsersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined> {
        return this.prisma.users;
    }
}