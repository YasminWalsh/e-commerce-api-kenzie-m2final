import { Api } from "../js/api.js";


const Cadastro = class Cadastro {

    static criandoEstrutura() {

        const form = document.createElement("form")

        const section = document.createElement("section")
        const titulo = document.createElement("h2")
        const nome = document.createElement("input")
        const email = document.createElement("input")
        const senha = document.createElement("input")
        const botaoCadastrar = document.createElement("button")
        
        const divLink = document.createElement("div")
        const link = document.createElement("p")


        form.classList.add("formularioCadastro")
        
        section.classList.add("section")
        titulo.classList.add("titulo")
        nome.classList.add("nome")
        email.classList.add("email")
        senha.classList.add("senha")
        botaoCadastrar.classList.add("botaoCadastrar")

        divLink.classList.add("divLinkCadastro")
        link.classList.add("link")


        titulo.innerText = "Cadastro"

        nome.type = "text"
        email.type = "email"
        senha.type = "password"

        nome.name = "nome"
        email.name = "email"
        senha.name = "senha"

        nome.required = "required"
        email.required = "required"
        senha.required = "required"

        nome.placeholder = "Nome"
        email.placeholder = "Email"
        senha.placeholder = "Senha"

        nome.autocomplete = "off"
        email.autocomplete = "off"
        senha.autocomplete = "off"

        botaoCadastrar.innerText = "Register"
        
        link.innerHTML = `Já tem uma conta? <a href="../pages/login.html" class="jaTenhoConta" >Entre</a>.`

        
        divLink.appendChild(link)

        section.append(titulo, nome, email, senha, botaoCadastrar, divLink)

        form.appendChild(section)

        document.body.appendChild(form)
    }
}

Cadastro.criandoEstrutura()



const form = document.querySelector("form")

form.addEventListener("submit", (event) => {

    event.preventDefault()
    
    const botoes = [...event.currentTarget]

    const dados = {
        name: botoes[0].value,
        email: botoes[1].value,
        password: botoes[2].value
    }

    Api.cadastrarUsuario(dados)

    window.location = "../pages/login.html"  
})
