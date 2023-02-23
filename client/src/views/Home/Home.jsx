import React from "react";
import styles from "./Home.module.css"
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";


function Home () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs());
    },[dispatch])

    return (
        <div className={styles.container}>
            <div>
                <Cards/>
            </div>
        </div>
    )
}

export default Home;