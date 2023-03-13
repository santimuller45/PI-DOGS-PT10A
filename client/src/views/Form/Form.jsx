import React from "react";
import styles from "./Form.module.css"
import { useState , useEffect } from "react";
import validate from "./validation/validation.js";
import { useDispatch , useSelector } from "react-redux";
import { addDog , getTemp } from "../../redux/actions.js";
import { useNavigate } from "react-router-dom";

function Form() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTemp());
    })

    const dogTemps = useSelector(state => state.temperamentos);
    const [form, setForm] = useState({
        nombre:"",
        alturaMin:"",
        alturaMax:"",
        pesoMin:"",
        pesoMax:"",
        añosDeVida:"",
        temperamentos:[]
    });
    const [errors, setErrors] = useState({
        nombre:"",
        altura:"",
        peso:"",
        añosDeVida:"",
    });

    const handlerInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
        setErrors(
            validate({
                ...form,
                [e.target.name]:e.target.value
            })
        );
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (form.nombre !== "" && form.alturaMin > 0 && form.alturaMax > 0 && form.pesoMin > 0 && form.pesoMax > 0){
            const newDog = {
                nombre: form.nombre,
                altura: {
                    min: form.alturaMin,
                    max: form.alturaMax
                },
                peso: {
                    min: form.pesoMin,
                    max: form.pesoMax
                },
                añosDeVida: form.añosDeVida
            };
            dispatch(addDog(newDog.nombre, newDog.altura, newDog.peso, newDog.añosDeVida));
            alert("Raza creada exitosamente")
            navigate("/home")
        }
    };
    

    return (
            <form className={styles.form} onSubmit={handlerSubmit}>
                <label>Nombre *</label>
                <input
                    name="nombre"
                    placeholder="Ingrese nombre de la raza"
                    type="text"
                    value={form.nombre}
                    onChange={handlerInputChange}
                />
                <p className={styles.errors}>{errors.nombre}</p>
                <br/>
                <label>Altura *</label>
                <div className={styles.inputs}>
                    min:
                    <input
                        name="alturaMin"
                        placeholder="Ingrese altura MIN"
                        type="number"
                        value={form.alturaMin}
                        onChange={handlerInputChange}
                    />
                    max:
                    <input
                        name="alturaMax"
                        placeholder="Ingrese altura MAX"
                        type="number"
                        value={form.alturaMax}
                        onChange={handlerInputChange} 
                    />
                </div>
                <p className={styles.errors}>{errors.altura}</p>
                <br/>
                <label>Peso *</label>
                <div className={styles.inputs}>
                    min:
                    <input
                        name="pesoMin"
                        placeholder="Ingrese peso MIN"
                        type="number"
                        value={form.pesoMin}
                        onChange={handlerInputChange}
                    />
                    max:
                    <input
                        name="pesoMax"
                        placeholder="Ingrese peso MAX"
                        type="number"
                        value={form.pesoMax}
                        onChange={handlerInputChange}
                    />
                </div>
                <p className={styles.errors}>{errors.peso}</p>
                <br/>
                <label>Años de vida</label>
                <input
                    name="añosDeVida"
                    placeholder="Ingrese años de vida de la raza"
                    type="text"
                    value={form.añosDeVida}
                    onChange={handlerInputChange}
                />
                <br/>
                <label>Temperamentos</label>
                <select>
                    {dogTemps.map(temp => (<option key={temp}>{temp}</option>))}
                </select>
                <br/>
                <button type="submit" className={styles.buttonSubmit}>Submit</button>
            </form>
    )
}

export default Form;