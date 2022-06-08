/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('x')).toEqual(undefined);
    //Este espera que o circulo que recebe um parâmetro que NÃO é número retorne 'undefined' (poderia ser qualquer caractere dentro de um string no caso acima)

    // Teste se circle retorna um objeto.
    expect(typeof circle(5)).toEqual('object');
    //Testa que um círculo com qualquer parâmetro raio que é um número retorne um objeto(por isso mencionei o tipo(typeof) do circulo antes para comparar o retorno a um objeto)

    // Teste se o objeto retornado possui 3 propriedades.
    expect(Object.keys(circle(5)).length).toEqual(3);
    //Espera que o número de chaves de um círculo com o parâmetro que é um número, seja igual a 3. 

    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle(undefined)).toEqual(undefined);
    //Espera que se o parâmetro não tiver nada, retorna undefined. 

    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    expect(circle(2).circumference).toEqual(12.56);
    // Espera que se o parâmetro do circulo for 2, como visto na função circle, ele irá multiplicar o valor de 2 * PI * radius(que vale 2), então calculei 2 x 3,14 x 2 que resultou em 12.56.
    
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    expect(circle(3).area).toBeCloseTo(28.26);
    // Foi a mesma coisa que o item acima, só que calculei a AREA que é PI * radius(valendo 3) * radius(valendo 3). Seguindo a terceira dica dada, encontrei um matcher chamado toBeCloseTo que faz com que defina a valores aproximados de tal valor (que no caso é 28.26) Fonte https://jestjs.io/pt-BR/docs/using-matchers 

    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)).toEqual({
      radius: 3, 
      area: 28.259999999999998,
      circumference: 18.84});
  });
    //Espera que se o raio do parâmetro for 3, o objeto retornado seja exatamente o que calculei de acordo com a função, portantoabaixo coloquei em forma de objeto, poderia ter colocado tudo inline que também funcionaria, mas para melhor entendimento organizei as propriedades em colunas.
});
