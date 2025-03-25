//pedir para o usuário digitar dois numeros
let nota1 = parseFloat(prompt("Digite a nota do aluno"))
let nota2 = parseFloat(prompt("Digite a outra nota do aluno"))

// fazer a media destes numeros
let media = (nota1 + nota2) / 2;

//comparar se a media é menor ou igual a 4 e comparar se algum dos numeros é igual a 0
alert(`Está reprovado? ${(media <= 4 || nota1 == 0 || nota2 == 0)}`)


// b > a && c > b || a > b


// b > a? false
// c > b? false
// a > b? true

/*
    false && false || true
    false || true
    == true
*/


// b > a && (c > b || a > b)

/*
    false && (false || true)
    false && true
    == false
*/
