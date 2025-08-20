alert ('Boas vindas ao jogo do Número Secreto!');
//variável responsável pela dificuldade do jogo
let numeroMaximo = 10;
//responsável por trazer aleatoriedade ao número secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
     // se o chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

//atenção as variáveis pois cada uma dela possui função importante no contexto do jogo 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);