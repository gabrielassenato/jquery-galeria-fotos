$(document).ready(function () {
    /*
    //selecionando um elevento usando JS
    console.log(document.querySelector('header button'));
    //selecionando um elevento usando JQuery
    console.log($('header button'));

    //criar um evento usando JS
    document.querySelector('header button').addEventListener('click', function () {
        
    })
    */
    
    //criar um evento usando JQuery

    //evento calback para expandir o formulário
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    //esse evento faz o submit parar de atualizar a página
    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link"> 
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val(' ');
    })
})