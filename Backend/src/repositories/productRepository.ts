import { products } from '@prisma/client';
import {prisma} from '../prisma/client';

export class Products {

        getAllProducts = async (): Promise<products[]>=> {

                const allProducts = await prisma.products.findMany();
                return allProducts;
        }

        updateProduct = async(code:number, salesPrice:number) =>{
                return [code, salesPrice]
        }      
        
        getUnique = async (code:any) => {
                const item = await prisma.products.findUnique({
                        where: {
                            code: code
                        }
                    });
                    return item;
        }


}