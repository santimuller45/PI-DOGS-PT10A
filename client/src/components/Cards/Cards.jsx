import React from "react";
import styles from "./Cards.module.css"
import Card from "../Card/Card.jsx";
import { useSelector } from "react-redux"


function Cards() {

    const dogs = useSelector(state => state.allDogs);

    return (
        <div className={styles.container}>
            {dogs.map((dog) => (
                        <Card
                            id = {dog.id}
                            key = {dog.id}
                            img = {dog.img}
                            nombre = {dog.nombre}
                            temperamento = {dog.temperamento}
                            peso = {dog.peso}
                        />
            ))}
        </div>
    )
}

export default Cards;

