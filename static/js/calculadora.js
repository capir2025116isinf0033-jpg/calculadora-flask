function pegarNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    return [numero1, numero2];
}

function somar() {
    let [numero1, numero2] = pegarNumeros();

    document.getElementById("resultado").innerHTML =
        "Resultado: " + (numero1 + numero2);
}

function subtrair() {
    let [numero1, numero2] = pegarNumeros();

    document.getElementById("resultado").innerHTML =
        "Resultado: " + (numero1 - numero2);
}

function multiplicar() {
    let [numero1, numero2] = pegarNumeros();

    document.getElementById("resultado").innerHTML =
        "Resultado: " + (numero1 * numero2);
}

function dividir() {
    let [numero1, numero2] = pegarNumeros();

    if (numero2 === 0) {
        document.getElementById("resultado").innerHTML =
            "Não é possível dividir por zero!";
    } else {
        document.getElementById("resultado").innerHTML =
            "Resultado: " + (numero1 / numero2);
    }
}
