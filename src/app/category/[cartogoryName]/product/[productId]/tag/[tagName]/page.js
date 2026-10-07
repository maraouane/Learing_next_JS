"use client"
import {use} from "react";
export default function Category({params}){
    const {cartogoryName} = use(params);
    const {productId} = use(params);
    const {tagName} = use(params)
    return(
        <div>
            <h1>Category Name : {cartogoryName}</h1>
            <h2>Porduct : {productId}</h2>
            <p>Tag Name: {tagName}</p>
        </div>
    )
}