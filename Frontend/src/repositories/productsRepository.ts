import axios from "axios";
import { UpdateProdDto } from "../Dto/productsDto";

const url = "http://localhost:5555/products"

export class Products{

    getOne = async (code:string):Promise<any>=>{
            const codeID = String(code)
            try{
                return await axios.get(`${url}/${codeID}`)
                        .then((res)=> res.data);
            }
            catch(error){
                console.log(error);
            }
    }

    sendUpdate = async (dto:UpdateProdDto):Promise<void>=>{
        const codeID = dto.code;
        try{
            
            return await axios.patch(`${url}/${codeID}`, dto)
                            .then((res) =>res.data)
        }
        catch(error){
            console.error(error);
        }
    }
}