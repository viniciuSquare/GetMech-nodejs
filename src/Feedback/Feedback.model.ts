import { Prisma } from "@prisma/client";
import { BaseModel } from "../base/BaseModel";

export class Feedback extends BaseModel {
  constructor() {
    super()
  }

  protected prismaModel: Prisma.FeedbacksDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined> {
    {
      return this.prisma.feedbacks;
    }
  }
}