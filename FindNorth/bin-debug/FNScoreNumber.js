var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FNScoreNumber = (function (_super) {
    __extends(FNScoreNumber, _super);
    function FNScoreNumber() {
        var _this = _super.call(this) || this;
        _this.setNumber(0);
        return _this;
    }
    FNScoreNumber.prototype.setNumber = function (count) {
        this.removeChildren();
        var countStr = String(count);
        var len = countStr.length;
        for (var i = 0; i < len; i++) {
            var num = new egret.Bitmap();
            var numStr = countStr.charAt(i);
            var texture = RES.getRes(numStr + "_png");
            num.texture = texture;
            this.addChild(num);
            num.x = (num.width + 10) * i;
        }
    };
    return FNScoreNumber;
}(egret.Sprite));
__reflect(FNScoreNumber.prototype, "FNScoreNumber");
//# sourceMappingURL=FNScoreNumber.js.map