import React from "react";
import styles from "./LandingPage.module.css"
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();

    return (
        <div className={styles.backGround}>
            <h1 className={styles.title}>Bienvenidos al PI-Dogs</h1>
            <button className={styles.buttonHome} onClick={(() => navigate("/home"))}>Ingresar a la API</button>
        </div>
    );
}


export default LandingPage;