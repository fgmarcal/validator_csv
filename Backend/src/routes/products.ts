import { Router } from "express";
import {ProductsController} from "../controllers/productsController"


export const productsRouter = Router();

const productsController = new ProductsController;

productsRouter.get("/", productsController.home)
productsRouter.get("/all",productsController.getAll);
productsRouter.get("/:code", productsController.getOne);


productsRouter.patch("/:code", productsController.updatePrice);



