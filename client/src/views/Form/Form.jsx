import React from "react";
import styles from "./Form.module.css"
import { useState } from "react";
import validate from "./validation/validation.js";

function Form() {

    const [form, setForm] = useState({
        nombre:"",
        altura:"",
        peso:"",
        añosDeVida:"",
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
    };


    return (
        <>
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
                <input
                    name="altura"
                    placeholder="Ingrese altura de la raza"
                    type="text"
                    value={form.altura}
                    onChange={handlerInputChange}
                />
                <p className={styles.errors}>{errors.altura}</p>
                <br/>
                <label>Peso *</label>
                <input
                    name="peso"
                    placeholder="Ingrese peso de la raza"
                    type="text"
                    value={form.peso}
                    onChange={handlerInputChange}
                />
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
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;