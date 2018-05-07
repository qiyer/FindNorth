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
var OverView = (function (_super) {
    __extends(OverView, _super);
    function OverView() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    OverView.prototype.createView = function () {
        this.guideBG = new egret.Shape();
        this.guideBG.graphics.beginFill(0x666666);
        this.guideBG.graphics.drawRect(0, 0, Utils.getInstance().StageWidth, Utils.getInstance().StageHeight);
        this.guideBG.graphics.endFill();
        this.guideBG.alpha = 0.7;
        this.addChild(this.guideBG);
        this.scoreTF = new egret.TextField();
        this.scoreTF.text = "本次得分";
        this.scoreTF.height = 60;
        this.scoreTF.width = 200;
        this.scoreTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.scoreTF);
        this.scoreTF.x = Utils.getInstance().StageWidth * 0.5 - 100;
        this.scoreTF.y = 160;
        this.shareBtn = Utils.createBitmapByName("share_png");
        this.addChild(this.shareBtn);
        this.shareBtn.x = (Utils.getInstance().StageWidth - this.shareBtn.width) * 0.5;
        this.shareBtn.y = 450;
        this.homeBtn = Utils.createBitmapByName("home_btn_png");
        this.addChild(this.homeBtn);
        this.homeBtn.x = 105;
        this.homeBtn.y = Utils.getInstance().StageHeight - 300;
        this.retryBtn = Utils.createBitmapByName("retry_png");
        this.addChild(this.retryBtn);
        this.retryBtn.x = Utils.getInstance().StageWidth - this.retryBtn.width - 101;
        this.retryBtn.y = Utils.getInstance().StageHeight - 310;
        this.fnScoreNum = new FNScoreNumber();
        this.addChild(this.fnScoreNum);
        this.fnScoreNum.colorGreen = true;
        this.fnScoreNum.setNumber(Utils.getInstance().totalScore);
        this.fnScoreNum.x = (Utils.getInstance().StageWidth - this.fnScoreNum.width) * 0.5;
        this.fnScoreNum.y = 250;
        this.shareBtn.touchEnabled = true;
        this.homeBtn.touchEnabled = true;
        this.retryBtn.touchEnabled = true;
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHome, this);
        this.retryBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRetry, this);
    };
    OverView.prototype.onShare = function (evt) {
        var overEvent = egret.Event.create(GameEvent, GameEvent.ShareEvent);
        this.dispatchEvent(overEvent);
    };
    OverView.prototype.onHome = function (evt) {
        this.parent.removeChild(this);
        var overEvent = egret.Event.create(GameEvent, GameEvent.HomeEvent);
        this.dispatchEvent(overEvent);
    };
    OverView.prototype.onRetry = function (evt) {
        this.parent.removeChild(this);
        var overEvent = egret.Event.create(GameEvent, GameEvent.RetryEvent);
        this.dispatchEvent(overEvent);
    };
    return OverView;
}(egret.Sprite));
__reflect(OverView.prototype, "OverView");
//# sourceMappingURL=OverView.js.map