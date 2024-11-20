const container = document.getElementById('container');
const loader = document.getElementById('loader');
let currentPage = 1;

function imagem() {
    return `https://picsum.photos/300/300?blur=2&grayscale&random=${Math.random()}`;
}

// Função para carregar conteúdo
function loadContent() {
  loader.style.display = 'block'; // Exibe o loader

  // Simula uma requisição
  setTimeout(() => {
    const newContent = `
      <p class"loader">Vinicius Garbelini - <span> 04724-084 </span> <br> Jose Horlando Rufato - <span> 04724-022 </span> <br> <br> Pagina 1 / ${currentPage}</p>
       <div class="id">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    <img src="${imagem()}" alt="">
    

        
   </div>
      `
    ;
    container.innerHTML += newContent;
    currentPage++;
    loader.style.display = 'none'; // Esconde o loader
  }, 1000); // Simula um atraso de 1 segundo
}

// Carrega o conteúdo inicial
loadContent();

// Detecta a rolagem
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadContent();
  }
});