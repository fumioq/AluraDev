const areaDoCodigo = document.querySelector('.areaCodigo')
const linguagem = document.querySelector('#linguagem')
const botao = document.querySelector('.highlight_botao')



function mudaLinguagem () {
  const codigo = areaDoCodigo.querySelector('code')
  areaDoCodigo.innerHTML = `<pre><code id="codigo_input" class= "codigo_caixa_input preview hljs ${linguagem.value}" contenteditable="true"></code></pre>`
  areaDoCodigo.querySelector('code').innerText = codigo.innerText
}

linguagem.addEventListener('change' , () => {
  mudaLinguagem()
})

botao.addEventListener('click', () => {
  const codigo = areaDoCodigo.querySelector('code')
  hljs.highlightBlock(codigo)
})