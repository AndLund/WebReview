var tabelaView = {
    render : () => {
        let tagTbody = document.querySelector('.tbody')
        
        for(let i = 0; i < 8; i++){
            let tr = document.createElement('tr')
            for(let j = 0; j <= 8; j++){

                let td = document.createElement('td')
                

                // Alimenta a primeira coluna com o número das linhas
                j == 0 ? td.textContent = i + 1 : td.setAttribute('onclick', `jogada(this , ${i}, ${j-1})`)
                
                tr.append(td)
            }
            tagTbody.append(tr)
        }
    }
}