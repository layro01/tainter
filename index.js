const IAST = require('./iast-sdk');

// Mock an HTTP request object.
const request = new Object();
request.query = new Object();
request.query.param1 = '1'; // This would be tainted in the real application

IAST.taintObject(request);

const value1 = eval(request.query.param1);

console.log(value1);
