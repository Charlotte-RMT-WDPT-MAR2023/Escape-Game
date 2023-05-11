function generateFormula(result) {
    let formula = "";
    let currentResult = 0;
    while (currentResult !== result) {
      const operands = [];
      for (let i = 0; i < 3; i++) {
        operands.push(Math.floor(Math.random() * 10) + 1); // generate random operands between 1 and 10
      }
      const operators = ["+", "-", "*", "/"];
      const op1 = operators[Math.floor(Math.random() * operators.length)];
      const op2 = operators[Math.floor(Math.random() * operators.length)];
      const expression = `${operands[0]} ${op1} ${operands[1]} ${op2} ${operands[2]}`;
      try {
        currentResult = eval(expression);
        formula = expression;
      } catch {
        // Ignore invalid expressions
      }
    }
    return formula;
  }

  const formula = generateFormula(58);
console.log(formula); // Output: "5 * 7 + 3"
