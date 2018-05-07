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
var StartView = (function (_super) {
    __extends(StartView, _super);
    function StartView() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    StartView.prototype.createView = function () {
        this.startBG = Utils.createBitmapByName("startbg_png");
        this.addChild(this.startBG);
        this.startName = Utils.createBitmapByName("gamename_png");
        this.addChild(this.startName);
        this.startName.x = (Utils.getInstance().StageWidth - this.startName.width) * 0.5;
        this.startName.y = 330;
        this.startBtn = Utils.createBitmapByName("start_png");
        this.addChild(this.startBtn);
        this.startBtn.x = (Utils.getInstance().StageWidth - this.startBtn.width) * 0.5;
        this.startBtn.y = 902;
        this.rankBtn = Utils.createBitmapByName("rank_png");
        this.addChild(this.rankBtn);
        this.rankBtn.x = (Utils.getInstance().StageWidth - this.rankBtn.width) * 0.5;
        this.rankBtn.y = Utils.getInstance().StageHeight - this.rankBtn.height - 35;
        this.startBtn.touchEnabled = true;
        this.rankBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRank, this);
    };
    StartView.prototype.startGame = function (evt) {
        var overEvent = egret.Event.create(GameEvent, GameEvent.StartEvent);
        this.dispatchEvent(overEvent);
        this.parent.removeChild(this);
    };
    StartView.prototype.onRank = function (evt) {
        var overEvent = egret.Event.create(GameEvent, GameEvent.RankEvent);
        this.dispatchEvent(overEvent);
    };
    return StartView;
}(egret.Sprite));
__reflect(StartView.prototype, "StartView");
//# sourceMappingURL=StartView.js.map