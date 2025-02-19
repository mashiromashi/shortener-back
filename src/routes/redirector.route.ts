import { RedirectorController } from "@/controllers/redirector.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

export default class RedirectorRoute implements Routes {
  public path = "/redirect"
  public router = Router()
  public redirector = new RedirectorController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:shortCode`, this.redirector.redirectTo)
  }
}