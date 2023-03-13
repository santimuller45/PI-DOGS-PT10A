import React from "react";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Ordenamiento from "../Ordenamiento/Ordenamiento";
import Filters from "../Filters/Filters";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";


function Nav() {

    const dispatch = useDispatch();
    const resetHome = () => {
        dispatch(getDogs())
    }

    return (
        <div className={styles.nav}>
            <Filters></Filters>
            <Ordenamiento/>
            <SearchBar></SearchBar>
            <div>
                <Link to="/home" className={styles.text} onChange={resetHome}>HOME</Link>
            </div>
            <div >
                <Link to="/form" className={styles.text}>CREAR RAZA</Link>
            </div>
        </div>
    )
}

export default Nav;