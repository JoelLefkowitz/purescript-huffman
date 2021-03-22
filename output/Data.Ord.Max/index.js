// Generated by purs version 0.13.8
"use strict";
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Max = function (x) {
    return x;
};
var showMax = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Max " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupMax = function (dictOrd) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_Ord.max(dictOrd)(v)(v1);
        };
    });
};
var newtypeMax = new Data_Newtype.Newtype(function (n) {
    return n;
}, Max);
var monoidMax = function (dictBounded) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMax(dictBounded.Ord0());
    }, Data_Bounded.bottom(dictBounded));
};
var eqMax = function (dictEq) {
    return dictEq;
};
var ordMax = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqMax(dictOrd.Eq0());
    }, function (v) {
        return function (v1) {
            return Data_Ord.compare(dictOrd)(v)(v1);
        };
    });
};
module.exports = {
    Max: Max,
    newtypeMax: newtypeMax,
    eqMax: eqMax,
    ordMax: ordMax,
    semigroupMax: semigroupMax,
    monoidMax: monoidMax,
    showMax: showMax
};