import * as express from 'express'
import { HomeView } from "./views/index";
class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private getRouter() {
    const router = express.Router()
    router.get('/', HomeView)
    router.get('/:name', HomeView)
    return router
  }

  private mountRoutes (): void {
    this.express.use('/', this.getRouter())
  }
}

export default new App().express