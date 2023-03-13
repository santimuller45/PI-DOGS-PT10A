import React, { useState } from "react";
import styles from "./Detail.module.css"
import { useParams , useNavigate } from "react-router-dom";
import { useEffect } from "react";
import defaultImg from "../../source/dog.png"


function Detail() {

    const navigate = useNavigate();
    const { detailId } = useParams();
    const [dog, setDog] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3001/dogs/${detailId}`)
            .then((response) => response.json())
            .then((data) => setDog(data))
        return setDog([]);
    }, [detailId]);

    return (
        <div className={styles.back}>
            <button className={styles.buttonHome} onClick={() => navigate('/home')} >Back to Home</button>
            <div>
                {dog.map(detail => (
                    <div className={styles.contain} key={detail.id}>
                        {detail.img ? <img src={detail.img} alt={detail.id} className={styles.image}></img>
                                    : <img src={defaultImg} alt={defaultImg}></img>
                        }
                        <h1 className={styles.title}>{detail.nombre}</h1>
                        <div className={styles.description}>
                            <h4>TEMPERAMENTOS: {detail.temperamento}</h4>
                            <h4>PESO MAX: {detail.peso.max}</h4>
                            <h4>PESO MIN: {detail.peso.min}</h4>
                            <h4>ALTURA MAX: {detail.altura.max}</h4>
                            <h4>ALTURA MIN: {detail.altura.min}</h4>
                            <h4>AÑOS DE VIDA: {detail.añosDeVida}</h4>
                        </div>
                        
                    </div>
                ))}
            </div>      
        </div>
    )
}

export default Detail;