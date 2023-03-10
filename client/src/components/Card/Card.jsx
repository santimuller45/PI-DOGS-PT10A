import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import defaultImg from "../../source/dog.png"


function Card({id, img , nombre, temperamento , peso}) {

    return (
        <div className={styles.card}>
            { img ? 
                <img className={styles.cardImage} src={img} alt={id}/>
                : <img className={styles.cardImageDefault} src={defaultImg} alt={defaultImg}/>
            }
            <Link to={`/detail/${id}`} className={styles.cardName}>
                <h1 >{nombre}</h1>
            </Link>
            <div className={styles.container}>
                {temperamento ? <h4>TEMP: {temperamento}</h4> : undefined}
                {peso.max ? 
                    <h2>PESO MAX: {peso.max}</h2>
                    : undefined
                }
                {peso.min ? 
                    <h2>PESO MIN: {peso.min}</h2>
                    : undefined
                }
            </div>
        </div>
    )
}

export default Card;