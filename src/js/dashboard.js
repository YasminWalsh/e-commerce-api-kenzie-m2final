import { Api } from "../js/api.js";
import Filtro from "./filtros.js";


const produtos = await Api.produtosDoUsuarioLogado();
console.log(produtos);
const secaoProdutos = document.createElement("section");

secaoProdutos.classList.add("secaoProdutos")



const modalProdutoAdicionado = () => {

    const divProdutoAdicionado = document.createElement("div")

    const headerDivProdutoAdicionado = document.createElement("header")
    const tituloDivProdutoAdicionado = document.createElement("h5")
    const botaoSairDivProdutoAdicionado = document.createElement("button")

    const textoDivProdutoAdicionado = document.createElement("p")

    const corDivProdutoAdicionado = document.createElement("hr")


    divProdutoAdicionado.classList.add("divProdutoAdicionado")

    headerDivProdutoAdicionado.classList.add("headerDivProdutoAdicionado")
    tituloDivProdutoAdicionado.classList.add("tituloDivProdutoAdicionado")
    botaoSairDivProdutoAdicionado.classList.add("botaoSairDivProdutoAdicionado")

    textoDivProdutoAdicionado.classList.add("textoDivProdutoAdicionado")

    corDivProdutoAdicionado.classList.add("corDivProdutoAdicionado")


    tituloDivProdutoAdicionado.innerText = "Status"

    botaoSairDivProdutoAdicionado.innerText = "X"

    textoDivProdutoAdicionado.innerText = "Produto adicionado com sucesso"


    headerDivProdutoAdicionado.append(tituloDivProdutoAdicionado, botaoSairDivProdutoAdicionado)

    divProdutoAdicionado.append(headerDivProdutoAdicionado, textoDivProdutoAdicionado, corDivProdutoAdicionado)

    document.body.appendChild(divProdutoAdicionado)
}

modalProdutoAdicionado()


const modal = () => {

    const divModalSair = document.createElement("div")

    const nomeDoUsuario = document.createElement("h4")
    const hr = document.createElement("hr")
    const botaoSair = document.createElement("button")


    divModalSair.classList.add("divModalSair")

    nomeDoUsuario.classList.add("nomeDoUsuario")
    botaoSair.classList.add("botaoSair")


    nomeDoUsuario.innerText = "Time 1"

    botaoSair.innerText = "Sair"

    botaoSair.addEventListener("click", () => {

        localStorage.clear()

        window.location = "../pages/login.html"
    })

    divModalSair.append(nomeDoUsuario, hr, botaoSair)

    return divModalSair
};


