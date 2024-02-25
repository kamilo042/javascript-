function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
}

function mostrarNumeroAleatorio() {
    var numero = generarNumeroAleatorio();
    document.getElementById("numeroAleatorio").innerText = numero;
}

document.getElementById("generarNumeroBtn").addEventListener("click", mostrarNumeroAleatorio);
