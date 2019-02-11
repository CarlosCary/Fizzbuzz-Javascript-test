var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
// import { Fizzbuzz } from '../fizzbuzz.js';

describe('Cadenas devueltas por la funcion fizzbuzz', function(){
    
    let fizzbuzz;
    beforeEach(function() {
        fizzbuzz = require('../fizzbuzz.js');
    });

    it('El numero 3 como parametro deberia devolver Fizz', function(){
        assert.equal(fizzbuzz(3), "Fizz");
    });
    
    it('El numero 5 como parametro deberia devolver Buzz', function(){
        assert.equal(fizzbuzz(5), "Buzz");
    });

    it('El numero 15 como parametro deberia devolver FizzBuzz', function(){
        assert.equal(fizzbuzz(15), "FizzBuzz");
    });

});