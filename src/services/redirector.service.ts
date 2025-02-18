import { PrismaClient } from "@prisma/client";
import { Service } from "typedi";

@Service()
export class RedirectorService {
  public link = new PrismaClient().link

  public async findLink(shortLink: string): Promise<string> {
    const link = await this.link.findUnique({
      where: {
        code: shortLink,
      },
    });
    return link.url;
  }
}