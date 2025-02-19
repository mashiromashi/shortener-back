import { ShortenerService } from '@/services/shortener.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class ShortenerController {
  public shortenerService = Container.get(ShortenerService);

  public createShortLink = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { url } = req.body;
      const shortLink = await this.shortenerService.createShortLink(url);
      if (!url) {
        res.status(400).send({ message: 'URL is required' });
        return;
      }
      res.status(201).send({ shortLink: `${process.env.FRONTEND_URL}/${shortLink.shortCode}` });
    } catch (error) {
      next(error);
    }
  };
}
