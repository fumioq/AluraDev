const botaoSalvar = document.querySelector("#botao_salvar")
const tituloProjeto = document.querySelector("#titulo-projeto")
const descricaoProjeto = document.querySelector("#descricao-projeto")
const corProjeto = document.querySelector("#favcolor")
const usuarioProjeto = document.querySelector(".js-usuario")

botaoSalvar.addEventListener('click' , () => {

  if (typeof(Storage) !== "undefined"){

    console.log("Suporta o localstorage")

    const projeto = montaProjeto()

    salvarLocalStorage(projeto)

    console.log(projeto)

  }else{

    console.log("Não suporta o localstorage")

  }

})

function montaProjeto() {
  let projeto = {
    'id' : atribuiId(),
    'detalhesDoProjeto':{
      'nomeDoProjeto': tituloProjeto.value,
      'descricaoDoProjeto': descricaoProjeto.value,
      'linguagem' : linguagem.value,
      'codigo' : areaDoCodigo.querySelector('code').innerText,
      'cor' : corProjeto.value,
      'usuario' : usuarioProjeto.value
    }

  }
  return projeto
}

function atribuiId() {
  return localStorage.length
}

function salvarLocalStorage(objetoJson) {
  localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}