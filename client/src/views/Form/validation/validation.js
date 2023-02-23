export default function validate(input) {
    const errors = {};
    if (!input.nombre) errors.nombre = "* Debe ingresar un nombre para la raza a crear";
    if (!input.altura) errors.altura = "* Debe ingresar una altura para la raza a crear";
    if (!input.peso) errors.peso = "* Debe ingresar un peso para la raza a crear";
    return errors;
}