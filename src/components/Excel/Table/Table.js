import React from "react";
import classes from './table.module.scss'
import Rows from "./Rows/Rows";


const Table = (props) => {
    return (
        <div className={classes.table}>
            <Rows size={10}/>
        </div>
    )
}

export default Table