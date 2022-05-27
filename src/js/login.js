import { Api } from "../js/api.js";


const Login = class Login {

    static criandoEstrutura() {

        const form = document.createElement("form")

        const section = document.createElement("section")
        const titulo = document.createElement("h2")
        const email = document.createElement("input")
        const senha = document.createElement("input")
        const botaoLogin = document.createElement("button")

        const divLink = document.createElement("div")
        const link = document.createElement("p")
        

        form.classList.add("formularioLogin")
        
        section.classList.add("section")
        titulo.classList.add("titulo")
        email.classList.add("email")
        senha.classList.add("senha")
        botaoLogin.classList.add("botaoLogin")

        divLink.classList.add("divLinkLogin")
        link.classList.add("link")


        titulo.innerText = "Login"

        email.type = "email"
        senha.type = "password"

        email.name = "email"
        senha.name = "password"

        email.required = "required"
        senha.required = "required"
        
        email.placeholder = "Email"
        senha.placeholder = "Senha"

        email.autocomplete = "off"
        senha.autocomplete = "off"

        botaoLogin.innerText = "Login"

        link.innerHTML = `Ainda não tem uma conta? <a href="../pages/cadastro.html" class="aindaNaoTenhoConta">Cadastre-se</a>.`


        divLink.appendChild(link)

        section.append(titulo, email, senha, botaoLogin, divLink)

        form.appendChild(section)

        document.body.appendChild(form)
    }
}

Login.criandoEstrutura()



const form = document.querySelector("form")

form.addEventListener("submit", async (event) => {

    event.preventDefault()

    const botoes = [...event.currentTarget]

    const dados = {
        email: botoes[0].value,
        password: botoes[1].value
    }

    console.log(await Api.logarUsuario(dados))
})
