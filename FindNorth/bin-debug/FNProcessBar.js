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
var FNProcessBar = (function (_super) {
    __extends(FNProcessBar, _super);
    function FNProcessBar() {
        var _this = _super.call(this) || this;
        _this.currentIndex = 240;
        _this.timeArr = [240, 200, 170, 140, 120, 100, 90, 80, 60, 50];
        _this.currentLevel = 0;
        _this.createView();
        return _this;
    }
    FNProcessBar.prototype.createView = function () {
        this.currentIndex = this.timeArr[this.currentLevel];
        if (!this.grayBitmap) {
            this.grayBitmap = new egret.Bitmap();
            var texture = RES.getRes("gray_progress_png");
            this.grayBitmap.texture = texture;
            this.addChild(this.grayBitmap);
        }
        if (!this.blueBitmap) {
            this.blueBitmap = new egret.Bitmap();
            var texture = RES.getRes("blue_progress_png");
            this.blueBitmap.texture = texture;
            this.addChild(this.blueBitmap);
            this.blueBitmap.x = (this.grayBitmap.width - this.blueBitmap.width) * 0.5;
            this.blueBitmap.y = (this.grayBitmap.height - this.blueBitmap.height) * 0.5;
            this.maskBitmap = new egret.Bitmap();
            this.maskBitmap.texture = texture;
            this.addChild(this.maskBitmap);
            this.maskBitmap.x = (this.grayBitmap.width - this.maskBitmap.width) * 0.5;
            this.maskBitmap.y = (this.grayBitmap.height - this.maskBitmap.height) * 0.5;
            this.blueBitmap.mask = this.maskBitmap;
        }
        if (!this.lightBitmap) {
            this.lightBitmap = new egret.Bitmap();
            var texture = RES.getRes("light_png");
            this.lightBitmap.texture = texture;
            this.addChild(this.lightBitmap);
            this.lightBitmap.x = 25;
            this.lightBitmap.y = 15;
        }
    };
    FNProcessBar.prototype.resetProcess = function () {
        if (Utils.getInstance().totalScore < 10) {
            this.currentLevel = 0;
        }
        else if (Utils.getInstance().totalScore < 20) {
            this.currentLevel = 1;
        }
        else if (Utils.getInstance().totalScore < 30) {
            this.currentLevel = 2;
        }
        else if (Utils.getInstance().totalScore < 40) {
            this.currentLevel = 3;
        }
        else if (Utils.getInstance().totalScore < 50) {
            this.currentLevel = 4;
        }
        else if (Utils.getInstance().totalScore < 60) {
            this.currentLevel = 5;
        }
        else if (Utils.getInstance().totalScore < 70) {
            this.currentLevel = 6;
        }
        else if (Utils.getInstance().totalScore < 80) {
            this.currentLevel = 7;
        }
        else if (Utils.getInstance().totalScore < 90) {
            this.currentLevel = 8;
        }
        else if (Utils.getInstance().totalScore < 100) {
            this.currentLevel = 9;
        }
        this.currentIndex = this.timeArr[this.currentLevel];
    };
    FNProcessBar.prototype.onProgress = function () {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.maskBitmap.width = this.blueBitmap.width * this.currentIndex / this.timeArr[this.currentLevel];
        }
        else {
            var overEvent = egret.Event.create(GameEvent, GameEvent.OverEvent);
            this.dispatchEvent(overEvent);
        }
    };
    return FNProcessBar;
}(egret.Sprite));
__reflect(FNProcessBar.prototype, "FNProcessBar");
//# sourceMappingURL=FNProcessBar.js.map