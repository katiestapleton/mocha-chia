const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('app', function(){
    it('sayHello should return hello', function(){
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    })

    it('add numbers should be above k', function(){
        let result = addNumbers(5,5);
        assert.isAbove(result, 5);
    })

    it('sayNumbers should return type string', function(){
        let result = addNumbers();
        assert.typeOf(result, 'number');
    })

});