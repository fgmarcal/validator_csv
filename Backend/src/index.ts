import { server } from "./server/server";

const port = process.env.PORT || 5555;

server.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
});