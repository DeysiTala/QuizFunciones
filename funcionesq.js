//ejercicio 2
function potencia(n,m){

  var resultado = Math.pow(n,m);

  return resultado;

}

console.log(potencia(2,3));

//ejercicio 1

/*function esCapicua(cadena) {



  return (cadena == cadena.split("").reverse().join(""));

}

//console.log(cadena);

esCapicua(1234567);*/

/*function calculo(){
  var A=[“murcielago”, “pato”,”caballo”, “zebra”];

  var acum=0;
        for(var i=0; i<A.lenght; i++)
        {
             for(var j='a'; j<='z'; j++)
                  if(A[i]==j)
                      acum++
}

}*/

//Ejercicio 4
var espacio = " ";
var coma = ",";
var A = "El mundo es tan cruel";


function contadorDePalabras(palabrasAcontar,separador) {

 var arregloDeCadenas = palabrasAcontar.split(separador);

  for (var i=0; i < arregloDeCadenas.length; i++)
   {

   }
  console.log("La cadena tiene " + arregloDeCadenas.length + " elementos ");
}

contadorDePalabras(A, espacio);


//Ejercicio 7
var numeros= [1,3,5,7];

 var sumatoria= numeros.reduce(function(resultado,numero2)
 {
 return resultado + numero2;
 });

 console.log(sumatoria);

//Ejecicio 9

function invertir(S) {
  var x = S.length;
  var cadenaInvertida = "";

  while (x>=0) {
    cadenaInvertida = cadenaInvertida + S.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

console.log(invertir("roma"));