const Estrutura = class Estrutura {

    static criandoCabecalho() {

        const header = document.createElement("header")

        const secaoTitulos = document.createElement("section")
        const tituloPrincipal = document.createElement("h1")
        const subTitulo = document.createElement("h2")

        const secaoBotoes = document.createElement("section")
        const botaoDePesquisa = document.createElement("input")
        const divIconeUsuario = document.createElement("section")
        const iconeUsuario = document.createElement("img")


        secaoTitulos.classList.add("secaoTitulos")
        tituloPrincipal.classList.add("tituloPrincipal")
        subTitulo.classList.add("subTitulo")

        secaoBotoes.classList.add("secaoBotoes")
        botaoDePesquisa.classList.add("botaoDePesquisa")
        botaoDePesquisa.setAttribute('id','procurar')

        divIconeUsuario.classList.add("divIconeUsuario")
        iconeUsuario.classList.add("iconeUsuario")


        tituloPrincipal.innerText = "Kenzie"
        subTitulo.innerText = "Food"

        botaoDePesquisa.type = "text"
        botaoDePesquisa.placeholder = "Pesquisar por produto"

        iconeUsuario.src = "../styles/assets/anonimo.png"


        divIconeUsuario.append(iconeUsuario, modal())

        secaoTitulos.append(tituloPrincipal, subTitulo)

        secaoBotoes.append(botaoDePesquisa, divIconeUsuario)

        header.append(secaoTitulos, secaoBotoes)

        document.body.appendChild(header)
    };

    static criandoCategorias() {

        const secaoAdicionarProduto = document.createElement("section")

        const secaoCategorias = document.createElement("section")
        const categoriaTodos = document.createElement("button")
        const categoriaPanificadora = document.createElement("button")
        const categoriaFrutas = document.createElement("button")
        const categoriaBebidas = document.createElement("button")

        const botaoAdicionarProduto = document.createElement('button')


        secaoAdicionarProduto.classList.add("secaoAdicionarProduto")

        secaoCategorias.classList.add("secaoCategorias")
        categoriaTodos.classList.add("estiloGeralBotoes")
        categoriaTodos.classList.add('select')
        categoriaTodos.dataset.secao ='Todos'
        categoriaPanificadora.classList.add("estiloGeralBotoes")
        categoriaPanificadora.dataset.secao ='Panificadora'
        categoriaFrutas.classList.add("estiloGeralBotoes")
        categoriaFrutas.dataset.secao ='Frutas'
        categoriaBebidas.classList.add("estiloGeralBotoes")
        categoriaBebidas.dataset.secao='Bebidas'
        botaoAdicionarProduto.classList.add("botaoAdicionarProduto")


        categoriaTodos.innerText = "Todos"
        categoriaPanificadora.innerText = "Panificadora"
        categoriaFrutas.innerText = "Frutas"
        categoriaBebidas.innerText = "Bebidas"

        botaoAdicionarProduto.innerText = "Adicionar novo produto"

        botaoAdicionarProduto.addEventListener("click", () => {

            const telaPreta = document.querySelector(".telaPreta")

            telaPreta.classList.add("mostrar")
            
            const botaoSairModal = document.querySelector(".botaoSairModal")

            botaoSairModal.addEventListener("click", () => telaPreta.classList.remove("mostrar"))


            const botaoPanificadora = document.querySelector(".botaoPanificadora")
            const botaoFrutas = document.querySelector(".botaoFrutas")
            const botaoBebidas = document.querySelector(".botaoBebidas")


            botaoPanificadora.addEventListener("click", () => {

                botaoFrutas.style.background = "#F8F9FA"
                botaoBebidas.style.background = "#F8F9FA"

                botaoFrutas.style.color = "black"
                botaoBebidas.style.color = "black"

                botaoPanificadora.style.background = "#FF2253"
                botaoPanificadora.style.color = "white"

            })

            botaoFrutas.addEventListener("click", () => {

                botaoBebidas.style.background = "#F8F9FA"
                botaoPanificadora.style.background = "#F8F9FA"

                botaoBebidas.style.color = "black"
                botaoPanificadora.style.color = "black"

                botaoFrutas.style.background = "#FF2253"
                botaoFrutas.style.color = "white"

            })

            botaoBebidas.addEventListener("click", () => {

                botaoFrutas.style.background = "#F8F9FA"
                botaoPanificadora.style.background = "#F8F9FA"   
                
                botaoFrutas.style.color = "black"
                botaoPanificadora.style.color = "black"   

                botaoBebidas.style.background = "#FF2253"
                botaoBebidas.style.color = "white"

            })

            const form = document.querySelector("form")

            form.addEventListener("submit", (e) => {

                e.preventDefault()

                const botoes = [...e.currentTarget]


                const pegandoDados = () => {
                    
                    for(let i = 0; i < botoes.length; i++) {

                        let element = botoes[i]

                        if(element.value != "") {

                            let dados = {
                                nome: botoes[0].value,
                                descricao: botoes[1].value,
                                imagem: botoes[6].value,
                                preco: botoes[5].value
                            }

                            if(element.style.background === "rgb(255, 34, 83)") {

                                dados.categoria = element.value
                                
                                return dados
                            }
                        }
                    }
                }

                Api.criarProduto(pegandoDados())

            })
        });


        secaoCategorias.append(categoriaTodos, categoriaPanificadora, categoriaFrutas, categoriaBebidas)

        secaoAdicionarProduto.append(secaoCategorias, botaoAdicionarProduto)

        document.body.append(secaoAdicionarProduto)
    };

    static criandoCategoriaDosProdutos() {

        const secaoCategoriasDosProdutos = document.createElement("section")

        const produto = document.createElement("p")
        const categorias = document.createElement("p")
        const descricao = document.createElement("p")
        const acoes = document.createElement("p")


        secaoCategoriasDosProdutos.classList.add("secaoCategoriasDosProdutos")

        produto.classList.add("produto")
        categorias.classList.add("categorias")
        descricao.classList.add("descricao")
        acoes.classList.add("acoes")


        produto.innerText = "Produto"
        categorias.innerText = "Categorias"
        descricao.innerText = "Descrição"
        acoes.innerText = "Ações"


        secaoCategoriasDosProdutos.append(produto, categorias, descricao, acoes)

        document.body.appendChild(secaoCategoriasDosProdutos)
    };

    static criandoProduto(produtos) {
        console.log('rend', produtos)
        secaoProdutos.innerHTML = ''
        for(let i = 0; i < produtos.length; i++) {

            localStorage.setItem(`Produto ${i} Id`, produtos[i].id)
        }

        produtos.forEach((element, i, array) => {

            const divProduto = document.createElement("div")
            const imgProduto = document.createElement("img")
            const tituloProduto = document.createElement("h3")
            const descricaoProduto = document.createElement("p")
            const categoriaProduto = document.createElement("p")

            const divBotoes = document.createElement("div")
            const editarProduto = document.createElement("img")
            const removerProduto = document.createElement("img")


            

            divProduto.classList.add("divProdutoLogado")
            imgProduto.classList.add("imgProduto")
            tituloProduto.classList.add("tituloProduto")
            descricaoProduto.classList.add("descricaoProduto")
            categoriaProduto.classList.add("categoriaProduto")

            divBotoes.classList.add("divBotoes")
            editarProduto.classList.add("editarProduto")
            removerProduto.classList.add("removerProduto")
            
            editarProduto.id = localStorage.getItem(`Produto ${i} Id`)
            removerProduto.id = localStorage.getItem(`Produto ${i} Id`)


            imgProduto.src = element.imagem

            tituloProduto.innerText = element.nome

            descricaoProduto.innerText = element.descricao

            categoriaProduto.innerText = element.categoria

            editarProduto.src = "../styles/assets/editar.png"
            removerProduto.src = "../styles/assets/remover.png"


            editarProduto.addEventListener("click", (e) => {

                const click = e.target

                const telaPretaModalEditar = document.querySelector(".telaPretaModalEditar")

                telaPretaModalEditar.classList.add("mostrar")
                
                const botaoSairModalEditar = document.querySelector(".botaoSairModalEditar")

                botaoSairModalEditar.addEventListener("click", () => telaPretaModalEditar.classList.remove("mostrar"))

                
                const botaoPanificadora = document.querySelector(".categoriasCriandoProdutoEditar > .botaoPanificadora")
                const botaoFrutas = document.querySelector(".categoriasCriandoProdutoEditar > .botaoFrutas")
                const botaoBebidas = document.querySelector(".categoriasCriandoProdutoEditar > .botaoBebidas")
                
                botaoPanificadora.addEventListener("click", () => {

                    botaoFrutas.style.background = "#F8F9FA"
                    botaoBebidas.style.background = "#F8F9FA"

                    botaoFrutas.style.color = "black"
                    botaoBebidas.style.color = "black"

                    botaoPanificadora.style.background = "#FF2253"
                    botaoPanificadora.style.color = "white"

                })

                botaoFrutas.addEventListener("click", () => {

                    botaoBebidas.style.background = "#F8F9FA"
                    botaoPanificadora.style.background = "#F8F9FA"

                    botaoBebidas.style.color = "black"
                    botaoPanificadora.style.color = "black"

                    botaoFrutas.style.background = "#FF2253"
                    botaoFrutas.style.color = "white"

                })

                botaoBebidas.addEventListener("click", () => {

                    botaoFrutas.style.background = "#F8F9FA"
                    botaoPanificadora.style.background = "#F8F9FA"   
                    
                    botaoFrutas.style.color = "black"
                    botaoPanificadora.style.color = "black"   

                    botaoBebidas.style.background = "#FF2253"
                    botaoBebidas.style.color = "white"
                })
                

                const form = document.querySelector(".CorpoModalEditar")

                form.addEventListener("submit", (e) => {

                    e.preventDefault()

                    const botoes = [...e.currentTarget]


                    const pegandoDados = () => {
                        
                        for(let i = 0; i < botoes.length; i++) {

                            let element = botoes[i]

                            if(element.value != "") {

                                let dados = {
                                    nome: botoes[0].value,
                                    descricao: botoes[1].value,
                                    imagem: botoes[6].value,
                                    preco: botoes[5].value
                                }

                                if(element.style.background === "rgb(255, 34, 83)") {

                                    dados.categoria = element.value
                                    
                                    return dados
                                }
                            }
                        }
                    }         

                    Api.editarProduto(click.id, pegandoDados())

                })

            })

            removerProduto.addEventListener("click", (e) => {

                const click = e.target

                const telaPretaModalExcluir = document.querySelector(".telaPretaModalExcluir")

                telaPretaModalExcluir.classList.add("mostrar")


                const botaoSairModalDelete = document.querySelector(".botaoSairModalDelete")

                botaoSairModalDelete.addEventListener("click", () => telaPretaModalExcluir.classList.remove("mostrar"))


                const botaoSim = document.querySelector(".botaoSim")
                const botaoNao = document.querySelector(".botaoNao")

                botaoSim.addEventListener("click", () => {

                    for(let i = 0; i < produtos.length; i++) {

                        if(localStorage.getItem(`Produto ${i} Id`) === click.id) {

                            Api.deletarProduto(localStorage.getItem(`Produto ${i} Id`))
                            
                            localStorage.removeItem(`Produto ${i} Id`)
                            
                            telaPretaModalExcluir.classList.remove("mostrar")

                            break
                        }
                    }
                })

                botaoNao.addEventListener("click", () => telaPretaModalExcluir.classList.remove("mostrar"))
            })
            

            divBotoes.append(editarProduto, removerProduto)

            divProduto.append(imgProduto, tituloProduto, categoriaProduto, descricaoProduto, divBotoes)

            secaoProdutos.appendChild(divProduto)
        });

        document.body.appendChild(secaoProdutos)
    };
};

