const todosProjetos = document.querySelector('.js-grid_projetos')



function mostraProjetos() {
  if(localStorage.length == 0) {
    return
  }
  let projetos = []
  for(let i = 0; i < localStorage.length; i++){
    projetos.push(JSON.parse(localStorage.getItem(i)))
  }
  projetos.forEach(projeto => {
    todosProjetos.innerHTML += montaCartao(projeto)
    const codigoHTML = todosProjetos.querySelector(`[data-id="${projeto.id}"]`)
    codigoHTML.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    const borda = codigoHTML.querySelector('.codigo_caixa_comunidade')
    borda.style.background = projeto.detalhesDoProjeto.cor
  })
}

function montaCartao(projeto) {
  console.log(projeto)
  let cartao = `
  <li class="projeto" data-id="${projeto.id}">
    <div class="codigo_comunidade_projeto">
      <div class="codigo_caixa_comunidade">
        <div class="codigo_caixa_preta">
          <div class="codigo_caixa_pontos">
            <img src="img/Bola_Vermelha.svg" alt="Bola Vermelha" class="codigo_caixa_pontos_ponto">
            <img src="img/Bola_amarela.svg" alt="Bola Amarela" class="codigo_caixa_pontos_ponto">
            <img src="img/Bola_verde.svg" alt="Bola Verde" class="codigo_caixa_pontos_ponto">
          </div>
          <div class="areaCodigo"><pre><code id = "codigo_input" class="codigo_caixa_input hljs ${projeto.detalhesDoProjeto.linguagem}" ></code></pre>
          </div>
        </div>
      </div>
      <div class="informacoes_projeto">
        <h2 class="codigo_comunidade_titulo_projeto titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
        <p class="codigo_comunidade_projeto_descricao texto_geral">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
      </div>
      <div class="interacoes_comunidade">
        <div class="comentarios_likes">
          <div class="comentarios">
            <img src="img/vetor_comentarios.svg" alt="Ícone dos Comentários" class="icone_comentarios">
            <p class="numero_comentarios texto_geral">9</p>
          </div>
          <div class="likes">
            <img src="img/vetor_likes.svg" alt="Ícone dos Likes" class="icone_likes">
            <p class="numero_likes texto_geral">9</p>
          </div>
        </div>
        <picture class="comunidade_usuario_autor">
          <img src="img/Photo.png" alt="Foto do Usuário Autor" class="comunidade_usuario_foto">
          <figcaption class="comunidae_usuario_nome texto_geral">@${projeto.detalhesDoProjeto.usuarioProjeto}</figcaption>
        </picture>
      </div>
    </div>
  </li>
  `
  return cartao
}