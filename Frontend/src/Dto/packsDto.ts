import { IProd } from "./productsDto";

export interface IPacks extends IProd{
    id : number;
    pack_id : IProd;
    product_id : IProd;
    qty : number;
}