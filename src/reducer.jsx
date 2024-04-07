import { useEffect } from "react";
import { useState } from "react";

export function Comp() {
    const [ c, setC] = useState(0);
    console.log(c);
    useEffect(()=>{
        return ()=>{
            setC(c+1)
        }
    },[c])

    return <label>{c}</label>
}