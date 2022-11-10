"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Triangle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.getName = function () {
        return this.name;
    };
    Shape.prototype.setName = function (value) {
        this.name = value;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (value) {
        this.color = value;
    };
    return Shape;
}());
exports.Shape = Shape;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, size1, size2, size3) {
        var _this = _super.call(this, name, color) || this;
        _this.size1 = size1;
        _this.size2 = size2;
        _this.size3 = size3;
        return _this;
    }
    Triangle.prototype.getSize1 = function () {
        return this.size1;
    };
    Triangle.prototype.setSize1 = function (value) {
        this.size1 = value;
    };
    Triangle.prototype.getSize2 = function () {
        return this.size2;
    };
    Triangle.prototype.setSize2 = function (value) {
        this.size2 = value;
    };
    Triangle.prototype.getSize3 = function () {
        return this.size3;
    };
    Triangle.prototype.setSize3 = function (value) {
        this.size3 = value;
    };
    Triangle.prototype.getArea = function () {
        var p = (this.size1 + this.size2 + this.size3) / 2;
        var h = 2 * Math.sqrt(p * (p - this.size1) * (p - this.size2) * (p - this.size3)) / 2;
        return (this.size1 * h) / 2;
    };
    Triangle.prototype.getPerimeter = function () {
        return (this.size1 + this.size2 + this.size3);
    };
    return Triangle;
}(Shape));
exports.Triangle = Triangle;
var myTriangle = new Triangle('my Triangle', 'violet', 4, 5, 6);
console.log(myTriangle);
console.log(myTriangle.getArea());
console.log(myTriangle.getPerimeter());
