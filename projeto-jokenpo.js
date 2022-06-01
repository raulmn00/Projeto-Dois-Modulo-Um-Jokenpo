const prompt = require("prompt-sync")();
console.clear();

let jogadas = ["PEDRA", "PAPEL", "TESOURA"];
console.log(`ESCOLHA SUA JOGADA E O COMPUTADOR IRÁ ESCOLHER ALEATORIAMENTE!
[0]- PEDRA
[1]- PAPEL
[2]- TESOURA`);

let escolhaUser = +prompt("Digite sua escolha: ");

let escolhaComputador = Math.round(Math.random() * 2);

if (escolhaUser == 0) {
  if (escolhaComputador == 0) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, temos empate!`
    );
  } else if (escolhaComputador == 1) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto,  computador venceu!`
    );
  } else if (escolhaComputador == 2) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, você venceu!`
    );
  }
}

if (escolhaUser == 1) {
  if (escolhaComputador == 0) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, você venceu!`
    );
  } else if (escolhaComputador == 1) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, temos empate!`
    );
  } else if (escolhaComputador == 2) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, computador venceu!`
    );
  }
}

if (escolhaUser == 2) {
  if (escolhaComputador == 0) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, computador venceu!`
    );
  } else if (escolhaComputador == 1) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, você venceu!`
    );
  } else if (escolhaComputador == 2) {
    console.log(
      `Você escolheu ${jogadas[escolhaUser]} e o computador escolheu ${jogadas[escolhaComputador]}, portanto, temos empate!`
    );
  }
}
