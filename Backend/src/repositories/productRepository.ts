import { products } from '@prisma/client';
import {prisma} from '../prisma/client';


export class Products {

        getAllProducts = async (): Promise<products[]>=> {
                const allProducts = await prisma.products.findMany();
                return allProducts;
        }

        getUnique = async (code:any) => {
                const item = await prisma.products.findUnique({
                        where: {
                                code: code
                        }
                });
                return item;
        }

        checkPrice = async () =>{
                
        }
        
        updateProduct = async(code:any, salesPrice:number) =>{
                const [isPack, quantity] = await prisma.$transaction(
                        [
                                prisma.packs.findFirstOrThrow({where:{pack_id : code}}),
                                prisma.packs.findFirst({where:{pack_id : code}, select:{
                                        qty : true
                                }})
                        ]
                )
                const countQuantity = Number(quantity?.qty);


                if(isPack){
                        code = isPack.product_id;
                        salesPrice = salesPrice / countQuantity;

                        const update = await prisma.products.update({
                                where:{
                                        code : code
                                },
                                data : {
                                        sales_price : salesPrice
                                }
                        })
                        return update;
                }else {
                        
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
        
}