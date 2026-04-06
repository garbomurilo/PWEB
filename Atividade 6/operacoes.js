let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let confirmar = confirm("Deseja realizar os cálculos?");

if (confirmar) {

    let soma = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    let resto = num1 % num2;

    alert(
        "Resultados:\n" +
        "Soma: " + soma + "\n" +
        "Subtração: " + sub + "\n" +
        "Multiplicação: " + mult + "\n" +
        "Divisão: " + div + "\n" +
        "Resto: " + resto
    );

} else {
    alert("Operação cancelada.");
}
