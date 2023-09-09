import { Request, Response } from "express";
import { Products } from "../repositories/productRepository";


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
        res.status(200).json(result);
    }

    getOne = async (req:Request, res:Response) => {
        const { code } = req.params; 
        try{

            const data = await products.getUnique(code);
            const result = JSON.parse(JSON.stringify(data, (key, value) =>
            typeof value === 'bigint'
            ? value.toString()
            : value 
            ));
            if(result){
                res.status(200).json(result);
            }else{
                res.status(400).json({message : "not found"});
            }
        }
        catch(error){
            console.log(error);
            res.status(400).json({message : "not found"});
        }
    }

    updatePrice = async (req:Request, res: Response) => {
        const {sales_price} = req.body;
        const id = Number(req.params.code);
        try{
            const updater = await products.updateProduct(sales_price, id);
            res.status(201).json(updater)
        }
        catch(error){
            res.status(400)
        }

    }


}
