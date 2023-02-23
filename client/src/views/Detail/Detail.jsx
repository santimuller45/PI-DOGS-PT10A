import React from "react";
import { useParams , useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getById } from "../../redux/actions.js";
import Card from "../../components/Card/Card.jsx";
import styles from "./Detail.module.css"


function Detail() {

    const { detailId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dog = useSelector(state => state.detailDog);

    useEffect(() => {
        dispatch(getById(detailId));
    }, [dispatch,detailId]);

    return (
        <div className={styles.container}>
            <div>
                {dog.length ? 
                    <Card
                        id = {dog[0].id}
                        img = {dog[0].img}
                        nombre = {dog[0].nombre}
                        temperamento = {dog[0].temperamento}
                        peso = {dog[0].peso}
                    /> 
                : undefined}
            </div>
            <button className={styles.buttonHome} onClick={() => navigate('/home')}>Go back to Home</button>
        </div>
    )
}

export default Detail;