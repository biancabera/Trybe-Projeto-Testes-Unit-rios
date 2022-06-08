/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    // fail('Teste vazio!');
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true 
    expect(numbers([1, 2, 3, 4, 5])).toEqual(true);
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    expect(numbers([1, 'a', 3])).toEqual(false);
    // Escreva um teste em que a função recebe [' '] e retorna false
    expect(numbers([' '])).toEqual(false);
  });
});

// de acordo com o material do course utilizei o exemplo da aula "escrevendo testes" para realizar esse requisito, apenas alterando a constante para o da função numbers, o que a função recebe dentro, e o retorno de um valor boolean
// const sum = (a, b) => a + b;

// test('sums two values', () => {
//   expect(sum(2, 3)).toEqual(5);
// });