// Desafíos 3 (Reiniciando el juego)

/**
 * 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir
 *  de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
 */
// console.log(imcCalculator(80, 1.5));
function imcCalculator(weight, height) {
  return weight / Math.pow(height, 2);
}

/**
 * 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
 */
// console.log(factorial(5));
function factorial(number) {
  let factorial = number;
  for (let i = number - 1; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

/**
 * 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor
 *  equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
 *  Para esto, considera la cotización del dólar igual a R$4,80.
 */
// console.log(usdToReal(9));
function usdToReal(amount) {
  return amount * 4.8;
}

/**
 * 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
 * utilizando la altura y la anchura que se proporcionarán como parámetros.
 */
// areaAndPerimeterRectangle(18, 12);
function areaAndPerimeterRectangle(length, width) {
  console.log(`El área de la sala es ${width * length}m2 y su perímetro es ${width * 2 + length * 2}m`);
}

/**
 * 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
 *   utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
 */
// areaAndPerimeterCircle(3);
function areaAndPerimeterCircle(radius) {
  const PI = 3.14;
  console.log(`El área del círculo es ${PI * Math.pow(radius, 2)}m2 y su perímetro es ${2 * PI * radius}m`);
}

/**
 * 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. ¿¿¿¿HASTA QUE NÚMERO?????
 */
// numberMultiplicationTable(10);
function numberMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`|   ${i} x ${number}   |   ${i * number} |`);
  }
}
