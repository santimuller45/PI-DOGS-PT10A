import React from "react";
import styles from "./Ordenamiento.module.css"
import { useDispatch } from "react-redux";
import { orderCards } from "../../redux/actions";

function Ordenamiento () {

    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    return (
        <div className={styles.container}>
            ORDEN POR:
            <select onChange={handleOrder} style={{fontSize:"25px"}}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="MENOR_PESO">MENOR PESO</option>
                <option value="MAYOR_PESO">MAYOR PESO</option>
            </select>
        </div>
        
    )
}

export default Ordenamiento;