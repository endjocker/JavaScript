function somar() {
    // var a = window.document.getElementById('area')
     var tn1 = window.document.getElementById('txt1')
     var tn2 = window.document.querySelector('input#txt2')
     var res = window.document.getElementById('res')
     var n1 = Number(tn1.value)
     var n2 = Number(tn2.value)
     var s = n1 + n2
     
 
     res.innerHTML = `A soma entre ${n1} e ${n2} resulta em ${s}`
 }