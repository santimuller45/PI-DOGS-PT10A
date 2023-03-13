import React from "react";
import styles from "./Cards.module.css"
import Card from "../Card/Card.jsx";
// import { useEffect } from "react";
// import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux";
// import { getDogs , getTemp } from "../../redux/actions";

function Cards(props) {

    const { dogPage } = props;
    // const dogs = useSelector(state => state.allDogs);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getDogs());
    //     dispatch(getTemp());
    // },[dispatch])


    return (
        <div className={styles.container}>
            {dogPage.map(raza => (
                        <Card
                            id = {raza.id}
                            key = {raza.id}
                            img = {raza.img}
                            nombre = {raza.nombre}
                            temperamento = {raza.temperamento}
                            peso = {raza.peso}
                        />
            ))}
        </div>
    )
}

export default Cards;

