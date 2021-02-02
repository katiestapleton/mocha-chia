const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

// results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('app', function(){
    //nesting
    describe('sayHello', function(){
        it('sayHello should return hello', function(){
            //let result = app.appsayHello();
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return type string', function(){
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        })
    });

    //nesting
    describe('addNumbers', function(){
        it('add numbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        })

        it('addNumbers should return type number', function(){
            //let result = app.addNumbers();
            assert.typeOf(addNumbersResult, 'number');
        })
    });

});