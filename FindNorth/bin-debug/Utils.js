var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Utils = (function () {
    function Utils() {
        this.StageWidth = 750;
        this.StageHeight = 1334;
        this.totalScore = 0;
    }
    Utils.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Utils();
        }
        return this.instance;
    };
    Utils.prototype.initStage = function (stageWidth, stageHeight) {
        this.StageHeight = stageHeight;
        this.StageWidth = stageWidth;
    };
    Utils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Utils.UIWidth = 750;
    Utils.UIHeight = 1334;
    return Utils;
}());
__reflect(Utils.prototype, "Utils");
//# sourceMappingURL=Utils.js.map