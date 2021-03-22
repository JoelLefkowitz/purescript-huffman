// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Show = require("../Data.Show/index.js");
var Effect = require("../Effect/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var assertThrows$prime = function (msg) {
    return function (fn) {
        return Control_Bind.bindFlipped(Effect.bindEffect)($foreign["assert'"](msg))($foreign.checkThrows(fn));
    };
};
var assertThrows = assertThrows$prime("Assertion failed: An error should have been thrown");
var assertEqual$prime = function (dictEq) {
    return function (dictShow) {
        return function (userMessage) {
            return function (v) {
                var result = Data_Eq.eq(dictEq)(v.actual)(v.expected);
                var message = (function () {
                    var $7 = userMessage === "";
                    if ($7) {
                        return "";
                    };
                    return userMessage + "\x0a";
                })() + ("Expected: " + (Data_Show.show(dictShow)(v.expected) + ("\x0aActual:   " + Data_Show.show(dictShow)(v.actual))));
                return function __do() {
                    Control_Applicative.unless(Effect.applicativeEffect)(result)(Effect_Console.error(message))();
                    return $foreign["assert'"](message)(result)();
                };
            };
        };
    };
};
var assertFalse$prime = function (message) {
    return function (actual) {
        return assertEqual$prime(Data_Eq.eqBoolean)(Data_Show.showBoolean)(message)({
            actual: actual,
            expected: false
        });
    };
};
var assertTrue$prime = function (message) {
    return function (actual) {
        return assertEqual$prime(Data_Eq.eqBoolean)(Data_Show.showBoolean)(message)({
            actual: actual,
            expected: true
        });
    };
};
var assertEqual = function (dictEq) {
    return function (dictShow) {
        return assertEqual$prime(dictEq)(dictShow)("");
    };
};
var assertFalse = function (actual) {
    return assertEqual(Data_Eq.eqBoolean)(Data_Show.showBoolean)({
        actual: actual,
        expected: false
    });
};
var assertTrue = function (actual) {
    return assertEqual(Data_Eq.eqBoolean)(Data_Show.showBoolean)({
        actual: actual,
        expected: true
    });
};
var assert = $foreign["assert'"]("Assertion failed");
module.exports = {
    assert: assert,
    assertEqual: assertEqual,
    "assertEqual'": assertEqual$prime,
    assertFalse: assertFalse,
    "assertFalse'": assertFalse$prime,
    assertThrows: assertThrows,
    "assertThrows'": assertThrows$prime,
    assertTrue: assertTrue,
    "assertTrue'": assertTrue$prime,
    "assert'": $foreign["assert'"]
};