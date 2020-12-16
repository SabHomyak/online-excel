import React from "react";
import classes from './table.module.scss'


const Table = (props) => {
    return (
        <div className={classes.table}>
            <div className={classes.row}>

                <div className={classes.rowInfo}>

                </div>

                <div className={classes.rowData}>
                    <div className={classes.column}>A</div>
                    <div className={classes.column}>B</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                    <div className={classes.column}>C</div>
                </div>

            </div>
            <div className={classes.row}>

                <div className={classes.rowInfo}>
                    1
                </div>

                <div className={classes.rowData}>
                    <div className={classes.cell + ' ' + classes.selected} contentEditable={true}>A1</div>
                    <div className={classes.cell} contentEditable={true}>B1</div>
                    <div className={classes.cell} contentEditable={true}>C1</div>
                </div>

            </div>
            <div className={classes.row}>

                <div className={classes.rowInfo}>
                    2
                </div>

                <div className={classes.rowData}>
                    <div className={classes.cell} contentEditable={true}>A1</div>
                    <div className={classes.cell} contentEditable={true}>B1</div>
                    <div className={classes.cell} contentEditable={true}>C1</div>
                </div>

            </div>
        </div>
    )
}
export default Table