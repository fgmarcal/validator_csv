
export interface IProd {
    code : string;
    name : string;
    cost_price : number;
    sales_price : number;
}

export interface UpdateProdDto{
    code : string;
    sales_price : number;
}