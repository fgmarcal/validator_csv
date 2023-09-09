import axios from "axios";


const url = "http://localhost:5555/products"

export class Products{

    getOne = async (code:any):Promise<void>=>{
            const codeID = String(code)
            try{
                return await axios.get(`${url}/${codeID}`)
                        .then((res)=>res.data);
            }
            catch(error){
                console.log(error);
            }
    }
}