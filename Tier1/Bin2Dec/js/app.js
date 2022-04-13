var binerInput = document.getElementById('binary');

document.querySelector('form.konverter').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    var hasil = binerInput.value;
    var pisah = hasil.split('').map(item => parseInt(item, 8));
    
    var a8 = pisah.at(7) * Math.pow(2,0)
    var a7 = pisah.at(6) * Math.pow(2,1)
    var a6 = pisah.at(5) * Math.pow(2,2)
    var a5 = pisah.at(4) * Math.pow(2,3)
    var a4 = pisah.at(3) * Math.pow(2,4)
    var a3 = pisah.at(2) * Math.pow(2,5)
    var a2 = pisah.at(1) * Math.pow(2,6)
    var a1 = pisah.at(0) * Math.pow(2,7)

    // var dec = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 
    var dec = a8 + a7 + a6 + a5 + a4 + a3 + a2 + a1

    // console.log(dec);
    document.getElementById("hasil").innerHTML = dec;
});