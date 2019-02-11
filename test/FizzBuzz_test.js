var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
// import { Fizzbuzz } from '../fizzbuzz.js';

describe('Cadenas devueltas por la funcion fizzbuzz', function(){
    
    let fizzbuzz;
    beforeEach(function() {
        fizzbuzz = require('../fizzbuzz.js');
    });

    it('Deberia devolver Fizz', function(){
        assert.equal(fizzbuzz(3), "Fizz");
    });
    
    it('Deberia devolver Buzz', function(){
        assert.equal(fizzbuzz(5), "Buzz");
    });

   
});