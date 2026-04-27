function maiorDeTres(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

function ordemCrescente(n1, n2, n3) {
    let numeros = [n1, n2, n3];
    return numeros.sort((a, b) => a - b).join(', ');
}

function verificaPalindromo(texto) {
    let textoLimpo = texto.toLowerCase().replace(/\s+/g, '');
    let textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido ? "É um palíndromo" : "Não é um palíndromo";
}

function verificaSubconjunto(p1, p2) {
    if (!p1 || !p2) return "erro";
    return p1.includes(p2) ? "é um subconjunto" : "não é um subconjunto";
}

function diaDaSemana(dataString) {
    if(!dataString) return "Selecione uma data";
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const data = new Date(dataString + "T00:00:00");
    return dias[data.getDay()];
}


function executarF1() {
    const v1 = Number(document.getElementById('f1_n1').value);
    const v2 = Number(document.getElementById('f1_n2').value);
    const v3 = Number(document.getElementById('f1_n3').value);
    document.getElementById('res1').innerText = "O maior é: " + maiorDeTres(v1, v2, v3);
}

function executarF2() {
    const v1 = Number(document.getElementById('f2_n1').value);
    const v2 = Number(document.getElementById('f2_n2').value);
    const v3 = Number(document.getElementById('f2_n3').value);
    document.getElementById('res2').innerText = "Ordem: " + ordemCrescente(v1, v2, v3);
}

function executarF3() {
    const txt = document.getElementById('f3_texto').value;
    document.getElementById('res3').innerText = verificaPalindromo(txt);
}

function executarF4() {
    const p1 = document.getElementById('f4_p1').value;
    const p2 = document.getElementById('f4_p2').value;
    document.getElementById('res4').innerText = verificaSubconjunto(p1, p2);
}

function executarF5() {
    const data = document.getElementById('f5_data').value;
    document.getElementById('res5').innerText = "Cai em um(a): " + diaDaSemana(data);
}
