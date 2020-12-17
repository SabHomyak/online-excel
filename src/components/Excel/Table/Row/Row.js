import React from "react";
import classes from './row.module.scss'


const Row = ({index}) => {
    return (
        <div className={classes.row}>
            <div className={classes.rowInfo}>
                {index === 0 ? '' : index}
            </div>

            <div className={classes.rowData}>
                {generateCols(index)}
            </div>

        </div>
    )
}
const generateCols = (index) => {
    const positionAinChar = 'A'.charCodeAt()
    const positionZinChar = 'Z'.charCodeAt()
    const sizeAZ = positionZinChar - positionAinChar
    const cols = Array(sizeAZ + 1).fill('')
    if (index === 0) {
        return cols.map((col, i) => <div
            key={i}
            className={classes.column}>{String.fromCharCode(positionAinChar + i)}</div>
        )
    } else {
        return cols.map((col, i) => <div
                key={i}
                className={classes.cell}
                contentEditable={true}
                suppressContentEditableWarning={true}
            >Content!!!</div>
        )
    }
}
export default Row