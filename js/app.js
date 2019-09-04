// objeto global
var Calculadora = {
  init: function() {
    // VARIABLES
var pantalla = document.getElementById('display')
var encendido= document.getElementById('on')
var signo= document.getElementById('sign')
var raizcuadrada= document.getElementById('raiz')
var dividir= document.getElementById('dividido')
var multiplicar= document.getElementById('por')
var restar= document.getElementById('menos')
var sumar= document.getElementById('mas')
var enter= document.getElementById('igual')
var decimal= document.getElementById('punto')
var uno= document.getElementById('1')
var dos= document.getElementById('2')
var tres= document.getElementById('3')
var cuatro= document.getElementById('4')
var cinco= document.getElementById('5')
var seis= document.getElementById('6')
var siete= document.getElementById('7')
var ocho= document.getElementById('8')
var nueve= document.getElementById('9')
var cero= document.getElementById('0')
var x = "0";
var xi = 1;
var coma = 0;
var ni = 0;
var op = "no";

// FUNCIONES OPERACIONES

function darNumero(xx) {
         if (x=="0" || xi==1  ) {
            pantalla.innerHTML=xx;
            x=xx;
            if (xx==".") {
               pantalla.innerHTML="0.";
               x=xx;
               coma=1;
               }
           }
           else {
               if (xx=="." && coma==0) {
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1;
               }

               else if (xx=="." && coma==1) {}

               else {
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0
         }

  function borradoTotal() {
      pantalla.innerHTML=0;
      x="0";
      coma=0;
      ni=0
      op="no"
      }

 function opuest() {
      nx=Number(x);
      nx=-nx;
      x=String(nx);
      pantalla.innerHTML=x;
      }

  function operar(s) {
       igualar()
       pantalla.innerHTML="";
       ni=x
       op=s;
       xi=1;
       }

  function igualar() {
      if (op=="no") {
         pantalla.innerHTML=x;
         }
      else {
        sl=ni+op+x;
        sol=eval(sl)
        pantalla.innerHTML=sol
        x=sol;
        op="no";
        xi=1;
        }
      }

//EVENTOS DE CLICK---------------------------------------------------------
//ENTER--------------------------
enter.onmousedown=  function(e) {
  var numero = "=";
  enter.style.padding = '1.3px';
  igualar()
}
enter.onmouseup=  function(e) {
enter.style.padding = '0px';
}

//SUMAR---------------------------
sumar.onmousedown=  function(e) {
  var numero = "+";
  sumar.style.padding = '1.3px';
  operar(numero)
}
sumar.onmouseup=  function(e) {
sumar.style.padding = '0px';
}

//RESTAR---------------------------
restar.onmousedown=  function(e) {
  var numero = "-";
  restar.style.padding = '1.3px';
  operar(numero)
}
restar.onmouseup=  function(e) {
restar.style.padding = '0px';
}

//DIVIDIR---------------------------
dividir.onmousedown=  function(e) {
  var numero = "/";
  dividir.style.padding = '1.3px';
  operar(numero)
}
dividir.onmouseup=  function(e) {
dividir.style.padding = '0px';
}

//MULTIPLICAR---------------------------
multiplicar.onmousedown=  function(e) {
  var numero = "*";
  multiplicar.style.padding = '1.3px';
  operar(numero)
}
multiplicar.onmouseup=  function(e) {
multiplicar.style.padding = '0px';
}

//RESET---------------------------
encendido.onmousedown=  function(e) {
  var numero = "0";
  encendido.style.padding = '1.3px';
  borradoTotal()
}
encendido.onmouseup=  function(e) {
encendido.style.padding = '0px';
}

//SIGNO---------------------------
signo.onmousedown=  function(e) {
  var numero = "-";
  signo.style.padding = '1.3px';
  opuest(numero)
}
signo.onmouseup=  function(e) {
signo.style.padding = '0px';
}

//NUMEROS-----------------------------------------------------------------------------
decimal.onmousedown=  function(e) {
  var numero = ".";
  decimal.style.padding = '1.4px';
  darNumero(numero)
}
decimal.onmouseup=  function(e) {
decimal.style.padding = '0px';
}

cero.onmousedown=  function(e) {
  var numero = "0";
  cero.style.padding = '1.3px';
  darNumero(numero)
}
cero.onmouseup=  function(e) {
cero.style.padding = '0px';
}

uno.onmousedown=  function(e) {
  var numero = "1";
  uno.style.padding = '1.3px';
  darNumero(numero)
}
uno.onmouseup=  function(e) {
uno.style.padding = '0px';
}

dos.onmousedown=  function(e) {
  var numero = "2";
  dos.style.padding = '1.3px';
  darNumero(numero)
}
dos.onmouseup=  function(e) {
dos.style.padding = '0px';
}

tres.onmousedown=  function(e) {
  var numero = "3";
  tres.style.padding = '1.3px';
  darNumero(numero)
}
tres.onmouseup=  function(e) {
tres.style.padding = '0px';
}

cuatro.onmousedown=  function(e) {
  var numero = "4";
  cuatro.style.padding = '1.3px';
  darNumero(numero)
}
cuatro.onmouseup=  function(e) {
cuatro.style.padding = '0px';
}

cinco.onmousedown=  function(e) {
  var numero = "5";
  cinco.style.padding = '1.3px';
  darNumero(numero)
}
cinco.onmouseup=  function(e) {
cinco.style.padding = '0px';
}

seis.onmousedown=  function(e) {
  var numero = "6";
  seis.style.padding = '1.3px';
  darNumero(numero)
}
seis.onmouseup=  function(e) {
seis.style.padding = '0px';
}

siete.onmousedown=  function(e) {
  var numero = "7";
  siete.style.padding = '1.3px';
  darNumero(numero)
}
siete.onmouseup=  function(e) {
siete.style.padding = '0px';
}

ocho.onmousedown=  function(e) {
  var numero = "8";
  ocho.style.padding = '1.3px';
  darNumero(numero)
}
ocho.onmouseup=  function(e) {
ocho.style.padding = '0px';
}

nueve.onmousedown=  function(e) {
  var numero = "9";
  nueve.style.padding = '1.3px';
  darNumero(numero)
}
nueve.onmouseup=  function(e) {
nueve.style.padding = '0px';
}


  }
}
Calculadora.init();
