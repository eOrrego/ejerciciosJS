// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// Dificultad:  🟢

// alert("Hola mundo mundial");


// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// Dificultad:  🟢

//document.write("HOLA MUNDO MUNDIAL!!!");

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// Dificultad:  🟢

//console.log("Suma de 3+5 es igual a", 3+5);

// document.write("Suma de 3+5 es igual a ", 3+5);

// alert(`Suma de 3+5 es igual a ${3+5}`);

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// Dificultad:  🟢

// const nomUsusario = prompt("Ingrese nombre de usuario:");

// document.write(`Hola ${nomUsusario}`);

// alert(`Hola ${nomUsusario}`);

// console.log(`Hola ${nomUsusario}`);

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt

// const num1 = parseInt(prompt("Ingrese un numero:"));
// const num2 = parseInt(prompt("Ingrese otro numero:"));
// alert(`La suma de ${num1} y ${num2} es: ${num1+num2}`);

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// const num1 = parseInt(prompt("Ingrese un numero:"));
// const num2 = parseInt(prompt("Ingrese otro numero:"));

// if(num1>num2){
//     alert(`El numero ${num1} es mayor`);
// }else if(num1===num2){
//     alert("Los numeros son iguales");
// }else{
//     alert(`El numero ${num2} es mayor`);
// }

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Dificultad:  🟢

// const num1 = parseInt(prompt("Ingrese numero A:"));
// const num2 = parseInt(prompt("Ingrese numero B:"));
// const num3 = parseInt(prompt("Ingrese numero C:"));

// if ((num1 > num2) && (num1 > num3)) {
//     alert(`El numero ${num1} es mayor`);
// } else if (num2 > num3) {
//     alert(`El numero ${num2} es mayor`);
// } else {
//     alert(`El numero ${num3} es mayor`);
// }

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Dificultad:  🟢🟡

// const num1 = parseInt(prompt("Ingrese numero A:"));

// if (num1 % 2 === 0) {
//     console.log(`El numero ${num1} es divisible por 2`);
// }else{
//     console.log(`El numero ${num1} NO es divisible por 2`);
// }

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Dificultad:  🟢🟡

// const frase = (prompt("Ingrese una frase:"));

// console.log(frase);

// for (let i = 0; i < frase.length; i++) {
//     if (frase.charAt(i) === "a") {
//         console.log(++i, "a");
//     }else if(frase.charAt(i) === "e"){
//         console.log(++i, "e");
//     }else if(frase.charAt(i) === "i"){
//         console.log(++i, "i");
//     }else if(frase.charAt(i) === "o"){
//         console.log(++i, "o");
//     }else if(frase.charAt(i) === "u"){
//         console.log(++i, "u");
//     }
// }

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Dificultad:  🟢🟡

// const num1 = parseInt(prompt("Ingrese numero A:"));
// const numA = 2;
// const numB = 3;
// const numC = 5;
// const numD = 7;


// if(num1 === 0){
//     console.log("el nro es 0");
// }else if (num1 % numA === 0) {
//     console.log(`El numero ${num1} es divisible por ${numA}`);
// }else if (num1 % numB === 0) {
//     console.log(`El numero ${num1} es divisible por ${numB}`);
// }else if (num1 % numC === 0) {
//     console.log(`El numero ${num1} es divisible por ${numC}`);
// }else if (num1 % numD === 0) {
//     console.log(`El numero ${num1} es divisible por ${numD}`);
// }else{
//     console.log("No es divisible");
// }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// const num1 = parseInt(prompt("Ingrese numero:"));
// const numA = 2;
// const numB = 3;
// const numC = 5;
// const numD = 7;


// if (num1 === 0) {
//     console.log("el nro es 0");
// } else { console.log(`El numero ${num1}`) };
// if ((num1 % numA === 0) && (num1 !== 0)) {
//     console.log(`es divisible por ${numA}`);
// }
// if ((num1 % numB === 0) && (num1 !== 0)) {
//     console.log(`es divisible por ${numB}`);
// }
// if ((num1 % numC === 0) && (num1 !== 0)) {
//     console.log(`es divisible por ${numC}`);
// }
// if ((num1 % numD === 0) && (num1 !== 0)) {
//     console.log(`es divisible por ${numD}`);
// }
// if ((num1 % numA !== 0) && (num1 % numB !== 0) && (num1 % numC !== 0) && (num1 % numD !== 0)) {
//     console.log(`No es divisible por los numeros: ${numA}, ${numB}, ${numC} y ${numD}`);
// }

