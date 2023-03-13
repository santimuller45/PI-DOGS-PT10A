import React, { useState , useEffect} from "react";
import styles from "./Home.module.css"
import Cards from "../../components/Cards/Cards";
import { useSelector , useDispatch } from "react-redux";
import { getDogs , getTemp } from "../../redux/actions";
// import Pagination from "../../components/Pagination/Pagination.jsx";


function Home () {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.allDogs);
    const itemsPage = 8;
    const [dogPage , setDogPage] = useState([...dogs].splice(0, itemsPage));
    const [currentPage , setCurrentPage] = useState(0);

    const nextHandler = () => {
        const total = dogs.length;
        const nextPage = currentPage + 1 ;
        const firstIndex = nextPage * itemsPage;
        console.log(total)

        if (firstIndex === total) return;

        setDogPage([...dogs].splice(firstIndex, itemsPage));
        setCurrentPage(nextPage);
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPage;

        setDogPage([...dogs].splice(firstIndex, itemsPage));
        setCurrentPage(prevPage);
    }

    useEffect(() => {
        dispatch(getDogs());
        dispatch(getTemp());
    },[dispatch])


    return (
        <div className={styles.container}>
            <Cards dogPage={dogPage}/>
            <div className={styles.pag}>
                <button onClick={prevHandler}>prev</button>
                <label>{currentPage+1}</label>
                <button onClick={nextHandler}>next</button>
            </div>
        </div>
    )
}

export default Home;