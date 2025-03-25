//pedir para o user digitar dois números de 0 a 10
let nota1 = parseFloat(prompt("Digite a nota do aluno"));
let nota2 = parseFloat(prompt("Digite a outra nota do aluno"));

//calcular a media desses dois numeros
let media = (nota1 + nota2) / 2;

//mostrar na tela indicando se a media é maior que 7
alert(`A média do aluno é maior que 7? ${media > 7}`);
