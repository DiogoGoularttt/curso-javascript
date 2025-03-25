// pedir para o usuário digitar dois números entre 0 e 10
let num1 = parseFloat(prompt("Digite um número de 0 a 10"));
let num2 = parseFloat(prompt("Digite outro número de 0 a 10"));

// comparar se o segundo numero é maior ou igual ao primeiro numero
// mostrar na tela o valor boolean
alert(`O segundo número é maior ou igual ao primeiro? ${(num2 >= num1)}`);
