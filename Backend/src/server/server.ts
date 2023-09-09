import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import {routes} from "../routes/routes";
import { AppError } from "../errors/appError";


const allowedOrigins = "https://localhost:3000";

const options: cors.CorsOptions = {
    origin: allowedOrigins
  };

const server = express();

server.use(express.json());
server.use(cors(options));

server.use(routes);

server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

server.get('/', (req:Request, res:Response)=>{
  return res.status(200).json({message: "touched server"})
})



export {server}