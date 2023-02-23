import React from "react";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className={styles.nav}>
            <div>
                <Link to="/home">HOME</Link>
            </div>
            <div>
                <Link to="/form">FORM</Link>
            </div>
            <div>
                <input 
                    placeholder="Buscar raza..."
                />
            </div>
            <div>
                    <button>Filtrar por temperamento</button>
            </div>
            <div>
                    <label>Ordenar por: </label>
                    <button>Orden alfabético</button>
                    <button>Peso</button>
            </div>
        </div>
    )
}

export default Nav;