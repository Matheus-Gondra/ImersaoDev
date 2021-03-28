function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector("#filme");
    var filmeFavorito = campoFilmeFavorito.value;
    validaFilme(filmeFavorito);
    campoFilmeFavorito.value = "";
  }
  
  function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector("#listaFilmes");
    var elementoFilme = "<img src=" + filme + ">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  }
  
  function validaFilme(filme){
    if(filme.endsWith(".jpg") || filme.endsWith(".png")){
      listarFilmesNaTela(filme);
    }else{
      alert("Imagem inválida. Adicione uma imegem .png ou .jpg");
    }
  }
  
  