/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

  const vqv = (nome, idade) => {
    // começo criando uma condição de que se esses parâmetro estiverem 'vazios' ele retornará undefined, dentro da condição tentei vários valores como 0, null, mas o undefined foi o único que acabou funcionando dentro da condição
    if (nome === undefined && idade === undefined) {
      return undefined;
    }
    // caso contrário ele retornará a frase como o requisito pede utilizando template literals sendo ${} concatenando os parâmetros da função dentro da frase.
    return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  };
module.exports = vqv;