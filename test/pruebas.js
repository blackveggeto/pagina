var chai = require("chai");
var assert = chai.assert;
var calculadora = require ("../src/calculadora");


describe("prueba unitaria: ", function(){
    describe("verificando funcion suma", function(){
        it("verificando valor de retorno: assert.equal(val,val):", function(){
            var resutl = calculadora.sumar(1,1);
            assert.equal(resutl,2);
        });
    });
});