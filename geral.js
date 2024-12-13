
$('#sair').on('click',function(event){
    event.preventDefault();//para parar o evento

    let resposta = confirm('Deseja mesmo Sair?')
    if (resposta){
        window.location.href = 'index.html'    
    }
})
