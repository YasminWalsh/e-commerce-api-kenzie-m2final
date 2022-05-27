export const Api = class Api {

    static BASEURL = "https://api-kenzie-food.herokuapp.com/"

    static async cadastrarUsuario(data) {

        const response = await fetch(Api.BASEURL + "auth/register", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        
        }).then(res => res.json()).then(res => res).catch(err => err)

        return response
    }
        
    static async logarUsuario(data) {

        const response = await fetch(Api.BASEURL + "auth/login", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)

        }).then(res => res.json()).then(url => {
            
            localStorage.setItem("Token", url)

            window.location = "../pages/dashboard.html"
            
            return url
        })

        return response
    }

    static async produtosDoUsuarioLogado() {

        const respose = await fetch(Api.BASEURL + "my/products", {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        
        }).then(res => res.json()).then(data => data).catch(err => err)

        console.log('res',respose)
        return respose
    }

    static async criarProduto(data) {

        const response = await fetch(Api.BASEURL + "my/products", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(data)
        
        }).then(res => res.json()).then(res => res).catch(err => err)


        return response
    }

    static async editarProduto(id, data) {

        const response = await fetch(Api.BASEURL + "my/products/" + id, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(data)
        
        }).then(res => res.json()).then(res => res).catch(err => err)

        
        return response
    }

    static async deletarProduto(id) {

        const response = await fetch(Api.BASEURL + "my/products/" + id, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        
        }).then(res => res.json()).then(res => res).catch(err => err)


        return response
    }
}