//Ejercicios javascript - Bucles
// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
//si la edad ingresada no es un número válido indicarlo en un mensaje.

// const edad = parseInt(prompt("Ingrese su edad:"));

// if (isNaN(edad)) {
//     console.log("No ingreso un numero valido");
// } else if (edad >= 18) {
//     console.log("Ya puedes conducir");
// } else {
//     console.log("Tiene que ser mayor de 18 años");
// }

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
// Dificultad:  🟢🟡

// const nota = parseInt(prompt("Ingrese la nota:"));

// switch(nota){
//     case 0:
//     case 1: 
//     case 2: alert("Muy deficiente");
//     break;
//     case 3:
//     case 4: alert("Insuficiente");
//     break;
//     case 5:
//     case 6: alert("Suficiente");
//     break;
//     case 7: alert("Bien");
//     break;
//     case 8:
//     case 9: alert("Notable");
//     break;
//     case 10: alert("Sobresaliente");
//     break;
//     default:
//         if(isNaN(nota)){
//             alert("Ingrese un numero valido");
//         }else if((nota<0) || (nota>10)){
//             alert("Numero erroneo");
//         }
//         break;
// }

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// Dificultad:  🟢🟡

// function myFunction() {

//     let texto="";

//     do {

//         texto += prompt("Ingrese texto:") + "-";

//     } while (confirm("Aceptar para continuar ingresando texto\nCancelar para terminar") == true);

//     console.log("El texto ingresado es: ",texto);
// }

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// Dificultad:  🟢🟡🔴

// function myFunction() {

//     let num = 0;
//     let suma = 0;

//     do {

//         num = parseInt(prompt("Ingrese numero:"));
//         if (isNaN(num)) {
//             alert("el caracter ingresado no es un numero");
//         } else {
//             suma += num;
//         }

//     } while (confirm("Aceptar para continuar ingresando numeros\nCancelar para terminar") == true);

//     console.log("La suma de los numeros es:", suma);
// }

// Dificultad:  🟢🟡🔴

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// Dificultad:  🟢🟡

// const letraDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

// let dni;

// do {
//     dni = parseInt(prompt("Ingrese numero de DNI"));
//     if ((dni < 0) || (dni > 99999999)) {
//         alert("no es un numero valido de DNI");
//     } else if (isNaN(dni)) {
//         alert("no es valido");
//     } else {
//         const resultado = dni % 23;
//         console.log("Nro de DNI:", dni,":", letraDNI[resultado]);
//     }
// } while ((dni < 0) || (dni > 99999999) || isNaN(dni) || confirm("Aceptar para continuar ingresando DNI\nCancelar para terminar"));


// Dificultad:  🟢🟡
// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

// let i = 0;
// let b = 0;

// while (i <= 30) {
//     while (b < i) {
//         document.write(i);
//         b++;
//     }
//     document.write("<br>");
//     i++;
//     b = 0;
// }

// Dificultad:  🟢🟡
// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

// let i = 0;

// do {
//     i = parseInt(prompt("Ingrese un numero de 0 a 50:"));
// } while ((i < 0) || (i > 50));

// let b = 0;

// while (i > 0) {
//     while (b < i) {
//         document.write(i);
//         b++;
//     }
//     document.write("<br>");
//     i--;
//     b = 0;
// }

// Dificultad:  🟢🟡
// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

// let num = 0;
// let c = 1;

// do {
//     num = parseInt(prompt("Ingrese un numero de 0 a 50:"));
// } while ((num < 0) || (num > 50));

// for (let i = 1; i <= num; i++) {
//     for (let b = 0; b < i; b++) {
//         document.write(c);
//         c++;
//     }
//     document.write("<br>");
//     c = 1;
// }

