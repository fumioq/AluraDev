class PostsView extends View {
    
    constructor(elemento) {
        
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table class="table table-hover table-bordered">
        
            <thead>
                <tr>
                    <th onclick="postController.ordena('data')">DATA</th>
                    <th onclick="postController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="postController.ordena('valor')">VALOR</th>
                    <th onclick="postController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.posts.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
                  
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.volumeTotal}
                </td>
            </tfoot>
            
        </table>
        `;
    }
}
