import React from "react";
import classes from './formula.module.scss'


const Formula = (props) =>{
    return (
        <div className={classes.formula}>
            <div className={classes.info}>fx</div>
            <div
                className={classes.input}
                contentEditable={true}
                spellCheck={false}
                suppressContentEditableWarning={true}
            >{props.formula}</div>
        </div>
    )
}
export default Formula