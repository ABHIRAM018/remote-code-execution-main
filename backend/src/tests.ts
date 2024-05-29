export default {
  add: [
    { addLine: "console.log(add(2, 3))", result: 5 },
    {
      addLine: "console.log(add(3, 3))",
      result: 6,
    },
  ],
  factorial: [
    { addLine: "console.log(factorial(2))", result: 2 },
    { addLine: "console.log(factorial(3))", result: 6 },
    { addLine: "console.log(factorial(5))", result: 120 },
  ],
  multiply: [
    { addLine: "console.log(multiply(2, 3))", result: 6 },
    { addLine: "console.log(multiply(4, 5))", result: 20 },
    { addLine: "console.log(multiply(6, 7))", result: 42 },
  ],
} as any;
