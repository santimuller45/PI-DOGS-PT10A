import React from "react";
import styles from "./LandingPage.module.css"
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1 className={styles.title}>Bienvenidos al PI-Dogs</h1>
            <button className={styles.buttonHome} onClick={(() => navigate("/home"))}>Go to Home</button>
        </div>
    );
}

export default LandingPage;