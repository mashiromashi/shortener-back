import { ShortenerService } from '@/services/shortener.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class ShortenerController {
  public shortenerService = Container.get(ShortenerService);

  public createShortLink = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { url } = req.body;
      const shortLink = await this.shortenerService.createShortLink(url);
      res.status(201).send({ shortLink: `${req.protocol}://${req.get('host')}/${shortLink}` });
    } catch (error) {
      next(error);
    }
  };
}
