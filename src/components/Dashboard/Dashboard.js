import React from "react";
import classes from './dashboard.module.scss'
import HeaderContainer from "./Header/HeaderContainer";

const Dashboard = (props) => {
    return (
        <div className={classes.dashboard}>
            <HeaderContainer/>
            <div className={classes.new}>
               <div className={classes.view}>
                   <a href="#" className={classes.create}>
                       Новая Таблица
                   </a>
               </div>
            </div>
            <div className={classes.table + ' ' + classes.view}>
                <div className={classes.listHeader}>
                    <span>Название</span>
                    <span>Дата открытия</span>
                </div>
                <ul className={classes.list}>
                    <li className={classes.record}>
                        <a href="#">Таблица номер 1</a>
                        <strong>12.06.2020</strong>
                    </li>
                    <li className={classes.record}>
                        <a href="#">Таблица номер 1</a>
                        <strong>12.06.2022</strong>
                    </li>
                    <li className={classes.record}>
                        <a href="#">Таблица номер 1</a>
                        <strong>12.06.2021</strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Dashboard