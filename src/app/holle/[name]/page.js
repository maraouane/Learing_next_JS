'use client'
import {use} from 'react';
export default function Holle({ params }) {
    const { name } = use(params);
    return <h1>Holle, {name} !</h1>
}