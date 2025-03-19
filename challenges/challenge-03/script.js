// ATENÇÃO: Você pode criar apenas uma única variável

/*
    crie uma variável com o valor 10
    
    some 5 a essa variável e reatribua o valor
    
    multiplique o valor da variável por 5 e retribua o valor
    
    some 1 a variável e retribua o novo valor

    sem alterar o valor da variável, mostre na tela o resto da divisão por 6
    a mensagem deve ser: O resto da divisão de (variável) por 6 é (resultado)

    sem alterar o valor da variável, mostre na tela o resto da divisão por 6 elevado ao quadrado
    a mensagem deve ser: O quadrado do resto da divisão de (variável) por 6 é (resultado)

    mostre na tela o valor da variável

    agora divida o valor da variável por 4 e reatribua o valor

    Qual o valor da variável?
*/

let numero = 10;

numero += 5;

numero *= 5;

numero++;

alert(`O resto da divisão de ${numero} por 6 é ${(numero % 6)}`);

alert(`O quadrado do resto da divisão de ${numero} por 6 é ${((numero % 6) ** 2)}`);

alert(numero);

numero /= 4;

alert(`O valor final da variável é ${numero}`);
