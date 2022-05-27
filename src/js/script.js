import Filtro from "./filtros.js";
import { Produtos, Vitrine } from "./vitrine.js";

const filtro = new Filtro(Vitrine.fazerVitrine, Produtos.pegarProdutos);
const filtroSecao = document.getElementsByClassName('estiloGeralBotoes');

const filtrar=(event)=>{
    const target= event.target.tagName==='IMG'? event.target.parentNode: event.target; //aqui ele pega o anterior a IMG, para não bugar quando clica na imagem
    for(let element of filtroSecao){
        element.classList.remove('select');
    }
    target.classList.add('select');
    filtro.filtrarCategoria(target.dataset.secao);
}

for(let element of filtroSecao){
    element.addEventListener('click',filtrar);
}

document.getElementById('botaoPaginaAnterior').addEventListener('click', ()=>filtro.mudarPagina('anterior'));
document.getElementById('botaoPaginaPosterior').addEventListener('click', ()=>filtro.mudarPagina('proxima'));


document.querySelector(".login").addEventListener("click", () => {

    window.location = "./src/pages/login.html"
})

document.querySelector(".cadastro").addEventListener("click", () => {

    window.location = "./src/pages/cadastro.html"
})