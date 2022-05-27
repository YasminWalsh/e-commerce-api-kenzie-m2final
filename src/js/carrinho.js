import { Vitrine } from "./vitrine.js";

class Carrinho {
  static adicionarNoCarrinho(produto) {
    const corpoCarrinho = document.getElementById("conteudoModalCarrinho");

    const li = document.createElement("li");
    li.classList.add("liCarrinho");

    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;

    const h3 = document.createElement("h3");
    h3.innerText = produto.nome;

    const p = document.createElement("p");
    p.innerText = produto.categoria;

    const span = document.createElement("span");
    span.innerText = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

    const divDetalhes = document.createElement("div");
    divDetalhes.classList.add("detalhesProduto");
    divDetalhes.append(h3, p, span);

    const button = document.createElement("button");
    button.classList.add("delete");
    button.id = produto.id;
    button.addEventListener("click", function (e) {
      let click = e.target;
      if (click.tagName === "BUTTON") {
        let clickId = click.id;
        const prodEscolhido = Vitrine.dataBase.produtos.findIndex(
          (prod) => prod.id == clickId
        );
        Vitrine.dataBase.produtos.splice(prodEscolhido, 1);
        img, h3, p, span, button.parentElement.remove();
        const excluirQtd = document.querySelector(
          "#quantidadeModalCarrinho > p"
        );
        excluirQtd.innerText = Vitrine.dataBase.produtos.length;
        const diminuirPreco = document.querySelector("#precoTotalModal > p");
        const valorTotal = Vitrine.dataBase.produtos.reduce(function (
          acc,
          elem
        ) {
          return acc + elem.preco;
        },
        0);
        diminuirPreco.innerText = valorTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        });
      }
    });
    corpoCarrinho.appendChild(li);
    li.appendChild(img);
    li.appendChild(divDetalhes);
    li.appendChild(button);
  }
  static somaPrecos() {
    const valores = Vitrine.dataBase.produtos.map((prod) => prod.preco);

    if (Vitrine.dataBase.produtos.length > 0) {
      const somaTotal = valores.reduce((total, preco) => total + preco);
      return somaTotal;
    } else {
      return 0;
    }
  }

  static mostrarQtd() {
    const quantidade = document.querySelector("#quantidadeModalCarrinho > p");
    quantidade.innerText = Vitrine.dataBase.produtos.length;
  }

  static mostrarPreco() {
    const preco = document.querySelector("#precoTotalModal > p");
    preco.innerText = this.somaPrecos().toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }
}

/* const buttounHeader = document.querySelector("#headerCarrinho")[0];
buttounHeader.addEventListener("click", function (e) {
  Carrinho.mostrarQtd();
  Carrinho.mostrarPreco();

  const modal = document.querySelector(".modal");
  modal.style.display = "block";
});
 */
/* const buttonFechar = document.querySelector(".modalCarrinhoHeader > button");
buttonFechar.addEventListener("click", function (e) {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
});
 */
export { Carrinho };
