import { link } from '@/entities/link';
import { getDB } from '@/utils/db';
import { Service } from 'typedi';

@Service()
export class ShortenerService {


  public async generateShortLink(): Promise<string> {
    const randomString = Math.random().toString(36).substring(2, 9);
    return randomString;
  }

  public async createShortLink(url: string) {
    const db = getDB();
    const shortLink = await this.generateShortLink();
    // one week of availability
    const newLink = await db.insert(link).values({
      url,
      shortCode: shortLink,
    }).returning({shortCode: link.shortCode})
    return newLink[0]
  }

  // public async findLink(shortLink: string): Promise<link> {
  //   const link = await this.link.findUnique({
  //     where: {
  //       code: shortLink,
  //     },
  //   });
  //   return link;
  // }
}
