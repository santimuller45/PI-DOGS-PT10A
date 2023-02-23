import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"


function Card({id, img , nombre, temperamento , peso}) {

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={img} alt={id}/>
            <Link to={`/detail/${id}`}>
                <h1 className={styles.cardName}>{nombre}</h1>
            </Link>
            <div className={styles.container}>
                <p>TEMP: {temperamento}</p>
                <p>PESO MIN: {peso.min}</p>
                <p>PESO MAX: {peso.max}</p>
            </div>
        </div>
    )
}

export default Card;