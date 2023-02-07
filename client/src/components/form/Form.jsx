import React from "react";
export default function Form() {
    return (
        <>
            <h1>Bienvenidos al Formulario</h1>
            <form onSubmit={() => 'handlerSubmit'}>
                <label>Nombre</label>
                <input></input>
                <br/>
                <label>Altura</label>
                <input></input>
                <br/>
                <label>Peso</label>
                <input></input>
                <br/>
                <label>Años de vida</label>
                <input></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}