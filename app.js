listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas  = 1;
let paragrafo = document.querySelector('p');    
paragrafo.innerHTML = 'escolha um número entre 1 e 10';

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
    function exibirMensageInicial() {
        exibirTextoNaTela('h1','jogo do número secreto!');
        exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
    }

    exibirMensageInicial()

    function verificarChute(){
        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';

            let mensagemTentativas = `Você descobriu o número secreto! com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            if(chute > numeroSecreto) {
                exibirTextoNaTela('p', 'o número é menor');
            } else{
                exibirTextoNaTela('p','o número secreto é maior');
            }
            tentativas++;
            limparcampo();
        }
    }
    function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite ){
            listaDeNumerosSorteados = [];
        }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     }  else {
        listaDeNumerosSorteados.push(numeroEscolhido); 
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;

     } 
        
    } 

    function limparcampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparcampo();
        tentativas = 1;
        exibirMensageInicial();
        document.getElementById('reiniciar').setAttribute ('disabled', true)
    }