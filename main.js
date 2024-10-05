$(document).ready(function(){
    $('header button').click(function (){
        $('form').slideDown();    //essa função permite que o formulario apareca quando clicar em nova imagem
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); //essa função permite que o forumlario suba quando clicar no botao de cancelar
    })

    $('form').on('submit', function (e){
        e.preventDefault(); //não atualiza a pgina quando submetido
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link" />
                <a href:"${enderecoDaNovaImagem}" target="_blank" title='Ver imagem em tamanho real'>
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-imagem-nova').val("")
    })

})