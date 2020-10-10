function printing (message) {
  console.log(message)
}

printing ("Hola Pepe")

printing ("Hola Juan")

function suma (numero1, numero2){
  resultado = numero1+numero2
  console.log(resultado)
}

suma (12,12)

// CONCEPTO 

function printlog (message) {
  message = "Adios mundo"
  console.log(message)
}


var message = "Hola Mundo"
printlog(message)
console.log(message)

// cambiarla cambiando los nombres de dentro y fuera . 

//PARAMETROS POR DEFECTO 

//si la dejamos vacia "toma un valor no definido"
//

//hacerla arrow function 
function totalFare(fare, tax=0.21){
  cuota = (fare*tax)
  grandTotal = fare + cuota
  return (grandTotal) 
}

totalFare (1000)

//square

function squareIt (number){
  return number * number
}

var number = 12;

var result = squareIt(number)
console.log(number + "   squared is "+ result);


// 

function getTaxes (grandTotal){
  // retrun the taxes to pay 
  const localTaxes = 0.07;
  return grandTotal * localTaxes;
}

// using it
//const totalPrice
//getTaxes(1000);

//ejercicios : 
// 2 numeros devuelve el mayor de los 2 con if imprime el amyor
numero1=parseInt(prompt("Introduzca numero1"));
numero2=parseInt(prompt("Introduzca numero2"));

//meterlo en funccion
  if (numero1 > numero2){
    console.log(numero1)
  }
  else{
    console.log(numero2)
  }
  
  function maxOfTwo (numero1, numero2){
     if (numero1 > numero2){
     console.log(numero1)
  }
  else{
    console.log(numero2)
  }

  }

maxOfTwo (30,600)

// igual pero coje 3 parametros

numero1=parseInt(prompt("Introduzca numero1"));
numero2=parseInt(prompt("Introduzca numero2"));
numero3=parseInt(prompt("Introduzca numero3"));

if (numero1>numero2){
  console.log("el numero mayor es el 1 "+numero1)
}
else if (numero2 >numero3){
  console.log("el numero mayor es el 2 "+numero2)
}
else{
  console.log("el numero mayor es el 3 "+numero3)
}


// le vamos a pasar un string de 1 caracter y va a devolver verdadero si es una vocal y falso si no es una vocal 

// recoger el caracter 

char = prompt("Introduzca el caracter a analizar : ")
console.log("Has introducido este caracter "+char)

if (char == ("a" && "e"){
  console.log ("Es una vocal")
}
else{
  console.log ("No es una vocal")
}
























