let personagensENivel = [
    ["Link", 7400],
    ["Pikachu", 9100],
    ["Mario", 4300],
    ["Sukuna", 12000]
];

for (let i = 0; i < personagensENivel.length; i++) {
    let nivel = personagensENivel[i][1];
    let nome = personagensENivel[i][0];

    if (nivel < 1000) {
        nivel = "Ferro"
    } else if (nivel >= 1001 && nivel <= 2000) {
        nivel = "Bronze"
    } else if (nivel >= 2001 && nivel <= 5000) {
        nivel = "Prata"
    } else if (nivel >= 5001 && nivel <= 7000) {
        nivel = "Ouro"
    } else if (nivel >= 7001 && nivel <= 8000) {
        nivel = "Platina"
    } else if (nivel >= 8001 && nivel <= 9000) {
        nivel = "Ascendente"
    } else if (nivel >= 9001 && nivel <= 10000) {
        nivel = "Imortal"
    } else if (nivel >= 10001) {
        nivel = "Radiante"
    }
    console.log(`O personagem ${nome} está no elo ${nivel}.`)
}
