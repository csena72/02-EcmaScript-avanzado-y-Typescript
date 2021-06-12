"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = void 0;
var Operacion_1 = require("./Operacion");
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(numero1, numero2) {
        var _this = _super.call(this) || this;
        _this.numero1 = numero1;
        _this.numero2 = numero2;
        return _this;
    }
    Suma.prototype.resultado = function () {
        return this.numero1 + this.numero2;
    };
    return Suma;
}(Operacion_1.Operacion));
exports.Suma = Suma;
