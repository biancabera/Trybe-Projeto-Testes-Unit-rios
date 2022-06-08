/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counterDois = 2; counterDois <= 3; counterDois += 1) {
      myArray.push(counterDois);
    }
  }
  return myArray;
};

module.exports = myCounter;
// A correção foi voltada para a substituição de var para let, sabendo que a utilização de var não é uma prática recomendada em nenhuma situação.  E a segunda foi mudar o nome da variável utilizada na segunda estrutura de repetição, esta estava repetida com a do primeiro laço, pois não é possível utilizar o mesmo nome de variável para 2 coisas diferentes dentro de uma função.