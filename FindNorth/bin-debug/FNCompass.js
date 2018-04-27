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
var FNCompass = (function (_super) {
    __extends(FNCompass, _super);
    function FNCompass() {
        var _this = _super.call(this) || this;
        _this.bigDegree = 0;
        _this.littleDegree = 0;
        _this.standardLimit = Math.PI * 1.5;
        _this.bigSpeed = 1;
        _this.littleSpeed = 4;
        _this.createView();
        return _this;
    }
    FNCompass.prototype.createView = function () {
        this.randomBound();
        if (!this.bigShadow) {
            this.bigShadow = new egret.Bitmap();
            var texture = RES.getRes("big_compass_shadow_png");
            this.bigShadow.texture = texture;
            this.addChild(this.bigShadow);
            this.bigShadow.y = 25;
        }
        if (!this.bigCPBitmap) {
            this.bigCPBitmap = new egret.Bitmap();
            var texture = RES.getRes("big_compass_png");
            this.bigCPBitmap.texture = texture;
        }
        var r = this.bigCPBitmap.width * 0.5;
        if (!this.bigSector) {
            this.bigSector = new egret.Shape();
            this.bigSector.graphics.beginFill(0xFF7F50, 0.7);
            this.bigSector.graphics.moveTo(r, r); //绘制点移动(r, r)点
            this.bigSector.graphics.lineTo(r * 2, r); //画线到弧的起始点
            this.bigSector.graphics.drawArc(r, r, r, this.bigRect[0], this.bigRect[1], false);
            this.bigSector.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成		
            this.bigSector.graphics.endFill();
        }
        if (!this.bigSprite) {
            this.bigSprite = new egret.Sprite;
            this.bigSprite.width = r;
            this.bigSprite.height = r;
            this.bigSprite.anchorOffsetX = r;
            this.bigSprite.anchorOffsetY = r;
            this.bigSprite.x = r;
            this.bigSprite.y = r;
            this.addChild(this.bigSprite);
            this.bigSprite.addChild(this.bigCPBitmap);
            this.bigSprite.addChild(this.bigSector);
        }
        if (!this.littleShadow) {
            this.littleShadow = new egret.Bitmap();
            var texture = RES.getRes("little_compass_shadow_png");
            this.littleShadow.texture = texture;
            this.addChild(this.littleShadow);
            this.littleShadow.x = 120;
            this.littleShadow.y = 130;
        }
        if (!this.littleCPBitmap) {
            this.littleCPBitmap = new egret.Bitmap();
            var texture = RES.getRes("little_compass_png");
            this.littleCPBitmap.texture = texture;
            this.littleCPBitmap.x = 120;
            this.littleCPBitmap.y = 120;
        }
        if (!this.littleSector) {
            var r2 = this.littleCPBitmap.width * 0.5;
            this.littleSector = new egret.Shape();
            this.littleSector.graphics.beginFill(0xFF7F50, 0.7);
            this.littleSector.graphics.moveTo(r, r); //绘制点移动(r, r)点
            this.littleSector.graphics.lineTo(r + r2, r); //画线到弧的起始点
            this.littleSector.graphics.drawArc(r, r, r2, this.littleRect[0], this.littleRect[1], false);
            this.littleSector.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成		
            this.littleSector.graphics.endFill();
        }
        if (!this.littleSprite) {
            var r_1 = this.bigCPBitmap.width * 0.5;
            var r2 = this.littleCPBitmap.width * 0.5;
            this.littleSprite = new egret.Sprite;
            this.littleSprite.width = r2;
            this.littleSprite.height = r2;
            this.littleSprite.anchorOffsetX = r_1;
            this.littleSprite.anchorOffsetY = r_1;
            this.littleSprite.x = r_1;
            this.littleSprite.y = r_1;
            this.addChild(this.littleSprite);
            this.littleSprite.addChild(this.littleCPBitmap);
            this.littleSprite.addChild(this.littleSector);
        }
        if (!this.fingerBitmap) {
            this.fingerBitmap = new egret.Bitmap();
            var texture = RES.getRes("finger_png");
            this.fingerBitmap.texture = texture;
            this.addChild(this.fingerBitmap);
            this.fingerBitmap.x = (this.bigCPBitmap.width - this.fingerBitmap.width) * 0.5;
            this.fingerBitmap.y = (this.bigCPBitmap.height - this.fingerBitmap.height) * 0.5 - 30;
        }
        var isHitBig = this.bigSector.hitTestPoint(r, r);
        var isHitBig2 = this.bigCPBitmap.hitTestPoint(r, 40, false);
        // var isHitLittle: boolean =  this.littleSector.hitTestPoint( this.littleCPBitmap.width*0.5, 150 , false);
        // var lll:number = 1;
    };
    FNCompass.prototype.rotate = function () {
        this.bigSprite.rotation = this.bigSprite.rotation + this.bigSpeed;
        this.littleSprite.rotation = this.littleSprite.rotation - this.littleSpeed;
        // this.bigRect    = [this.bigRect[0]    + 0.5*this.bigSpeed/Math.PI,    this.bigRect[1]    + 0.5*this.bigSpeed/Math.PI   ];
        // this.littleRect = [this.littleRect[0] - 0.5*this.littleSpeed/Math.PI, this.littleRect[1] - 0.5*this.littleSpeed/Math.PI];
        this.hitBound();
    };
    FNCompass.prototype.hitBound = function () {
        var bigX = (this.bigRect[0] + this.bigSprite.rotation * Math.PI / 180) % (Math.PI * 2);
        var bigY = (this.bigRect[1] + this.bigSprite.rotation * Math.PI / 180) % (Math.PI * 2);
        var littleX = (this.littleRect[0] - this.littleSprite.rotation * Math.PI / 180) % (Math.PI * 2);
        var littleY = (this.littleRect[1] - this.littleSprite.rotation * Math.PI / 180) % (Math.PI * 2);
        if (bigX < 0)
            bigX = bigX + Math.PI * 2;
        if (bigY < 0)
            bigY = bigY + Math.PI * 2;
        if (littleX < 0)
            littleX = littleX + Math.PI * 2;
        if (littleY < 0)
            littleY = littleY + Math.PI * 2;
        if (bigX <= this.standardLimit && this.standardLimit <= bigY && littleX <= this.standardLimit && this.standardLimit <= littleY) {
            var selfEvent = egret.Event.create(SelfEvent, SelfEvent.HitEvent);
            this.dispatchEvent(selfEvent);
        }
    };
    FNCompass.prototype.randomBound = function () {
        this.bigRect = [0, 1.1];
        this.littleRect = [0.6, 1.8];
    };
    FNCompass.prototype.hitCheck = function () {
        var r = this.bigCPBitmap.width * 0.5;
        var isHitBig = this.bigSector.hitTestPoint(r, r);
        var isHitLittle = this.littleSector.hitTestPoint(r, r);
        if (isHitLittle) {
            var selfEvent = egret.Event.create(SelfEvent, SelfEvent.HitEvent);
            this.dispatchEvent(selfEvent);
        }
    };
    return FNCompass;
}(egret.Sprite));
__reflect(FNCompass.prototype, "FNCompass");
//# sourceMappingURL=FNCompass.js.map