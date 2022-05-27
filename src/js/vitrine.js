class Produtos {
  static async pegarProdutos() {
    const url = `https://api-kenzie-food.herokuapp.com/products/`;
    let arrayDeProdutos;

    await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        arrayDeProdutos = response;
      })
      .catch((err) => {
        console.error(err);
      });
    return arrayDeProdutos;
  }
}

class Vitrine {
  static contador = 1;
  static dataBase = { produtos: [] };
  static async fazerVitrine(arrayDeProdutos) {
    const ul = document.getElementById("vitrine");
    ul.innerHTML = "";
    arrayDeProdutos.forEach((produto) => {
      const li = document.createElement("li");
      li.classList.add("produtoCard");

      const img = document.createElement("img");
      img.classList.add("produtoImagem");
      img.src = produto.imagem;

      const h3 = document.createElement("h3");
      h3.classList.add("produtoTitulo");
      h3.id = produto.categoria;
      h3.innerText = produto.nome;

      const p = document.createElement("p");
      p.classList.add("produtoDescricao");
      p.innerText = produto.descricao;

      const pCategoria = document.createElement("p");
      pCategoria.classList.add("produtoCategoria");
      pCategoria.classList.add('tag');
      pCategoria.innerText = produto.categoria;

      const span = document.createElement("span");
      span.classList.add("produtoPreco");
      span.innerText = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

      const div = document.createElement("div");
      div.id = "containerButton";

      const button = document.createElement("button");
      const imgButton = document.createElement("img");
      imgButton.classList.add("imagemButton");
      imgButton.src = "";
      button.classList.add("botaoComprar");
      button.id = produto.id;
      
      button.addEventListener("click", function (e) {
        let click = e.target;
        if (click.tagName === "BUTTON") {
          Carrinho.adicionarNoCarrinho(produto);
          let click2 = click.id;
          const prodEscolhido = arrayDeProdutos.find(
            (prod) => prod.id == click2
          );
          Vitrine.dataBase.produtos.push(prodEscolhido);

          Carrinho.mostrarQtd();
          Carrinho.mostrarPreco();
        }
      });

      button.appendChild(imgButton);
      div.appendChild(button);

      const divFooter = document.createElement("div");
      divFooter.classList.add("divFooter");
      divFooter.append(span, div);
      li.append(img, h3, p, pCategoria, divFooter);
      ul.appendChild(li);
    });
  }
}

export { Produtos, Vitrine };
import { Carrinho } from "./carrinho.js";


