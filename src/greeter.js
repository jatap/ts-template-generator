class Greeter {
  constructor(user = "Julio") {
    this.user = user
  }

  greet() {
    return `Hello ${this.user}`
  }
}

export default Greeter
