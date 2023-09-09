import { Request, Response } from "express";
import { Products } from "../repositories/productRepository";
import {parse} from  "json-bigint"

const products = new Products;
export class ProductsController{

    home = async (req:Request, res:Response)=>{
        return res.status(200).json({message : "Nothing Here"})
    }



    getAll = async (req:Request, res:Response)=>{

        const data = await products.getAllProducts();
        const result = JSON.parse(JSON.stringify(data, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value
    ));
        return res.status(200).json(result);
    }

    getOne = async (req:Request, res:Response) => {
        const { code } = req.params; 
        const data = JSON.parse(JSON.stringify(code, (key, value) =>
        typeof value === 'bigint'
        ? value.toString()
        : value 
        ));
        const result = await products.getUnique(data);
        return res.status(200).json(result);
    }

    updatePrice = async (req:Request, res: Response) => {
        const {sales_price, code} = req.body;
        const updater = await products.updateProduct(sales_price, code);

    }


}
