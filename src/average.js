  const average = (array) => {
    let resultado = 0;
// Primeiramente, caso NÃO tenha elementos nesse meu array, não tem como verificar os elementos. Então já vou fazer uma condição de que se o tamanho for zero também vai me retornar undefined.
    if (array.length === 0) return undefined;
      // lembrar de perguntar porque não funcionou for/of nessa estrutura abaixo
    for (let index = 0; index < array.length; index += 1) {
      if (typeof array[index] !== 'number') {
        return undefined;
      }
      // a cada soma de um indice ele acrescenta ao resultado e faz novamente a soma do próximo indice até seu último.
      resultado += array[index];
      }
      // retorno o resultado total dividido pelo tamanho do seu array (é agora onde faço a média do resultado).depois de tentar muitas vezes utilizar o math.Floor como de costume achando que esse número retornaria o inteiro tive que pesquisar sobre Math.round que faz com que ele retorne o número MAIS próximo de um valor quebrado. https://cursos.alura.com.br/forum/topico-math-floor-ou-math-round-145364
      return Math.round(resultado / array.length);
  };
// socorro deus
  module.exports = average;