import React from "react";
import styles from "./Home.module.css"


export default function Home() {
    return (
        <div>
            <div className={styles.navBar}>
                <div>
                    <input
                        placeholder="Buscar raza..."
                    ></input>
                </div>
                <div>
                    <button>Filtrar por temperamento</button>
                </div>
                <div>
                    <label>Ordenar por:</label>
                    <button>Orden alfabético</button>
                    <button>Peso</button>
                </div>
            </div>
            <h1>Bienvenidos al Home</h1>
        </div>
    )
}