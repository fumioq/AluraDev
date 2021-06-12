class Post {
    
    constructor(data, titulo, descricao, codigo, linguagem, cor, usuario) {
        
        this._data = new Date(data.getTime());
        this._titulo = titulo;
        this._descricao = descricao;
		this._codigo = codigo;
		this._linguagem = linguagem;
		this._cor = cor;
		this._usuario = usuario;
        Object.freeze(this);
    }
    
    get data() {
        
        return new Date(this._data.getTime());
    }
	
	get titulo() {
        
        return this._titulo;
    }
    
    get descricao() {
        
        return this._descricao;
    }
	
	get codigo() {
        
        return this._codigo;
    }
	
	get linguagem() {
        
        return this._linguagem;
    }
    
    get cor() {
        
        return this._cor;
    }
	
	get usuario() {
        
        return this._usuario;
    }
    
}