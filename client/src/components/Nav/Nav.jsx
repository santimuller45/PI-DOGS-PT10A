import React from "react";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


function Nav() {

    return (
        <div className={styles.nav}>
            <div>
                <SearchBar></SearchBar> 
            </div>
            <div>
                <Link to="/home" className={styles.text}>HOME</Link>
            </div>
            <div >
                <Link to="/form" className={styles.text}>CREAR RAZA</Link>
            </div>
        </div>
    )
}

export default Nav;