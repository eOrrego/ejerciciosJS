// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// Dificultad:  🟢

// alert("Hola mundo mundial");


// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// Dificultad:  🟢

// document.write("HOLA MUNDO MUNDIAL!!!");

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// Dificultad:  🟢

// console.log("Suma de 3+5 es igual a", 3+5);

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