var parImparView = {
    render: function(modelo, msg){
        let adversario = document.querySelector('.adversario')
        let resultado = document.querySelector('.resultado')

        adversario.textContent = modelo.adversario
        resultado.textContent = msg

    }
}