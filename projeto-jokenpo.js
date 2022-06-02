const prompt = require("prompt-sync")();
console.clear();

let jogadas = ["PEDRA", "PAPEL", "TESOURA"];
console.log(`ESCOLHA SUA JOGADA E O COMPUTADOR IRÁ ESCOLHER ALEATORIAMENTE!
[0]- PEDRA
[1]- PAPEL
[2]- TESOURA`);

let qtdRodadas = +prompt("Digite quantas rodadas você deseja jogar: ");

let winsUser = 0;

let winsComputer = 0;

let empates = 0;

let resposta = "";
while (resposta != "N") {
  for (let i = 0; i < qtdRodadas; i++) {
    let escolhaUser = +prompt("Digite sua escolha: ");
    let escolhaComputador = Math.round(Math.random() * 2);

    if (escolhaUser == 0) {
      if (escolhaComputador == 0) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, temos empate!`
        );
        empates++;
      } else if (escolhaComputador == 1) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto,  computador venceu!`
        );
        winsComputer++;
      } else if (escolhaComputador == 2) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, você venceu!`
        );
        winsUser++;
      }
    }

    if (escolhaUser == 1) {
      if (escolhaComputador == 0) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, você venceu!`
        );
        winsUser++;
      } else if (escolhaComputador == 1) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, temos empate!`
        );
        empates++;
      } else if (escolhaComputador == 2) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, computador venceu!`
        );
        winsComputer++;
      }
    }

    if (escolhaUser == 2) {
      if (escolhaComputador == 0) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, computador venceu!`
        );
        winsComputer++;
      } else if (escolhaComputador == 1) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, você venceu!`
        );
        winsUser++;
      } else if (escolhaComputador == 2) {
        console.log(
          `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, temos empate!`
        );
        empates++;
      }
    }
  }

  if (winsComputer > winsUser) {
    console.log(
      `O computador teve ${winsComputer} vitórias e você teve ${winsUser} vitórias, portanto o computador foi campeão!`
    );
  } else if (winsComputer < winsUser) {
    console.log(
      `Você teve ${winsUser} vitórias e o computador teve ${winsComputer} vitórias, portanto você foi o campeão!`
    );
  } else if (winsComputer == winsUser) {
    console.log(
      `Você teve ${winsUser} vitórias e o computador teve ${winsComputer} vitórias, portanto, temos um empate!`
    );
  }
  resposta = prompt("Deseja jogar novamente? (S/N)").toUpperCase();
  if (resposta == "S") {
    qtdRodadas = +prompt("Digite quantas rodadas você deseja jogar: ");
  }
}
