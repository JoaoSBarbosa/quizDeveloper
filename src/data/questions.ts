import { Question } from "@/types/Question";

export const questions: Question[] = [
  {
    question:
      "Qual é a maneira correta de selecionar um elemento do HTML em JavaScript?",
    options: [
      "querySelector()",
      "console.log()",
      "alert()",
      "getElementByHtml()",
    ],
    answer: 0,
  },
  {
    question:
      "Qual das seguintes opções é uma característica fundamental do JavaScript?",
    options: [
      "Possui tipagem estática.",
      "É um banco de dados relacional.",
      "É uma linguagem de programação orientada a objetos.",
      "Utiliza a sintaxe de tags para marcar elementos HTML.",
    ],
    answer: 2,
  },
  {
    question:
      "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    options: ["pop()", "shift()", "unshift()", "push()"],
    answer: 3,
  },
  {
    question:
      "Qual das seguintes opções é uma forma correta de escrever um comentário em JavaScript?",
    options: [
      "** Este é um comentário **",
      "<!-- Este é um comentário -->",
      "// Este é um comentário",
      "/* Este é um comentário */",
    ],
    answer: 2,
  },
  {
    question:
      "Qual das seguintes opções é uma função incorporada do JavaScript que converte uma string em um número inteiro?",
    options: ["number()", "parseFloat()", " toInteger()", "parseInt()"],
    answer: 3,
  },
  {
    question:
      "No React, qual é a forma correta de passar dados de um componente pai para um componente filho?",
    options: [
      "Através de props",
      "Através do state",
      "Através de métodos de ciclo de vida",
      "Através de Redux",
    ],
    answer: 0,
  },
  {
    question:
      "Qual dos seguintes operadores é usado para verificar a igualdade estrita em JavaScript?",
    options: ["==", "===", "!=", "!=="],
    answer: 1,
  },
  {
    question:
      "Qual das seguintes opções é um elemento HTML para criar uma lista não ordenada?",
    options: ["<ul>", "<ol>", "<li>", "<div>"],
    answer: 0,
  },
  {
    question:
      "Qual das seguintes propriedades CSS é usada para definir a cor do texto?",
    options: ["font-size", "text-align", "background-color", "color"],
    answer: 3,
  },
  {
    question:
      "Qual das seguintes propriedades CSS é usada para definir a largura de um elemento?",
    options: ["height", "width", "border", "display"],
    answer: 1,
  },
  {
    question:
      "Qual é o hook do React usado para gerenciar o estado em um componente funcional?",
    options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
    answer: 0,
  },
  {
    question: "Qual elemento HTML é usado para criar um link clicável?",
    options: ["<a>", "<div>", "<p>", "<span>"],
    answer: 0,
  },

  {
    question:
      "Qual propriedade CSS é usada para definir o espaçamento interno de um elemento?",
    options: ["margin", "padding", "border", "width"],
    answer: 1,
  },

  {
    question:
      "Qual evento JavaScript é acionado quando o usuário clica em um elemento?",
    options: ["click", "hover", "keydown", "scroll"],
    answer: 0,
  },

  {
    question: "Qual elemento HTML é usado para criar uma tabela?",
    options: ["<table>", "<div>", "<ul>", "<form>"],
    answer: 0,
  },

  {
    question:
      "Qual seletor CSS é usado para selecionar elementos por sua classe?",
    options: ["#", ".", "*", "!important"],
    answer: 1,
  },
  {
    question: "Qual é o conceito central do React para reutilização de código?",
    options: ["Props", "State", "Components", "Hooks"],
    answer: 2,
  },

  {
    question:
      "No Tailwind CSS, qual é a classe utilizada para definir a cor de fundo de um elemento?",
    options: [".bg-color", ".background-color", ".bg", ".bg-fill"],
    answer: 2,
  },
  {
    question:
      "Qual é a classe no Tailwind CSS usada para definir uma margem interna em todos os lados de um elemento?",
    options: [".m-all", ".margin", ".p-4", ".p-all"],
    answer: 0,
  },
  {
    question:
      "No Git, qual comando é usado para enviar as alterações confirmadas para o repositório remoto?",
    options: ["git push", "git commit", "git clone", "git merge"],
    answer: 0,
  },
];
