import React from "react";
import styles from "./SearchBar.module.css"
import { useState , useEffect} from "react";
import { searchDog } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";

function SearchBar() {

    const [raza, setRaza] = useState("");
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        setRaza(event.target.value)
    }

    useEffect(() => {
        dispatch(searchDog(raza));
    })

    return(
        <>
            <input
                className={styles.input} 
                placeholder="Buscar raza..."
                name="nombre"
                type="text"
                value={raza}
                onChange={handleInputChange}
            />
        </>

    )
}

export default SearchBar;