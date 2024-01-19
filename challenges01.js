// Desafíos 2 (Funciones)
/**
 * 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
 */
// logHelloWorld();
function logHelloWorld() {
  console.log("¡Hola, mundo!");
}

/**
 * 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
 */
// logParamName("Fancisco");
function logParamName(name) {
  console.log(`¡Hola, ${name}!`);
}

/**
 * 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
 */
// console.log(returnNumberTimesTwo(6));
function returnNumberTimesTwo(number) {
  return number * 2;
}

/**
 * 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
 */
// console.log(returnPromOfThreeNumbers(4,6,7));
function returnPromOfThreeNumbers(number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}

/**
 * 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
 */
// console.log(returnBiggerNumber(10,11));
function returnBiggerNumber(number1, number2) {
  return Math.max(number1, number2);
}
/**
 * 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */
// console.log(returnMultiplyBySelf(10));
function returnMultiplyBySelf(number) {
  return number * number;
}
