import { RedirectorService } from "@/services/redirector.service";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";

export class RedirectorController {
  public redirector = Container.get(RedirectorService);

  public redirectTo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const shortLink = req.params.shortLink;
      const url = await this.redirector.findLink(shortLink);
      res.redirect(url);
    }catch(error) {
      next(error)
    }
  }
}