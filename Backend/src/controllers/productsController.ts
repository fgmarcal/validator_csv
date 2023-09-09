import { Request, Response } from "express";
import { Products } from "../repositories/productRepository";
import {parse} from  "json-bigint"

const products = new Products;
export class ProductsController{

    home = async (req:Request, res:Response)=>{
        return res.status(200).json({message : "Hello"})
    }



    getAll = async (req:Request, res:Response)=>{

        const data = await products.getAllProducts();
        const teste = JSON.parse(JSON.stringify(data, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    ));
        return res.status(200).json(teste);
    }

    getOne = async (req:Request, res:Response) => {
        const { code } = req.params; // Obtenha o valor do parâmetro "code" da rota
        const data = await products.getUnique(code); // Passe o valor para a função "getUnique"
        const teste = JSON.parse(JSON.stringify(data, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    ));
        return res.status(200).json(teste);
    }


}
