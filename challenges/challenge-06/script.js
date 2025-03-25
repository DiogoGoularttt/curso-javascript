// pedir para o usuário digitar dois numeros de 0 a 10
let num1 = parseFloat(prompt("Digite um número de 0 a 10"));
let num2 = parseFloat(prompt("Digite um número de 0 a 10"));

//calcular a media dos numeros~
let media = (num1 + num2) / 2;

//se a media for maior que 4 mostrar o resultado na tela e se um numero for igual a 0 mostrar false
alert(`A média é maior que 4? ${media > 4 && num1 != 0 && num2 != 0} `)