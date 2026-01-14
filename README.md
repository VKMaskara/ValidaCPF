🛡️ Validador de CPF em JavaScript
Este projeto é uma ferramenta robusta para validação de CPFs brasileiros, desenvolvida para fins de estudo aprofundado em JavaScript Vanilla. O objetivo principal foi aplicar conceitos de Programação Orientada a Objetos (POO) e manipulação de cadeias de protótipos.

🚀 Tecnologias e Conceitos Aplicados
Funções Construtoras: Estruturação de objetos via Constructor Functions.

Prototypes: Otimização de memória movendo métodos para o protótipo do objeto.

Encapsulamento com Object.defineProperty: Uso de Getters para garantir que o CPF seja limpo automaticamente ao ser acessado.

Lógica Algorítmica: Implementação do cálculo oficial da Receita Federal para os dígitos verificadores.

High Order Functions: Uso de .reduce() para o processamento matemático do CPF.

🧮 A Lógica de Validação
O validador segue o algoritmo oficial de dois passos:

Primeiro Dígito: Multiplica-se os 9 primeiros dígitos por uma contagem regressiva de 10 a 2. O resto da divisão do total por 11 define o dígito.

Segundo Dígito: Repete-se o processo incluindo o primeiro dígito verificado, com contagem regressiva de 11 a 2.

// Importe ou copie o código da classe
const cpf = new ValidaCPF('705.484.450-52');

if (cpf.valida()) {
    console.log('CPF válido!');
} else {
    console.log('CPF inválido!');
}


🛠️ Estrutura do Código
O projeto foi organizado para garantir que cada método tenha uma única responsabilidade:

Método,Função
cpfLimpo (Getter),Remove pontos e traços usando Regex.
isSequencia(),Bloqueia CPFs de números repetidos (ex: 111.111.111-11).
criaDigito(),Realiza o cálculo matemático regressivo.
valida(),Orquestra a comparação entre o CPF enviado e o calculado.


📝 Aprendizados obtidos
Durante o desenvolvimento, aprimorei o entendimento sobre a Prototype Chain do JavaScript, compreendendo como o motor do JS busca métodos no objeto pai quando não os encontra na instância. Também foi crucial entender a diferença comportamental entre funções de seta (arrow functions) e funções tradicionais no contexto do this.
