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
    
    protected get persistenceData(): any {
        return {
            name:     this.name,
            fotoUrl:  this.fotoUrl,
            address:  this.address,
            isClient: this.isClient,
            isMech:   this.isMech
        }
    }

    protected get prismaModel(): Prisma.UsersDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined> | undefined {
        return this.prisma.users;
    }

}
