const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

describe('app', function(){
    it('sayHello should return hello', function(){
        let result = app.appsayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    })

    it('add numbers should be above k', function(){
        let result = app.addNumbers(5,5);
        assert.isAbove(result, 5);
    })

    it('sayNumbers should return type string', function(){
        let result = app.addNumbers();
        assert.typeOf(result, 'number');
    })

});