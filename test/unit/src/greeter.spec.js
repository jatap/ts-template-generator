import { expect } from "chai"
import Greeter from "../../../src/greeter"

import debug from "debug"
const logger = debug("test")

describe("Greeter", () => {
  const greeter = new Greeter()

  it("exists", () => {
    expect(greeter).to.be.an("object")
  })

  it("accepts a user argument", () => {
    const greeter = new Greeter("John Doe")

    expect(greeter.user).to.be.eql("John Doe")
  })

  context("#greet", () => {
    it("returns Hello plus the user", () => {
      expect(greeter.greet()).to.be.eql("Hello Julio")
    })
  })

  context("debug", () => {
    it("prints to the STDERR", () => {
      logger(greeter)
      logger(greeter.greet())
    })
  })
})
