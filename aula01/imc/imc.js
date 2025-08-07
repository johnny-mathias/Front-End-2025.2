function calcularIMC(peso, altura) {
    const imc = peso/(altura**2)
    return imc.toFixed(2);
}

console.log(calcularIMC(85, 1.82))