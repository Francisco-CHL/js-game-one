// Desafíos 4 (Listas)

/**
 * 1. Crea una lista vacía llamada "listaGenerica".
 */
let listaGenerica = [];

/**
 * 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion
 * con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
 */
let programmingLanguages = ["JavaScript", "C", "C++", "Kotlin", "Python"];

/**
 * 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
 */
programmingLanguages.push("Java", "Ruby", "GoLang");

/**
 * 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
 */
// printList();
function printList() {
  console.log(programmingLanguages);
}

/**
 * 5. Crea una función que muestre en la consola todos los elementos de la lista
 *  "lenguagesDeProgramacion en orden inverso.
 */
// prinReversedtList();
function prinReversedtList() {
  console.log(programmingLanguages.reverse());
}
/**
 * 6. Crea una función que calcule el promedio de los elementos en una lista de números.
 */
let numbers = [4, 5, 7, 5];
// console.log(promFromList(numbers));
function promFromList(list) {
  let sum = 0;
  let length = list.length;
  for (let index = 0; index < length; index++) {
    sum += list[index];
  }
  return sum / length;
}

/**
 * 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
 */
// minAndMaxNumbers();
function minAndMaxNumbers() {
  let list = [2, 4, 5, 1, 6, 10];
  // Utilizando Math min y max
  console.log(`El número más grande es ${Math.max(...list)} y el número más pequeño en una lista es ${Math.min(...list)}`);

  // De forma manual
  let min = 0;
  let max = 0;

  for (let index = 0; index < list.length; index++) {
    if (min > list[index] || min == 0) {
      min = list[index];
    }
    if (list[index] > max) {
      max = list[index];
    }
  }
  console.log(`El número más grande es ${max} y el número más pequeño en una lista es ${min}`);
}

/**
 * 8. Crea una función que devuelva la suma de todos los elementos en una lista.
 */
// console.log(sumOfList(numbers));
function sumOfList(list) {
  let sum = 0;
  list.forEach((number) => {
    sum += number;
  });
  return `La suma de todos los elementos es: ${sum}`;
}

/**
 * 9. Crea una función que devuelva la posición en la lista donde se encuentra un
 * elemento pasado como parámetro, o -1 si no existe en la lista.
 */
// console.log(findElement(10, numbers));
// console.log(findElement(7, numbers));
function findElement(element, list) {
  return list.indexOf(element) ?? -1;
}

/**
 * 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista
 * con la suma de los elementos uno a uno.
 */
let list1 = [7, 4, 3, 5, 2, 8, 9];
let list2 = [3, 6, 7, 5, 8, 2, 1];
let newList = [];
// console.log(sumOfPairedElementsFromTwoLists(list1, list2));
function sumOfPairedElementsFromTwoLists(list1, list2) {
  let length = list1.length; // Puede tomarse el total de elementos de cualquiera de las dos listas, ya que el enunciado dice que deben ser del mismo tamaño.
  let sum = 0;
  for (let index = 0; index < length; index++) {
    newList.push(list1[index] + list2[index]);
  }
  return newList;
}

/**
 * 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */
// console.log(returnSquareNumsList(numbers));
function returnSquareNumsList(list) {
  let newSquareList = [];
  list.forEach((number) => {
    newSquareList.push(Math.pow(number, 2));
  });
  return newSquareList;
}
