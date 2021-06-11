const overlay = document.querySelector('.menu_overlay')
const menuToggle = document.querySelector('#abreFecha_menu_botao')
const desativarFundo = document.querySelector('.corpo')

menuToggle.addEventListener('change', () => {

  if(menuToggle.checked) {
    desativarFundo.inert = true;
  }
  
  if(menuToggle.checked == false) {
    desativarFundo.inert = false;
  }

})

overlay.addEventListener('click', () => {
  menuToggle.checked = false
  desativarFundo.inert = false;
})



// function abrindoMenu() {
//   desativarFundo.inert = true;

// }

// function fechandoMenu() {
//   desativarFundo.inert = false;
// }

// // overlay.addEventListener('click', () = > {


// })