/* função retirada do site https://www.tutorialspoint.com/levenshtein-distance-in-javascript */
/* função que retorna (number) a distancia entre duas palavras, então tem que fazer mostrar a menor distância primeiro ... (ordem crescente) */
const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
       track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
       track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
       for (let i = 1; i <= str1.length; i += 1) {
          const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
          track[j][i] = Math.min(
             track[j][i - 1] + 1, // deletion
             track[j - 1][i] + 1, // insertion
             track[j - 1][i - 1] + indicator, // substitution
          );
       }
    }
    return track[str2.length][str1.length];
};


export default class Filtro{
    //atualiza a lista a cada filtro, pra sempre manter atualizada junto com a API, dava pra fazer com melhor perfomance
    constructor(renderizar,produtos){
        this.produtos=produtos;
        this.renderizar=renderizar;
        this.atualizarLista()
        .then(()=>{
            console.log(this.lista)
            this.renderizar(this.lista.slice(0,6));
        })
        this.pagina = 0;
        this.renderizarPagAtual();
        document.getElementById('procurar').addEventListener('input', ({ target }) => {
            console.log(target.value)
            this.buscar(target.value);
        })
        
    }

    async atualizarLista(){
        this.lista = await this.produtos()
        this.listaTotal=this.lista
    }

    async filtrarCategoria(categoria) {
        console.log(categoria)
        await this.atualizarLista();
        if(categoria !== 'Todos') {
            this.lista = await this.lista.filter(produto=>produto.categoria === categoria);
            this.listaTotal=this.lista
        }
        this.pagina = 0;
        this.renderizarPagAtual();
        this.renderizar(this.lista.slice(0,6));
    }

    mudarPagina(pagina) {
        
        if(pagina === 'proxima' && this.pagina<this.lista.length-6) this.pagina += 6;
        else if(pagina ==='anterior' && this.pagina>=6) this.pagina -=6;
        else if(pagina==='anterior') this.pagina=0;
        this.renderizarPagAtual();
        this.renderizar(this.lista.slice(this.pagina, this.pagina + 6));
    }

    renderizarPagAtual(){
        document.getElementById('paginaAtual').innerText= (this.pagina/6)+1;
    }

    buscar(texto){
        this.lista = this.listaTotal.filter(produto=>{
            return produto.nome.toLowerCase().includes(texto.toLowerCase());
        }).sort((produtoAnt,produtoSuc)=>{
            return levenshteinDistance(texto,produtoAnt.nome)-levenshteinDistance(texto,produtoSuc.nome);
        });
        console.log('busca ',texto)
        this.pagina = 0;
        this.renderizarPagAtual();
        this.renderizar(this.lista.slice(0,6));
        
    }

}
