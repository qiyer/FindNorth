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
var RankView = (function (_super) {
    __extends(RankView, _super);
    function RankView() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    RankView.prototype.createView = function () {
        this.bgBitmap = Utils.createBitmapByName("rankbg_png");
        this.addChild(this.bgBitmap);
        this.bgBitmap.x = (Utils.getInstance().StageWidth - this.bgBitmap.width) * 0.5;
        this.bgBitmap.y = 260;
        this.backBtn = Utils.createBitmapByName("back_png");
        this.addChild(this.backBtn);
        this.backBtn.x = (Utils.getInstance().StageWidth - this.backBtn.width) * 0.5;
        this.backBtn.y = Utils.getInstance().StageHeight - 100;
        this.backBtn.touchEnabled = true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
    };
    RankView.prototype.onBack = function (evt) {
        this.parent.removeChild(this);
    };
    return RankView;
}(egret.Sprite));
__reflect(RankView.prototype, "RankView");
//# sourceMappingURL=RankView.js.map