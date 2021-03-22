// Generated by purs version 0.13.8
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Show = require("../Data.Show/index.js");
var Huffman_Symbol = require("../Huffman.Symbol/index.js");
var Test_Assert = require("../Test.Assert/index.js");
var testSymbol = Test_Assert.assertEqual(Data_Eq.eqString)(Data_Show.showString)({
    actual: Data_Show.show(Huffman_Symbol.showSymbol)("a"),
    expected: "a"
});
module.exports = {
    testSymbol: testSymbol
};