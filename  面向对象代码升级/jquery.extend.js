$.extend({
    inherit: function(SuperFunc, SubFunc) {
        SubFunc.prototype = new SuperFunc()
        SubFunc.prototype.constructor = SubFunc;
        SubFunc.prototype.super = SuperFunc;
    }
})