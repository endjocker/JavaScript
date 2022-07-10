a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entrou)
    a.addEventListener('mouseout', saiu)
        

        function clicar() {
            
            a.innerText = 'Clicou'
            a.style.background = 'red'


        }

        function entrou() {

            a.innerText = 'Entrou!'
            a.style.background = 'green'

        }

        function saiu() {
            a.innerText = 'Saiu'
            a.style.background = 'black'

        }