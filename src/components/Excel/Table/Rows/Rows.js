import React from "react";
import classes from './rows.module.scss'
import Row from "../Row/Row";


const Rows = ({size = 2}) => {
    const rows = Array(size).fill('').map((_,index) => {
        return <Row
            key={index}
            index={index}/>
    })
    return (
        <>
            {rows}
        </>
    )
}
export default Rows