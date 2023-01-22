$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const inputTarefa = $('#input-tarefa').val();
        const novoItem = $(`<li>${inputTarefa}</li>`);
        $(novoItem).appendTo('ul');

        $('li').click(function(){
            $(this).addClass('tarefa-riscada');
         });
        
    })    
})


