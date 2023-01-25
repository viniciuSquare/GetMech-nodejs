import { Prisma } from "@prisma/client";
import { BaseModel } from "../base/BaseModel";

export class Feedback extends BaseModel {
  id              : number | null = null
  description     : string | null = null
  authorContactId : number | null = null
  // contact?        : 

  constructor() {
    super()
  }

  protected get persistenceData(): any {
    return {
      id              : this.id,
      description     : this.description,
      authorContactId : this.authorContactId,
      // contact         : this.contact
    }
  }

  protected get prismaModel(): Prisma.FeedbacksDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined> {
    {
      return this.prisma.feedbacks;
    }
  }
}