    console.log("Qual é seu nome?");
    let nome = "Deguimar";
    console.log("Prazer " + nome + ", digite a quantidade de xp para saber seu rank");
    let xp = 10000;
    
    let nivel;
    
    if (xp < 1000) {
        nivel = "FERRO";
    } else if (xp > 1000 && xp <= 2000) {
        nivel = "BRONZE";
    } else if (xp > 2000 && xp <= 5000) {
        nivel = "PRATA";
    } else if (xp > 5000 && xp <= 7000) {
        nivel = "OURO";
    } else if (xp > 7000 && xp <= 8000) {
        nivel = "PLATINA";
    } else if (xp > 8000 && xp <= 9000) {
        nivel = "ASCENDENTE";
    } else if (xp > 9000 && xp <= 10000) {
        nivel = "IMORTAL";
    } else if (xp > 10000) {
        nivel = "RADIANTE";
    }
    
    console.log("O Herói " + nome + " está no nível " + nivel);
    