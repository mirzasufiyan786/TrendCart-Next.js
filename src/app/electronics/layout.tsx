import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:"Electronics"
    }
   
export default function electroLayout({children,sidenavbar,navbar2,footer2,selection}:{
    children:React.ReactNode;
    sidenavbar:React.ReactNode;
    navbar2:React.ReactNode;
    footer2:React.ReactNode;
    selection:React.ReactNode;
}){

    return(
        <>
        <div>
            {navbar2}
        </div>
        <div className="flex me-20">
          <div>  {sidenavbar}</div>
        <div> {selection}
        {children}
        </div>
        </div>
        <div>{footer2}</div>
        </>
    )
}