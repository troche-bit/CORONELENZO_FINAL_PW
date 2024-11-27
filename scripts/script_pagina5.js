function multiplicacion() {
    const num1 = prompt("Ingrese la cantidad:");
    const num2 = prompt("Ingrese el precio unitario:");
    if (num1 && num2) {
        const resultado = parseFloat(num1) * parseFloat(num2);

        // Formatear el resultado con separadores de miles manualmente
        const resultadoFormateado = resultado.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        alert(`Total a pagar: ${resultadoFormateado} gs.`);
    } else {
        alert("Por favor, ingresa valores válidos.");
    }
}

function porcentaje() {
    const num1 = prompt("Ingresa el precio:");
    if (num1) {
        const resultado = (parseFloat(num1) * 30) / 100;
        const resultadoFormateado = resultado.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        alert(`Total descuento es de: ${resultadoFormateado} gs.`);
    } else {
        alert("Por favor, ingresa valores válidos.");
    }
}

function descuentoCantidad() {
    const num1 = prompt("Ingresa la cantidad:");
    const num2 = prompt("Ingresa el precio:");
    if (num1 && num2) {
        const resultado = (parseFloat(num1) * parseFloat(num2)) * 25 / 100;
        const resultadoFormateado = resultado.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        alert(`Descuento del 25% es de: ${resultadoFormateado} gs.`);
    } else {
        alert("Por favor, ingresa valores válidos.");
    }
}
