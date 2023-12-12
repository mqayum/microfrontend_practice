import { mount } from "marketing/MarketingIndex"
import React,{useRef, useEffect} from "react"

export default () => {
    const marketingAppDivRef = useRef(null)
    useEffect(()=>{
        if(marketingAppDivRef.current)
            mount(marketingAppDivRef.current)
    },[])
    return (
        <div ref={marketingAppDivRef}></div>
    )
}