// Dificultad:  🟢🟡🔴
// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

// let cont = 1;

// for (let i = 1; i < 50; i++) {
//     if((i % 4 === 0) && (i % 9 === 0)){
//         console.log(i, "multiplo de 4 y de 9");
//     }else if (i % 4 === 0) {
//         console.log(i, "multiplo de 4");
//     }else if (i % 9 === 0) {
//         console.log(i, "multiplo de 9");
//     }else {
//         console.log(i);
//     }

//     if (cont === 5) {
//         console.log("-----------");
//         cont = 0;
//     }
//     cont++;
// }

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// Ejercicios con Math


// Dificultad:  🟢🟡

// let fila = parseInt(prompt("Ingrese nro de filas:"));

// let columna = parseInt(prompt("Ingrese nro de columnas:"));

// let cont = fila*columna;

// for (let i = 0; i < fila; i++) {
//     for (let b = 0; b < columna; b++) {
//         document.write(cont);
//         cont--;
//     }
//     document.write("<br>");
// }

//console.table(["apples", "oranges", "bananas"]); //para hacer tabla en consola

// Dificultad:  🟢🟡
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// let persona1 = [];
// let persona2 = [];
// let persona3 = [];


// persona1[0] = prompt("Ingrese nombre1: ");
// persona1[1] = parseInt(prompt("Ingrese edad1: "));

// persona2[0] = prompt("Ingrese nombre2: ");
// persona2[1] = parseInt(prompt("Ingrese edad2: "));

// persona3[0] = prompt("Ingrese nombre3: ");
// persona3[1] = parseInt(prompt("Ingrese edad3: "));

// let edadMax = Math.max(persona1[1], persona2[1], persona3[1]);

// if (edadMax == persona1[1]) {
//     console.log(`El mayor es ${persona1[0]} que tiene ${persona1[1]} años`);
// } else if (edadMax == persona2[1]) {
//     console.log(`El mayor es ${persona2[0]} que tiene ${persona2[1]} años`);
// } else if (edadMax == persona3[1]) {
//     console.log(`El mayor es ${persona3[0]} que tiene ${persona3[1]} años`);
// }

// Dificultad:  🟢🟡
// 12- Realiza un script que genere un número aleatorio entre 1 y 99

// let ganador = [];

// console.log("Los numeros ganadores para el QUINI 6:");

// for (let i = 0; i < 6; i++) {
//     ganador[i] = Math.floor(Math.random() * 46);
// }

// console.log(ganador);


// Dificultad:  🟢🟡
// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

// let texto = prompt("Ingrese texto: ");

// console.log(texto.toUpperCase());

// Dificultad:  🟢🟡
// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let texto = prompt("Ingrese texto: ");
// let textoT = "";

// let cont = texto.length;

// for (let i = 0; i < cont; i++) {
//     textoT += texto[i]+"-";
// }

// console.log(textoT);

// Dificultad:  🟢🟡
// 15- Realiza un script que cuente el número de vocales que tiene un texto.

// let texto = prompt("Ingrese texto: ");

// let cont = texto.length;

// let vocales = 0;

// for (let i = 0; i < cont; i++) {
//     if ((texto[i] == "a") || (texto[i] == "e") || (texto[i] == "i") || (texto[i] == "o") || (texto[i] == "u")) {
//         vocales++;
//     }
// }

// console.log("Vocales que tiene el texto ingresado: ", vocales);

// Dificultad:  🟢🟡
// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let texto = prompt("Ingrese texto: ");

// let cont = texto.length;
// let b = cont;
// let textoT = "";

// for (let i = 0; i < cont; i++) {
//     b--;
//     textoT += texto[b];
// }

// console.log("Texto ingresado: ",texto);
// console.log("Texto invertido: ",textoT);


// Dificultad:  🟢
// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// let texto = prompt("Ingrese texto: ");

// let cont = texto.length;

// let b = 0;

// for (let i = 0; i < cont; i++) {
//     if ((texto[i] == "a") || (texto[i] == "e") || (texto[i] == "i") || (texto[i] == "o") || (texto[i] == "u")) {
//         b = texto.indexOf(texto[i]);
//         break;
//     }
// }