/* class filtroDash extends(Filtro){
    constructor(){

    }
}
 */

Estrutura.criandoCabecalho();

Estrutura.criandoCategorias();

Estrutura.criandoCategoriaDosProdutos();

Estrutura.criandoProduto(produtos);

const filtroDashboard= new Filtro(Estrutura.criandoProduto,Api.produtosDoUsuarioLogado);
const filtroSecaoDashboard = document.getElementsByClassName('estiloGeralBotoes');

const filtrar=({target})=>{
/*     const target= event.target.tagName==='IMG'? event.target.parentNode: event.target; //aqui ele pega o anterior a IMG, para não bugar quando clica na imagem
 */    for(let element of filtroSecaoDashboard){
        element.classList.remove('select');
    }
    target.classList.add('select');
    filtroDashboard.filtrarCategoria(target.dataset.secao);
}

for(let element of filtroSecaoDashboard){
    element.addEventListener('click',filtrar);
};

document.getElementById('botaoPaginaAnterior').addEventListener('click', ()=>filtroDashboard.mudarPagina('anterior'));
document.getElementById('botaoPaginaPosterior').addEventListener('click', ()=>filtroDashboard.mudarPagina('proxima'));
 

/* produtos.forEach(element => {

    const categoriaTodos = document.querySelector(".categoriaTodos")
    const secaoPanificadora = document.querySelector(".categoriaPanificadora")
    const categoriaFrutas = document.querySelector(".categoriaFrutas")
    const categoriaBebidas = document.querySelector(".categoriaBebidas")


    categoriaTodos.addEventListener("click", () => {

        secaoProdutos.innerHTML = ""

        Estrutura.criandoProduto()

        categoriaTodos.style.backgroundColor = "#FF2253"
        categoriaTodos.style.color = "white"

        secaoPanificadora.style.backgroundColor = "#FFF7F4"
        secaoPanificadora.style.color = "black"

        categoriaFrutas.style.backgroundColor = "#FFF1F4"
        categoriaFrutas.style.color = "black"

        categoriaBebidas.style.backgroundColor = "#F3EEF5"
        categoriaBebidas.style.color = "black"
    })

    secaoPanificadora.addEventListener("click", () => {

        secaoProdutos.innerHTML = ""

        if(element.categoria === secaoPanificadora.innerText) {

            Estrutura.criandoProduto()
        }

        categoriaTodos.style.backgroundColor = "#fcf7f5"
        categoriaTodos.style.color = "black"

        secaoPanificadora.style.backgroundColor = "#FF2253"
        secaoPanificadora.style.color = "white"

        categoriaFrutas.style.backgroundColor = "#FFF1F4"
        categoriaFrutas.style.color = "black"

        categoriaBebidas.style.backgroundColor = "#F3EEF5"
        categoriaBebidas.style.color = "black"
    })

    categoriaFrutas.addEventListener("click", () => {

        secaoProdutos.innerHTML = ""

        if(element.categoria === categoriaFrutas.innerText) {

            Estrutura.criandoProduto()
        }

        categoriaTodos.style.backgroundColor = "#fcf7f5"
        categoriaTodos.style.color = "black"

        secaoPanificadora.style.backgroundColor = "#FFF7F4"
        secaoPanificadora.style.color = "black"

        categoriaFrutas.style.backgroundColor = "#FF2253"
        categoriaFrutas.style.color = "white"

        categoriaBebidas.style.backgroundColor = "#F3EEF5"
        categoriaBebidas.style.color = "black"
    })

    categoriaBebidas.addEventListener("click", () => {

        secaoProdutos.innerHTML = ""

        if(element.categoria === categoriaBebidas.innerText) {

            Estrutura.criandoProduto()
        }

        categoriaTodos.style.backgroundColor = "#fcf7f5"
        categoriaTodos.style.color = "black"

        secaoPanificadora.style.backgroundColor = "#FFF7F4"
        secaoPanificadora.style.color = "black"

        categoriaFrutas.style.backgroundColor = "#FFF1F4"
        categoriaFrutas.style.color = "black"

        categoriaBebidas.style.backgroundColor = "#FF2253"
        categoriaBebidas.style.color = "white"
    })
})
 */