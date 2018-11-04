import chai from "chai"
import sinon from "sinon"
import sinonChai from "sinon-chai"
import debug from "debug"

const expect = chai.expect
chai.use(sinonChai)

process.env.NODE_ENV = "test"

beforeEach(() => {
  if (sinon == null) {
    sinon = sinon.sandbox.create()
  } else {
    sinon.restore()
  }
})

global.expect = expect
global.sinon = sinon
global.logger = debug(process.env.NODE_ENV)
