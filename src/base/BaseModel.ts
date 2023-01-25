import { PrismaClient } from "@prisma/client";

export abstract class BaseModel {
  protected prisma: PrismaClient;

  id: number | null = null

  constructor() {
    this.prisma = new PrismaClient();
  }

  protected abstract get prismaModel(): any;
  protected abstract get persistenceData(): any;

  async list(): Promise<any[]> {
    const queryResponse = await this.prismaModel.findMany();

    this.prisma.$disconnect();
    return queryResponse
  }
  
  /**
   * Handles persistences transactions try/catch
   * */
  async save() {
    try {
      if (this.id)
        return await this.update(this.id, this.persistenceData)

      else
        return await this.create(this.persistenceData)

    } catch (error) {
      console.error(error)
    }

    this.prisma.$disconnect()
  }

  async update(id: number, data: any): Promise<any> {
    return await this.prismaModel.update({
      where: { id },
      data,
    });
  }

  async create(data: any): Promise<any> {
    return await this.prismaModel.create({
      data
    });
  }
}