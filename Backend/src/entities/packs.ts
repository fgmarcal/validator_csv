import { IProduct } from "./products";

export interface IPacks extends IProduct {
    id : number,
    pack_id : number,
    product_id : IProduct,
    qty : number,
}