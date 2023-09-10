import React, { MouseEventHandler } from "react";

const Valid = (func:MouseEventHandler, sender:string)=>{

    return (<>
            <button type="submit" onClick={func}>{sender}</button>
    </>)
}

export default Valid;