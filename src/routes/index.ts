import { Router } from "express";

import { ReservationsController } from "../controllers/ReservationsController";

const routes = Router();

const reservationsController = new ReservationsController();

routes.post("/book-table-search", reservationsController.bookTableSearch);
routes.post("/book-table", reservationsController.bookTable);

export { routes };