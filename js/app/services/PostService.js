class PostService {
    
    constructor() {
        
        this._http = new HttpService();
    }
    
    obterPostsDaSemana() {
               
        return this._http
            .get('posts/semana')
            .then(posts => {
                console.log(posts);
                return posts.map(objeto => new Post(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana');
            });  
    }
    
    obterPostsDaSemanaAnterior() {
               
        return this._http
            .get('posts/anterior')
            .then(posts => {
                console.log(posts);
                return posts.map(objeto => new Post(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana anterior');
            });   
    }
    
    obterPostsDaSemanaRetrasada() {
               
        return this._http
            .get('posts/retrasada')
            .then(posts => {
                console.log(posts);
                return posts.map(objeto => new Post(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana retrasada');
            });  
        
    }
    
    obterPosts() {
        
        return Promise.all([
            this.obterPostsDaSemana(),
            this.obterPostsDaSemanaAnterior(),
            this.obterPostsDaSemanaRetrasada()
        ]).then(periodos => {

            let posts = periodos
                .reduce((dados, periodo) => dados.concat(periodo), [])
                .map(dado => new Post(new Date(dado.data), dado.quantidade, dado.valor ));

            return posts;
        }).catch(erro => {
            throw new Error(erro);
        });
	} 
}
