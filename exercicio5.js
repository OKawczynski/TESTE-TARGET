let str = "Exemplo de string para inverter";
let inversao = "";

for (let i = str.length - 1; i >= 0; i--) {
  inversao += str[i];
  console.log(inversao)
}

console.log(inversao);