import { PrismaClient, link } from '@prisma/client';
import { Service } from 'typedi';

@Service()
export class ShortenerService {
  public link = new PrismaClient().link

  public async findAllLinks(): Promise<link[]> {
    const allLinks: any = await this.link.findMany();
    return allLinks;
  }

  public async generateShortLink(): Promise<string> {
    const randomString = Math.random().toString(36).substring(2, 9);
    return randomString;
  }

  public async createShortLink(url: string): Promise<string> {
    const shortLink = await this.generateShortLink();
    // one week of availability
    const availbity = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;

    await this.link.create({
      data: {
        code: shortLink,
        ttl: availbity,
        url
      },
    });
    return shortLink;
  }

  public async findLink(shortLink: string): Promise<link> {
    const link = await this.link.findUnique({
      where: {
        code: shortLink,
      },
    });
    return link;
  }
}
