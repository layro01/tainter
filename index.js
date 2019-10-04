const IAST = require('./iast-sdk');

// Mock an HTTP request object.
const requestMock = new Object();
requestMock.query = new Object();
requestMock.query.param1 = IAST.taintObject('1'); // This would be tainted in the real application

// const taintedRequestMock = IAST.taintObject(request);

const value1 = eval(requestMock.query.param1);

console.log(value1);
