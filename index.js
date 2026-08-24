const math = require("mathjs");

/*
funcion
punto a
ponto b

mostraremos: derivada, imagen de a y la imagen c
*/

let [funcion_text, punto_a, punto_b] = process.argv.slice(2);

punto_a = Number(punto_a);
punto_b = Number(punto_b);

function funcion_e(x){
    return math.evaluate(funcion_text, { x });
}

const imagen_punto_a = funcion_e(punto_a);
const imagen_punto_b = funcion_e(punto_b);

console.log("funcion: ", funcion_text);
console.log("punto a: ", punto_a, "imagen de a: ", imagen_punto_a);
console.log("punto b: ", punto_b, "imagen de b: ", imagen_punto_b);

if(imagen_punto_a == imagen_punto_b){
    console.log("La imagen de a y b son iguales, solo falta verificar que sea derivable");

    const derivada = math.derivative(funcion_text, "x");

    console.log("la derivada es: ", "f'(x) = " +derivada.toString());

    console.log("para obtener c, devemos hacer lo siguiente: ", derivada.toString().replace(/x/g, "c") +" = 0");
}else{
    console.log("No se puede complir el teorema de role :(");
}