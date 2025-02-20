var capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo Americano",
    armaSecundaria: "",
    velocidade: 85, // Considere de 0 a 100
    forca: 75, //Considere de 0 a 100
    resistencia: 80, //Considere de 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistência: " + this.resistencia;
    }
};
var hulk = {
    nome: "Robert Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Punhos",
    armaSecundaria: "",
    velocidade: 70, // Considere de 0 a 100
    forca: 90, //Considere de 0 a 100
    resistencia: 95, //Considere de 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistência: " + this.resistencia;
    }
};
var thor = {
    nome: "Thor",
    codinome: "Deus do Trovão",
    armaPrincipal: "Martelo Mjolnir",
    armaSecundaria: "",
    velocidade: 95, // Considere de 0 a 100
    forca: 80, //Considere de 0 a 100
    resistencia: 90, //Considere de 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistência: " + this.resistencia;
    }
};
var gaviaoArqueiro = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco",
    armaSecundaria: "",
    velocidade: 65, // Considere de 0 a 100
    forca: 60, //Considere de 0 a 100
    resistencia: 60, //Considere de 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistência: " + this.resistencia;
    }
};
var viuvaNegra = {
    nome: "Natasha Romanoff",
    codinome: "Viuva Negra",
    armaPrincipal: "Pistolas",
    armaSecundaria: "",
    velocidade: 65, // Considere de 0 a 100
    forca: 55, //Considere de 0 a 100
    resistencia: 50, //Considere de 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistência: " + this.resistencia;
    }
};
var homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "",
    velocidade: 86, // Considere de 0 a 100
    forca: 75, //Considere de 0 a 100
    resistencia: 70, //Considere de 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistência: " + this.resistencia;
    }
};
var thanos = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manoplas",
    armaSecundaria: "",
    velocidade: 64, // Considere de 0 a 100
    forca: 98, //Considere de 0 a 100
    resistencia: 97, //Considere de 0 a 100
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistência: " + this.resistencia;
    }
};
var listaBatalha = [capitaoAmerica, hulk, thor, viuvaNegra, gaviaoArqueiro, homemDeFerro, thanos];
console.log(listaBatalha[0].forca);
for (var index = 0; index < listaBatalha.length; index++) {
    for (var segundoInd = 1; segundoInd < listaBatalha.length; segundoInd++) {
        var contadorVitoriaPrimeiro = 0;
        var contadorVitoriaSegundo = 0;
        //Teste de velocidade
        if (listaBatalha[index].velocidade > listaBatalha[segundoInd].velocidade) {
            contadorVitoriaPrimeiro++;
        }
        else {
            contadorVitoriaSegundo++;
        }
        //Teste de força
        if (listaBatalha[index].forca > listaBatalha[segundoInd].forca) {
            contadorVitoriaPrimeiro++;
        }
        else {
            contadorVitoriaSegundo++;
        }
        //Teste de Resistencia
        if (listaBatalha[index].resistencia > listaBatalha[segundoInd].resistencia) {
            contadorVitoriaPrimeiro++;
        }
        else {
            contadorVitoriaSegundo++;
        }
        if (contadorVitoriaPrimeiro > contadorVitoriaSegundo) {
            console.log("Quem venceu foi: " + listaBatalha[index].codinome);
        }
        else {
            console.log("Quem venceu foi: " + listaBatalha[segundoInd].codinome);
        }
    }
}
