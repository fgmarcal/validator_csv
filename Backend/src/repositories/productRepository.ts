import { products } from '@prisma/client';
import {prisma} from '../prisma/client';

export class Products {

        getAllProducts = async (): Promise<products[]>=> {
                const allProducts = await prisma.products.findMany();
                return allProducts;
        }

        getUnique = async ({code}:products) => {
                const item = await prisma.products.findUnique({
                        where: {
                                code: code
                        }
                });
                return item;
        }
        
        updateProduct = async(code:bigint, salesPrice:number) =>{
                const update = await prisma.products.update({
                        where:{
                                code : code
                        },
                        data : {
                                sales_price : salesPrice
                        }
                })
                return update;
        }      
        
}