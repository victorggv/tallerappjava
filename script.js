function calcularIMC() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resultado = document.getElementById('resultado');
    var clasificacion = document.getElementById('clasificacion');

    if (altura && peso) {
        var imc = (peso / ((altura / 100) ** 2)).toFixed(2);
        resultado.value = `${imc}`;
        clasificacion.value = obtenerClasificacion(imc);
    } else {
        resultado.value = "Por favor, ingrese valores válidos.";
        clasificacion.value = "";
    }
}

function obtenerClasificacion(imc) {
    if (imc < 16) return "Infrapeso: Delgadez Severa";
    else if (imc >= 16 && imc < 17) return "Infrapeso: Delgadez moderada";
    else if (imc >= 17 && imc < 18.5) return "Infrapeso: Delgadez aceptable";
    else if (imc >= 18.5 && imc < 25) return "Peso Normal";
    else if (imc >= 25 && imc < 30) return "Sobrepeso";
    else if (imc >= 30 && imc < 35) return "Obeso: Tipo I";
    else if (imc >= 35 && imc <= 40) return "Obeso: Tipo II";
    else return "Obeso: Tipo III";
}
