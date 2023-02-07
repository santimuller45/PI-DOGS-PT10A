import React from "react";
import styles from "./Welcome.module.css"
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div>
            <h1 className={styles.title}>Bienvenidos al PI-Dogs</h1>
            <Link to="/home">
                <button className={styles.buttonHome}>Home</button>
            </Link>
        </div>
    );
}