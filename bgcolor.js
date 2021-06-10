const corEscolhida = document.querySelector('#favcolor')

const borda = document.querySelector('.codigo_caixa')

const removeFundo = () => {
  borda.style.background = corEscolhida.value
}

corEscolhida.addEventListener('change' , () => {
  removeFundo()
})

