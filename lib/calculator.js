class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum() {
    return this.x + this.y;
  }
  sub() {
    return this.x - this.y;
  }
  mult() {
    return this.x * this.y;
  }
  div() {
    return (this.y === 0) ? "division by zero" : this.x / this.y;
  }
}

export default Calculator;
