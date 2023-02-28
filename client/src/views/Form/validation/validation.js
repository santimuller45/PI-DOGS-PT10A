const regexString = /^[a-zA-Z\s]+$/;

export default function validate(input) {
    const errors = {};
    if (!regexString.test(input.nombre)) errors.nombre = "* Debe ingresar un nombre para la raza a crear";
    else if (!input.alturaMin) errors.altura = "* Debe ingresar una altura minima";
    else if (!input.alturaMax) errors.altura = "* Debe ingresar una altura maxima";
    else if (input.alturaMin > input.alturaMax || input.alturaMax < input.alturaMin) errors.altura = "* La altura minima no puede ser mayor al maximo o viceversa";
    else if (!input.pesoMin) errors.peso = "* Debe ingresar un peso minimo";
    else if (!input.pesoMax) errors.peso = "* Debe ingresar un peso maximo";
    else if (input.pesoMin > input.pesoMax || input.pesoMax < input.pesoMin) errors.peso = "* El peso minimo no puede ser mayor al maximo o viceversa";
    return errors;
}