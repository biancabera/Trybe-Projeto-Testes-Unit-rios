/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

// const createStudent = () => {};

// module.exports = createStudent;
  const createStudent = (estudante) => ({ 
    name: estudante, 
    
    feedback: () => 'Eita pessoa boa!' }); 

  // Mas se o lint deixasse eu teria feito assim:
  // function feedbackEstudante() {
  //   return 'Eita pessoa boa!';
  // }
  // function createStudent(estudante) {
  //   return { name: estudante, feedback: feedbackEstudante() };
  // }

module.exports = createStudent;