class PostController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
         
        this._listaPosts = new Bind(
            new ListaPosts(), 
            new PostsView($('#postsView')), 
            'adiciona', 'esvazia' , 'ordena', 'inverteOrdem');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');    
            
        this._ordemAtual = '';

        ConnectionFactory
            .getConnection()
            .then(connection => new PostDao(connection))
            .then(dao => dao.listaTodos())
            .then(posts => 
                posts.forEach(post => 
                    this._listaPosts.adiciona(post)))
            .catch(erro => {
                console.log(erro);
                this._mensagem.texto = erro;
            });            
    }
    
    adiciona(event) {
        
        event.preventDefault();

        ConnectionFactory
            .getConnection()
            .then(connection => {
                
                let post = this._criaPost();

                new PostDao(connection)
                    .adiciona(post)
                    .then(() => {
                        this._listaPosts.adiciona(post);
                        this._mensagem.texto = 'Negociação adicionada com sucesso'; 
                        this._limpaFormulario();                         
                    })
            })
            .catch(erro => this._mensagem.texto = erro);

    }
    
    importaPosts() {
        

        let service = new PostService();
        service
            .obterPosts()
            .then(posts => posts.forEach(post => {
                this._listaPosts.adiciona(post);
                this._mensagem.texto = 'Negociações do período importadas'   
            }))
            .catch(erro => this._mensagem.texto = erro);                              
    }
    
    apaga() {
        
        ConnectionFactory
            .getConnection()
            .then(connection => new PostDao(connection))
            .then(dao => dao.apagaTodos())
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaPosts.esvazia();
            });
    }
    
    _criaPost() {
        
        return new Post(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
    
    ordena(coluna) {
        
        if(this._ordemAtual == coluna) {
            this._listaPosts.inverteOrdem(); 
        } else {
            this._listaPosts.ordena((p, s) => p[coluna] - s[coluna]);    
        }
        this._ordemAtual = coluna;    
    }
}