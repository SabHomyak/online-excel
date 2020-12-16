import React from "react";
import classes from './excel.module.scss'
import HeaderContainer from "./Header/HeaderContainer";
import ToolbarContainer from "./Toolbar/ToolbarContainer";
import FormulaContainer from "./Formula/FormulaContainer";
import TableContainer from "./Table/TableContainer";

const Excel = (props) => {
    return (
        <div className={classes.excel}>
            <HeaderContainer/>
            <ToolbarContainer/>
            <FormulaContainer/>
            <TableContainer/>
        </div>)
}
export default Excel