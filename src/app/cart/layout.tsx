import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:"Cart"
    }
   
export default function electroLayout({children}:{
    children:React.ReactNode;
}){

    return(
        <>
       {children}
        </>
    )
}