const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Checando se o tipo da constante que recebe a função "productDetails" é uma função de fato.

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true);
  // O comando array.isArray retorna true caso o objeto seja uma array, e false se não é. Facilitando o código e economizando linhas para fazer este único teste https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toEqual(2);
    //Testando o tamanho da função (que a gente confirmou que é uma função acima) pra ver se ela possui 2 itens dentro do array que é retornado 

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()[0] && typeof productDetails()[1]).toBe('object');
    // Verifico o tipo do primeiro e segundo índice da função e se o tipo deles é um objeto. (verificando dentro do array retornado)

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails()[0] !== productDetails()[1]).toBe(true);
    // Aqui faço uma comparação entre os dois parâmetros da função, porque caso eles sejam diferentes vão retornar objetos diferentes.

    // Teste se os dois productIds terminam com 123.
    expect(productDetails('produtoA', 'produtoB')[0].details.productId).toBe('produtoA123');
    expect(productDetails('produtoA', 'produtoB')[1].details.productId).toBe('produtoB123');
    //Aqui eu checo o primeiro objeto gerado da função para verificar se tem o productId com os caracteres finais '123', e depois checo a mesma coisa no segundo objeto gerado(ou segundo indice). 
    // A string do productId recebe o nome do produto e concatena com os caracteres '123'. Seja qual for essa string (Que é o produto)
    // Para acessar o productId, eu precisei acessar primeiramente a chave 'details' e depois o productId, pois ele é um objeto dentro do details (ou seja, um objeto dentro de um objeto)
  });
});
