var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}
var jogadores = [rafa, paulo];

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

exibirJogadorNaTela(jogadores);

//Funções

function exibirJogadorNaTela(jogadores) {
    var html = "";
    for (var i = 0; i < jogadores.length; i++) {

        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button class='botaoVitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        html += "<td><button class='botaoEmpate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        html += "<td><button class='botaoDerrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";

    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;

}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadorNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadorNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos--;
    exibirJogadorNaTela(jogadores);
}

function adicionarJogador() {
    var input = document.querySelector("#novoJogador")
    var inputJogador = input.value;
    if(inputJogador != ""){
        var novoJogador = {
            nome: inputJogador,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        }
    
        jogadores.push(novoJogador);
        exibirJogadorNaTela(jogadores);
        
    }
    input.value = "";
    
}


