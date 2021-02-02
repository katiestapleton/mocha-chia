const assert = require('chai').assert;
const app = require('../app');

describe('app', function(){
    it('app should return hello', function(){
        assert.equal(app(), 'hello');
    });
});