// console.log("La posicion de la primera vocal es: ",b);


// 1) Generar un número secreto
// aleatorio con la siguiente instruccion:
// Genera un numero entero aleatorio de 1 a 20

// let randomNumber=Math.floor(Math.random()*20) 


// 2) Pedir al usuario que ingrese un número y que
// intente adivinar el número que eligió la computadora.

// 3) Si el numero ingresado por el usuario es mayor
// al número secreto, avisarle que es muy grande y que intente de nuevo y que
// vuelva al paso 2.

// 4) Si el numero ingresado es menor al número
// secreto, avisarle que es muy chico, y que intente de nuevo volviendo al paso 2.

// 5) Si el número ingresado coincide con el número
// secreto, sacar el siguiente mensaje:
// "Felicitaciones, has adivinado el número
// secreto que era:  [numeroSecreto]"
// "Lo has logrado en [n] intentos!!"
// Y finalizar el programa.

// Nota:
// Obviamente hay que hacer un bucle y crear un contador de intentos.
// Sean honestos con ustedes mismos y usen sus propias neuronas para resolver el problema, 
// y aunque no lo terminen lo importante es intentarlo.

// let randomNumber = Math.floor(Math.random() * 20);
// let suerte;
// let cont = 0;

// do {
//     suerte = parseInt(prompt("Ingrese numero:"));

//     if (suerte > randomNumber) {
//         console.log("El numero secreto es menor");
//     } else if (suerte < randomNumber) {
//         console.log("El numero secreto es mayor");
//     }

//     cont++;
// } while (randomNumber !== suerte);

// console.log(`Felicitaciones, has adivinado el número secreto que era: ${suerte}`);
// console.log(`Lo has logrado en ${cont} intentos!!`);


// Arrays
// Dificultad:  🟢
// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
// Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// for (let i = 0; i < meses.length; i++) {
//     document.write(`<li>${meses[i]}</li>`);
// }


// Dificultad:  🟢🟡
// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// let ciudad;
// let ciudades = [];

// do {
//     ciudad = prompt("Ingrese una ciudad: ");
//     ciudades.push(ciudad);
// } while (confirm("Aceptar para continuar ingresando ciudades\nCancelar para terminar"));

// document.write(`Las ciudades ingresadas son las siguientes: `, ciudades);
// document.write(`<br>La longitud del arreglo es: `, ciudades.length);
// document.write(`<br>Primera ciudad: `, ciudades[0]);
// document.write(`<br>Ultima ciudad: `, ciudades[ciudades.length-1]);

// ciudades.push("Paris");

// document.write(`<br>Las ciudades ingresadas son las siguientes: `, ciudades);

// document.write(`<br>La segunda ciudad es: `, ciudades[1]);

// ciudades[1]= "Barcelona";

// document.write(`<br>Cambie la segunda ciudad por Barcelona: `, ciudades);

// Dificultad:  🟢🟡🔴

// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// let dado1 = Math.floor(Math.random() * 6 + 1);
// let dado2 = Math.floor(Math.random() * 6 + 1);
// let resultado = [];
// let i = 0;

// console.log("%cSUMA DE DADOS", "color: green; font-size: 20px");
// do {
//     dado1 = Math.floor(Math.random() * 6 + 1);
//     dado2 = Math.floor(Math.random() * 6 + 1);
//     resultado[i] = dado1 + dado2;
//     i++;
//     console.log(resultado);
// } while (confirm("Aceptar para tirar dados\nCancelar para salir"));

// Funciones
// Dificultad:  🟢
// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// const espar = numero => (numero % 2 === 0) ? alert("El numero es par") : alert("El numero es impar");
// let numero = parseInt(prompt("Ingrese un numero"));

// espar(numero);

// Dificultad:  🟢🟡
// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// version A
// const texto = prompt("Ingrese texto:");
// let i=0;
// let caracter='';
// console.log(texto);
// while (i < texto.length){
//     caracter = texto.charAt(i);
//     console.log(caracter);
//     if (!isNaN(caracter * 1)){
//         alert('El caracter es numerico');
//     }else{
//         if (caracter == caracter.toUpperCase()) {
//             alert ('Es una letra mayuscula');
//         }
//         if (caracter == caracter.toLowerCase()){
//             alert ('Es una letra minuscula');
//         }
//     }
//     i++;
// }

