import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:"DETAILS"
    }
   

export default function aboutLayout({children,navbarA,footerA,relatedA,maylikeA,detailA}:{
    children:React.ReactNode;
    navbarA:React.ReactNode;
    relatedA:React.ReactNode;
    footerA:React.ReactNode;
    detailA:React.ReactNode;
    maylikeA:React.ReactNode;
}){

    return(
        <>
        <div>{navbarA}</div>
        <div> {children}</div>
       <div className="md:flex gap-5 mt-5 space-y-5 md:space-y-0">
        {detailA}
        {maylikeA}
       </div>
       <div className="mt-5">
        {relatedA}
       </div>
       <div className="mt-5 mb-16">{footerA}</div>
        </>
    )
}