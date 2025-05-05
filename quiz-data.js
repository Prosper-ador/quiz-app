const quizSets = {
    "Basics": [
      {
        question: "What is the output of typeof null?",
        options: ["object", "null", "undefined", "boolean"],
        answer: "object"
      },
      {
        question: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "const", "define"],
        answer: "let"
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "==", "===", ":"],
        answer: "="
      },
      {
        question: "What is the default value of an uninitialized variable?",
        options: ["null", "0", "undefined", "false"],
        answer: "undefined"
      },
      {
        question: "Which method converts JSON to a JavaScript object?",
        options: ["JSON.toObject()", "JSON.parse()", "JSON.stringify()", "JSON.convert()"],
        answer: "JSON.parse()"
      }
    ],
    "Functions & Scope": [
      {
        question: "What keyword is used to define a function in JavaScript?",
        options: ["func", "function", "define", "lambda"],
        answer: "function"
      },
      {
        question: "Which of the following is a correct arrow function?",
        options: ["x => x * 2", "x => { return x * 2 }", "(x) => x * 2", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Functions declared with 'var' are:",
        options: ["Block-scoped", "Hoisted", "Immutable", "Lexically scoped"],
        answer: "Hoisted"
      },
      {
        question: "What is a closure?",
        options: [
          "A function with no parameters",
          "A function that references variables from outside its body",
          "A variable defined in a loop",
          "A function only used once"
        ],
        answer: "A function that references variables from outside its body"
      },
      {
        question: "What will `typeof function() {}` return?",
        options: ["function", "object", "undefined", "string"],
        answer: "function"
      }
    ],
    "Advanced JS": [
      {
        question: "Which of the following is NOT a primitive type?",
        options: ["Symbol", "Object", "Number", "Boolean"],
        answer: "Object"
      },
      {
        question: "What does `this` refer to in a regular function?",
        options: [
          "The function itself",
          "The global object or object calling it",
          "Always the global object",
          "It depends on strict mode"
        ],
        answer: "The global object or object calling it"
      },
      {
        question: "What is event bubbling?",
        options: [
          "An event propagating from target to root",
          "An error handling mechanism",
          "Event stopping at its origin",
          "None of the above"
        ],
        answer: "An event propagating from target to root"
      },
      {
        question: "Which method is used to stop event propagation?",
        options: ["event.stop()", "event.stopPropagation()", "event.halt()", "event.break()"],
        answer: "event.stopPropagation()"
      },
      {
        question: "What is a promise in JS?",
        options: [
          "A callback wrapper",
          "An object representing eventual completion/failure of async operation",
          "A way to pause execution",
          "A deprecated feature"
        ],
        answer: "An object representing eventual completion/failure of async operation"
      }
    ]
  };
  