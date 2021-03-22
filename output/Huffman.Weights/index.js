// Generated by purs version 0.13.8
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Int = require("../Data.Int/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Huffman_Symbol = require("../Huffman.Symbol/index.js");
var Weights = function (x) {
    return x;
};
var showWeights = new Data_Show.Show(function (v) {
    return Data_Show.show(Data_Map_Internal.showMap(Huffman_Symbol.showSymbol)(Data_Show.showNumber))(v);
});
var fromOccurances = function (v) {
    var totalOccurances = Data_Foldable.sum(Data_List_Types.foldableList)(Data_Semiring.semiringInt)(Data_Map_Internal.values(v));
    var normalize = function (total) {
        return function (x) {
            return (1.0 / Data_Int.toNumber(total)) * x;
        };
    };
    return Weights(Data_Functor.map(Data_Map_Internal.functorMap)(Data_Functor.map(Data_Functor.functorFn)(normalize(totalOccurances))(Data_Int.toNumber))(v));
};
var eqWeights = new Data_Eq.Eq(function (v) {
    return function (v1) {
        return Data_Eq.eq(Data_Map_Internal.eqMap(Huffman_Symbol.eqSymbol)(Data_Eq.eqNumber))(v)(v1);
    };
});
module.exports = {
    Weights: Weights,
    fromOccurances: fromOccurances,
    eqWeights: eqWeights,
    showWeights: showWeights
};