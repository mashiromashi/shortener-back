import { link } from "@/entities/link";
import { getDB } from "@/utils/db";
import { eq } from "drizzle-orm";
import { Service } from "typedi";

@Service()
export class RedirectorService {

  public async findLink(shortLink: string): Promise<string> {
    const db = getDB()
    const linkCheck = await db.select().from(link).where(eq(link.shortCode, shortLink));
    return linkCheck[0].url;
  }
}