// version B
// const texto = prompt("Ingrese texto:");
// const esmayus = texto => { return (texto === texto.toUpperCase()) };
// const esminus = texto => { return (texto === texto.toLowerCase()) };

// const resultado = (esmayus, esminus) => {
//     if (esmayus) {
//         alert("El texto esta escrito en Mayuscula");
//     } else if (esminus) {
//         alert("El texto esta escrito en Minnuscula");
//     } else {
//         alert("El texto es una combinacion de mayusculas y minusculas");
//     }
// }

// resultado(esmayus(texto),esminus(texto));

// Dificultad:  🟢🟡
// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// let base;
// let altura;
// do {
//     base = parseInt(prompt("Ingrese base de rectangulo: "));
//     altura = parseInt(prompt("Ingrese altura de rectangulo: "));
// } while ((base <= 0) || (altura <= 0));

// const perimetro = (base, altura) => 2 * (base + altura);
// const superficie = (base, altura) => base * altura;

// let opcion = parseInt(prompt("Ingrese opcion, 1 para perimetro, 2 para superficie: "));

// switch (opcion) {
//     case 1:
//         alert(`El perimetro del rectanguro es: ${perimetro(base, altura)}`);
//         break;
//     case 2:
//         alert(`El perimetro del rectanguro es: ${superficie(base, altura)}`);
//         break;
//     default:
//         alert("No selecciono una opcion valida");
//         break;
// }

// Dificultad:  🟢🟡
// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

// let numero;

// do {
//     numero = parseInt(prompt("Ver table de multiplicar del numero: "));
// } while (numero <= 0);

// const multiplo = (numero, i) => { return (numero * i) };

// document.write(`Tabla de multiplicar del numero: ${numero} </br>`);
// for (let i = 1; i <= 10; i++) {
//     document.write(`${i} x ${numero} = ${multiplo(numero, i)} </br>`);
// }

// Crear objetos
// Dificultad:  🟢
// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


/* class Auto {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = false;
    }
    PrenderAuto() {
        this.estado = true;
    }

    ApagarAuto(){
        this.estado = false;
    }

    get mostrarEstadoAuto() {
        this.estado ? console.log(`Estado del auto: Prendido`) : console.log(`Estado del auto: Apagado`)
    }

    get mostrarAuto() {
        console.log(`Auto: ${this.marca}, ${this.modelo} y color: ${this.color}`);
    }

}

let fiat = new Auto("rojo", "fiat", "uno");

fiat.mostrarAuto; */

/* Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta. */

/* class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    set ingresar(valor) {
        this.saldo += valor;
    }

    set extraer(valor) {
        this.saldo -= valor;
    }

    get informar() {
        console.log("Hola", this.titular);
        console.log("Su saldo es:", this.saldo);
    }
} */

/* Rectángulos
Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

/* class Rectangulos {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    set setBase(valor) {
        this.base = valor;
    }
    set setAltura(valor) {
        this.altura = valor;
    }
    get getCalculos() {
        console.log("Calculos del rectangulo de %d x %d", this.base, this.altura);
        console.log("Perimetro:", 2 * (this.base + this.altura));
        console.log("Área:", this.base * this.altura);
    }
} */

/* Producto - Dificultad:  🟢🟡

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

/* class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor(carro) {
        this.carro = carro;
    }
    get mostrarCarrito(){
        for (let i = 0; i < this.carro.length; i++) {
            console.log("El producto: %s tiene el precio: %d", this.carro[i].nombre, this.carro[i].precio);
        }
    }

    set agregarProducto(prod){
        this.carro.push(prod);
    }
}

let sopa = new Producto(10, "sopa", 100);
let azucar = new Producto(20, "azucar", 150);
let pan = new Producto(5, "pan", 50);

let carro1 = [sopa, azucar, pan];

let carro = new Carrito(carro1); */
