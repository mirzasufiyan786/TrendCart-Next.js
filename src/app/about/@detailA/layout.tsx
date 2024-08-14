import React from "react";

export default function aboutLayout({children,headingD}:{
    children:React.ReactNode;
    headingD:React.ReactNode;
   
}){

    return(
        <>
        <div >
        {headingD}
             {children}</div>
        </>
    )
}