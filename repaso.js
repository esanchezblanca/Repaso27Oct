//Ejercicio 1 Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario.
const palabraDerecho = "Matamoscas";
const arrDerecho = palabraDerecho.split('');
console.log("Esto es palabra:", arrDerecho.reverse());
arrDerecho.reverse();
const palabraJunta = arrDerecho.reverse().join('');
console.log(palabraJunta);

//Ejercicio 2 Construye una función que sea capaz de comprobar si una variable es un array o no lo es.

let prendas1 = 989;
let prendas2 = {arriba: "camiseta", abajo: "falda"};
let prendas3 = ["pantalones", "vestido", "faja"];


Array.isArray(prendas1);
Array.isArray(prendas2);//1 y 2 devuelven false
Array.isArray(prendas3); //devolverá true

//Ejercicio 3 Construye una función capaz de clonar un array.

arrSimple = ["palabra1", "palabra2", "palabra3"];
arrClonado = [...arrSimple];



//Ejericio 4 Escribe una función capaz de borrar elementos duplicados del siguiente array.
let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];
let nombresSinRepetir = array1.filter( (item, pos, self) => {
    return self.indexOf(item) == pos; 
});
console.log("Eliminadas duplicidades nombres repetidos:",nombresSinRepetir);



// Ejercicio 5 Escribe una función capaz de concatenar dos arrays.
let array2 = [1,2,3,4,5,6,7,8,9]; 
let array3 = [10,11,2,3,4,12,13,14,15];

let concatenacion = array2.concat(array3);
console.log("Esto son los arrays concatenados:",concatenacion);



//Ejercicio 6 Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.
concatenacion = concatenacion.filter( (item, pos, self) => {
    return self.indexOf(item) == pos;
});
console.log("Arr concatenado y eliminadas duplicidades:", concatenacion); 


// Ejercicio 7  Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número es primo o no.

const numPrimo = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false; //numero no es primo
    return num > 1;
  }


/*Ejercicio 8 - Diseña una función en Javascript de tipo promesa que genere un array con 5 números aleatorios, una vez hecho esto, pedirá un número al usuario 
mediante prompt y comprobará si el número introducido coincide con uno de los 5 generados aleatoriamente por el array. en caso de coincidir devolverá un 
resolve, caso contrario reject. El espectro de los números tanto aleatorios como el introducido por el usuario será del 1 al 10. */

let preguntaNum = parseInt(prompt("Introduce un número del 1 al 10", "1"), 10);
const cincoNum = [];

function sacarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; //hago una función para que me devuelva un número aleatorio del 1 al 10 
  }

for (let i = 0; i < 6; i++){ //creo un bucle para que me genere cinco veces el número aleatorio
    cincoNum = sacarNumero (1, 10);
}

if (cincoNum.find(preguntaNum)){ //compruebo que el número coincida con alguno del array
    console.log('el número coincide con los que estoy pensando'):
}else{
    console.log('el número no coincide con los que estoy pensando');
}
