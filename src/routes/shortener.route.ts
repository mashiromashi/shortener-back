import { ShortenerController } from "@/controllers/shortener.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

export default class ShortnerRoute implements Routes {
  public path = "/short"
  public router = Router()
  public shortener = new ShortenerController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.shortener.createShortLink)
  }
}