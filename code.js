function calcular() {

    var txtvel = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtvel.value)
    res.innerHTML = `<br>Sua velocidade atual é de <strong>${vel} KM/H</strong> <br>`

    if (vel > 60) {

        res.innerHTML += `<br>Dirija com mais cuidado, está muito rápido!`
    }

    else {

        res.innerHTML += `<br>Você está com a velocidade padrão!`


    }
    // Média de velocidadegit pus 

}
