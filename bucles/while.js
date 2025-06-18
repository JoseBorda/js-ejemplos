// var numero = 0;

// while (numero < 10) {
//     numero++;
//     console.log(numero);
// }

var nicks = '';
var proceso = true;
var conteo = 0;

while (proceso) {
    nick = prompt('Introduzca el nombre: ');

    if (nick) {
        nicks += nick + ', ';
        conteo++;
    } else {
        proceso = false;
    }
}
alert('Los nombres son: ' + nicks + ' y agrego ' + conteo + ' nombres');


