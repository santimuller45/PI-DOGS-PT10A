import React, { useState } from "react";
import styles from "./Filters.module.css"
import { useDispatch } from "react-redux";
// import { filtered } from "../../redux/actions";



function Filters() {

    const [filter , setFilter] = useState("");
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setFilter(event.target.value)
    }
    // useEffect(() => {
    //     dispatch(filtered(filter))
    // })

    return(
        <div className={styles.container}>
            FILTRAR POR:
            <select style={{fontSize:"25px"}}>
                <option>TODOS</option>
                <option value="RAZAS_EXISTENTES" onChange={() =>{}}> RAZAS EXISTENTES </option>
                <option value="RAZAS_NUEVAS" onChange={() =>{}}>RAZAS NUEVAS</option>
                <option value="TEMPERAMENTOS" onChange={() =>{}}> TEMPERAMENTOS </option>
            </select>
        </div>
    )
}

export default Filters;