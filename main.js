$(document).ready(function(){
    $('header button').click(function (){
        $('form').slideDown(); // Faz o formulário aparecer
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); // Faz o formulário sumir
    });

    $('form').on('submit', function (e){
        e.preventDefault(); // Evita o recarregamento da página
        
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        if (enderecoDaNovaImagem.trim() !== "") { // Verifica se o campo não está vazio
            const novoItem = $('<li style="display: none"></li>');
            
            $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
            $(`
                <div class="overlay-imagem-link">
                    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                        Ver imagem em tamanho real
                    </a>
                </div>
            `).appendTo(novoItem);
            
            $(novoItem).appendTo('ul').fadeIn(); // Adiciona à lista e exibe com fade-in
            $('#endereco-imagem-nova').val(""); // Limpa o campo após o envio
        } else {
            alert("Por favor, insira um link válido para a imagem.");
        }
    });
});
