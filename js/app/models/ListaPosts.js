class ListaPosts {

    constructor() {
        
        this._posts = [];
    }

    adiciona(post) {
        
        this._posts.push(post);
    }

    get posts() {
        
        return [].concat(this._posts);
    }

    esvazia() {
        
        this._posts = [];
    }
    
}