"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.demo2 = void 0;
var demo4_js_1 = require("./demo4.js");
var demo4_js_2 = require("./demo4.js");
var demo4_js_3 = require("./demo4.js");
var demo4_js_4 = require("./demo4.js");
var demo2 = /** @class */ (function () {
    function demo2() {
    }
    demo2.prototype.printArray = function () {
        return demo4_js_1.a1;
    };
    demo2.prototype.addElement = function (a) {
        demo4_js_1.a1.push(a);
        return demo4_js_1.a1;
    };
    demo2.prototype.deleteElement = function () {
        demo4_js_1.a1.pop();
        return demo4_js_1.a1;
    };
    demo2.prototype.foreach = function () {
        demo4_js_1.a1.forEach(function (element) {
            console.log(element + " ");
        });
    };
    demo2.prototype.mapArray = function () {
        //the map function modifies the array with given function and stores it in new variable array..
        //it must return a value it is compulsury
        var a1Map = demo4_js_1.a1.map(function (element) {
            return element + 10;
        });
        console.log("a1 Array is " + demo4_js_1.a1);
        console.log("new mapped array with modification is " + a1Map);
    };
    demo2.prototype.filterArray = function () {
        var a1Filter = demo4_js_1.a1.filter(function (element) {
            return element % 2 == 0;
        });
        console.log("a1 is " + demo4_js_1.a1);
        console.log("a1 Filter is " + a1Filter);
    };
    demo2.prototype.someAndEvery = function () {
        //every returns TRUE if all elements satisfies the condition else FALSE
        var a1Every = demo4_js_1.a1.every(function (element) {
            return element > 5;
        });
        //some returns true even if one element satisfies the condition..
        var a1Some = demo4_js_1.a1.some(function (element) {
            return element > 5;
        });
        console.log("a1 is " + demo4_js_1.a1);
        console.log("Every : " + a1Every);
        console.log("Some : " + a1Some);
    };
    demo2.prototype.sortArray = function () {
        //sort function works well with string array but not with number array because JS turns the number array to string and solvess it in alphabetical order...
        //so for sorting number we take the compare function and the compare two adjacent elements and sort them
        //let say a and b are elements if (a-b > 0) b is smaller then a and vice versa... for ASCENDING
        //for DECSENDING do b-a...
        demo4_js_2.a2.sort();
        demo4_js_1.a1.sort(function (a, b) {
            return a - b;
        });
        console.log("a2 is " + demo4_js_2.a2);
        console.log("a1 is " + demo4_js_1.a1);
        //sort an array of objects according to name and balance
        //Ascending sort WRT name
        demo4_js_3.a3.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        demo4_js_3.a3.forEach(function (element) {
            console.log(element.name + " " + element.bal);
        });
        //decending sort WRT balance
        demo4_js_3.a3.sort(function (a, b) {
            return b.bal - a.bal;
        });
        demo4_js_3.a3.forEach(function (element) {
            console.log(element.name + " " + element.bal);
        });
    };
    demo2.prototype.spreadOperatorArray = function () {
        //copy a1 in a1Spread
        var a1Spread = __spreadArray([], demo4_js_1.a1, true);
        console.log(a1Spread);
        //string to array
        var sentenceArray = demo4_js_4.sentence.split("");
        console.log(sentenceArray);
        //merge two arrays
        var mergeArray = __spreadArray(__spreadArray([], demo4_js_1.a1, true), demo4_js_2.a2, true);
        console.log(mergeArray);
    };
    //find function needs the ES6 platform to be changed in tsconfig.json.....
    // findArray(){
    //     const search = a1.find(function(element){
    //         return(element>24);
    //     });
    //     console.log("Search element is "+search);
    // }
    demo2.prototype.xyz = function () {
        return "function executed";
    };
    return demo2;
}());
exports.demo2 = demo2;
