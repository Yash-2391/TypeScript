// DECORATERS : allows us to modify the code and return the same code
// decorators are written as function and will accept a class
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MenuItem(item1) {
    return function (target) {
        target.prototype.item = item1;
    };
}
var a = /** @class */ (function () {
    function a() {
    }
    a = __decorate([
        MenuItem("yash")
    ], a);
    return a;
}());
var b = /** @class */ (function () {
    function b() {
    }
    b = __decorate([
        MenuItem(10)
    ], b);
    return b;
}());
console.log(new a().item);
console.log(new b().item);
