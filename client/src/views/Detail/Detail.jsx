import React from "react";
import styles from "./Detail.module.css"
import { useParams , useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getById } from "../../redux/actions.js";
import defaultImg from "../../source/dog.png"


function Detail() {

    const { detailId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dog = useSelector(state => state.detailDog[0]);

    useEffect(() => {
        dispatch(getById(detailId));
    }, [dispatch,detailId]);

    return (
        <div className={styles.container}>
            <button className={styles.buttonHome} onClick={() => navigate('/home')} >Back to Home</button>
            <div>
                {dog ?
                <>
                    { dog.img ? 
                        <img src={dog.img} alt={dog.id} className={styles.image}></img>
                        : <img src={defaultImg} alt={defaultImg}></img>
                    }
                    <h1 className={styles.title}>{dog.nombre}</h1>
                    <div className={styles.description}>
                        <h4>TEMPERAMENTOS: {dog.temperamento}</h4>
                        <h4>PESO MIN: {dog.peso.min}</h4>
                        <h4>PESO MAX: {dog.peso.max}</h4>
                        <h4>ALTURA MIN: {dog.altura.min}</h4>
                        <h4>ALTURA MAX: {dog.altura.max}</h4>
                        <h4>AÑOS DE VIDA: {dog.añosDeVida}</h4>
                    </div>     
                </>
                : undefined}
            </div>      
        </div>
    )
}

export default Detail;