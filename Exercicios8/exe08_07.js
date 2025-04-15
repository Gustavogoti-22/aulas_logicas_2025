let carrosStr = "Gol;Corsa;Palio;Monza;Fusca;";
let carros = carrosStr.split(";");

for (let i = 0; i < carros.length; i++) {
    if (carros[i] !== "") {
        console.log("Posição " + i + ": " + carros[i]);
    }
}
