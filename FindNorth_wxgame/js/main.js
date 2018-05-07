var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var FNCompass = (function (_super) {
    __extends(FNCompass, _super);
    function FNCompass() {
        var _this = _super.call(this) || this;
        _this.bigDegree = 0;
        _this.littleDegree = 0;
        _this.standardLimit = Math.PI * 1.5;
        _this.bigSpeed = 1;
        _this.littleSpeed = 4;
        _this.curOrientation = 1;
        _this.bigArr = [[0.0, 1.1], [0.2, 1.1], [0.3, 1.0], [0.4, 0.9], [0.5, 0.8]];
        _this.litArr = [[0.6, 1.8], [0.7, 1.6], [0.8, 1.5], [0.9, 1.4], [1.0, 1.2]];
        _this.createView();
        return _this;
    }
    FNCompass.prototype.createView = function () {
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
        }
        if (!this.fingerBitmap) {
            this.fingerBitmap = new egret.Bitmap();
            var texture = RES.getRes("finger_png");
            this.fingerBitmap.texture = texture;
            this.addChild(this.fingerBitmap);
            this.fingerBitmap.anchorOffsetX = this.fingerBitmap.width * 0.5;
            this.fingerBitmap.anchorOffsetY = 212;
            this.fingerBitmap.x = this.bigCPBitmap.width * 0.5;
            this.fingerBitmap.y = (this.bigCPBitmap.height) * 0.5 + 5;
        }
        this.randomBound();
    };
    FNCompass.prototype.rotate = function () {
        this.bigSprite.rotation = this.bigSprite.rotation + this.bigSpeed * this.curOrientation;
        this.littleSprite.rotation = this.littleSprite.rotation - this.littleSpeed * this.curOrientation;
        this.hitCheck();
    };
    FNCompass.prototype.setFinger = function (dis) {
        this.fingerBitmap.rotation = dis;
    };
    FNCompass.prototype.resetHit = function () {
        this.randomBound();
    };
    FNCompass.prototype.randomBound = function () {
        if (Utils.getInstance().totalScore < 20) {
            this.bigRect = this.bigArr[0];
            this.littleRect = this.litArr[0];
        }
        else if (Utils.getInstance().totalScore < 40) {
            this.bigRect = this.bigArr[1];
            this.littleRect = this.litArr[1];
        }
        else if (Utils.getInstance().totalScore < 60) {
            this.bigRect = this.bigArr[2];
            this.littleRect = this.litArr[2];
        }
        else if (Utils.getInstance().totalScore < 80) {
            this.bigRect = this.bigArr[3];
            this.littleRect = this.litArr[3];
        }
        else if (Utils.getInstance().totalScore < 120) {
            this.bigRect = this.bigArr[4];
            this.littleRect = this.litArr[4];
        }
        if (this.bigSector) {
            this.bigSprite.removeChild(this.bigSector);
            this.bigSector.graphics.clear();
            this.bigSector = null;
        }
        if (this.littleSector) {
            this.littleSprite.removeChild(this.littleSector);
            this.littleSector.graphics.clear();
            this.littleSector = null;
        }
        var r = this.bigCPBitmap.width * 0.5;
        var r2 = this.littleCPBitmap.width * 0.5;
        this.bigSector = new egret.Shape();
        this.bigSector.graphics.beginFill(0xFF7F50, 0.7);
        this.bigSector.graphics.moveTo(r, r); //绘制点移动(r, r)点
        this.bigSector.graphics.lineTo(r * 2, r); //画线到弧的起始点
        this.bigSector.graphics.drawArc(r, r, r, this.bigRect[0], this.bigRect[1], false);
        this.bigSector.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成		
        this.bigSector.graphics.endFill();
        this.littleSector = new egret.Shape();
        this.littleSector.graphics.beginFill(0xFF7F50, 0.7);
        this.littleSector.graphics.moveTo(r, r); //绘制点移动(r, r)点
        this.littleSector.graphics.lineTo(r + r2, r); //画线到弧的起始点
        this.littleSector.graphics.drawArc(r, r, r2, this.littleRect[0], this.littleRect[1], false);
        this.littleSector.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成		
        this.littleSector.graphics.endFill();
        this.bigSprite.addChild(this.bigSector);
        this.littleSprite.addChild(this.littleSector);
    };
    FNCompass.prototype.hitCheck = function () {
        var r = this.bigCPBitmap.width * 0.5;
        // let bx1 = Utils.getInstance().StageWidth*0.5;
        // let by1 = Utils.getInstance().StageHeight*0.5 - 100;
        var bx1 = Utils.getInstance().StageWidth * 0.5 + 100 * Math.sin(this.fingerBitmap.rotation * Math.PI / 180);
        var by1 = Utils.getInstance().StageHeight * 0.5 + 15 - 100 * Math.cos(this.fingerBitmap.rotation * Math.PI / 180);
        var isHitBig = this.bigSector.hitTestPoint(bx1, by1, true);
        var isHitLittle = this.littleSector.hitTestPoint(bx1, by1, true);
        if (isHitBig && isHitLittle) {
            var selfEvent = egret.Event.create(SelfEvent, SelfEvent.HitEvent);
            this.dispatchEvent(selfEvent);
            this.curOrientation = this.curOrientation * -1;
            this.resetHit();
            this.bigSprite.rotation = this.bigSprite.rotation + (80 * Math.random() + 50) * this.curOrientation;
            this.littleSprite.rotation = this.littleSprite.rotation - (60 * Math.random() + 20) * this.curOrientation;
        }
    };
    return FNCompass;
}(egret.Sprite));
__reflect(FNCompass.prototype, "FNCompass");
var FNScoreNumber = (function (_super) {
    __extends(FNScoreNumber, _super);
    function FNScoreNumber() {
        var _this = _super.call(this) || this;
        _this.colorGreen = false;
        _this.colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 100,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
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
            if (this.colorGreen) {
                var colorFlilter = new egret.ColorMatrixFilter(this.colorMatrix);
                num.filters = [colorFlilter];
            }
        }
    };
    return FNScoreNumber;
}(egret.Sprite));
__reflect(FNScoreNumber.prototype, "FNScoreNumber");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.totalScore = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        Utils.getInstance().initStage(this.stage.stageWidth, this.stage.stageHeight);
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xfff3e7);
        bg.graphics.drawRect(0, 0, Utils.getInstance().StageWidth, Utils.getInstance().StageHeight);
        bg.graphics.endFill();
        this.addChild(bg);
        this.timer = new egret.Timer(25, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.setScoreTitle(0);
        this.setProcessBar();
        this.setCompass();
        this.initEvents();
        this.createStartScene();
    };
    Main.prototype.createStartScene = function () {
        if (!this.startView) {
            this.startView = new StartView();
            this.addChild(this.startView);
            this.startView.addEventListener(GameEvent.StartEvent, this.startGame, this);
            this.startView.addEventListener(GameEvent.RankEvent, this.onRank, this);
        }
    };
    Main.prototype.startGame = function (evt) {
        this.createGuide();
    };
    Main.prototype.onRank = function (evt) {
        // if (!this.rankView) {
        //     this.rankView = new RankView();
        // }
        // this.addChild(this.rankView);
      wx.showToast({
        title: '即将开放~',
        icon: 'none',
        duration: 2000
      })
    };
    Main.prototype.initEvents = function () {
        this.fnCompass.addEventListener(SelfEvent.HitEvent, this.hitChange, this);
        this.processBar.addEventListener(GameEvent.OverEvent, this.gameOver, this);
    };
    Main.prototype.hitChange = function (e) {
        this.totalScore++;
        Utils.getInstance().totalScore = this.totalScore;
        this.fnScoreNum.setNumber(this.totalScore);
        this.processBar.resetProcess();
    };
    Main.prototype.gameOver = function (e) {
        this.timer.stop();
        this.overView = new OverView();
        this.addChild(this.overView);
        this.overView.addEventListener(GameEvent.HomeEvent, this.onHome, this);
        this.overView.addEventListener(GameEvent.RetryEvent, this.onRetry, this);
        this.overView.addEventListener(GameEvent.ShareEvent, this.onShare, this);
    };
    Main.prototype.onHome = function (e) {
        this.totalScore = 0;
        Utils.getInstance().totalScore = 0;
        this.fnScoreNum.setNumber(0);
        if (!this.startView) {
            this.startView = new StartView();
        }
        this.addChild(this.startView);
    };
    Main.prototype.onRetry = function (e) {
        this.totalScore = 0;
        Utils.getInstance().totalScore = 0;
        this.fnScoreNum.setNumber(0);
        this.processBar.resetProcess();
        this.fnCompass.resetHit();
        this.timer.start();
    };
    Main.prototype.onShare = function (e) {
      wx.showToast({
        title: '即将开放~',
        icon: 'none',
        duration: 2000
      })
    };
    Main.prototype.timerFunc = function () {
        // egret.log("计时");
        this.processBar.onProgress();
        this.fnCompass.rotate();
    };
    Main.prototype.setScoreTitle = function (score) {
        if (!this.fnScoreNum) {
            this.fnScoreNum = new FNScoreNumber();
            this.addChild(this.fnScoreNum);
            this.fnScoreNum.x = 52;
            this.fnScoreNum.y = 152;
        }
        // this.fnScoreNum.setNumber(562);
    };
    Main.prototype.setCompass = function () {
        if (!this.fnCompass) {
            this.fnCompass = new FNCompass();
            this.addChild(this.fnCompass);
            this.fnCompass.x = (Utils.getInstance().StageWidth - this.processBar.width) * 0.5;
            this.fnCompass.y = 350;
            // this.fnCompass.setFinger(120);
            var _this = this;
            wx.onCompassChange(function (res) {
              _this.fnCompass.setFinger(res.direction);
            });
            wx.startCompass();
        }
    };
    Main.prototype.setProcessBar = function () {
        if (!this.processBar) {
            this.processBar = new FNProcessBar();
            this.addChild(this.processBar);
            this.processBar.x = (Utils.getInstance().StageWidth - this.processBar.width) * 0.5;
            this.processBar.y = 272;
        }
    };
    Main.prototype.createGuide = function () {
        this.guideBG = new egret.Shape();
        this.guideBG.graphics.beginFill(0x666666);
        this.guideBG.graphics.drawRect(0, 0, Utils.getInstance().StageWidth, Utils.getInstance().StageHeight);
        this.guideBG.graphics.endFill();
        this.guideBG.alpha = 0.7;
        this.addChild(this.guideBG);
        this.guideTip = Utils.createBitmapByName("tip_png");
        this.addChild(this.guideTip);
        this.guideTip.x = (Utils.getInstance().StageWidth - this.guideTip.width) * 0.5;
        this.guideTip.y = Utils.getInstance().StageHeight - this.guideTip.height - 71;
        this.guideBG.touchEnabled = true;
        this.guideTip.touchEnabled = true;
        this.guideBG.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
        this.guideTip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
    };
    Main.prototype.onStartGame = function (evt) {
        this.removeChild(this.guideBG);
        this.removeChild(this.guideTip);
        this.processBar.resetProcess();
        this.fnCompass.resetHit();
        this.timer.start();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
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
var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    GameEvent.OverEvent = "over_event";
    GameEvent.HomeEvent = "home_event";
    GameEvent.RetryEvent = "retry_event";
    GameEvent.ShareEvent = "share_event";
    GameEvent.StartEvent = "start_event";
    GameEvent.RankEvent = "rank_event";
    return GameEvent;
}(egret.Event));
__reflect(GameEvent.prototype, "GameEvent");
var SelfEvent = (function (_super) {
    __extends(SelfEvent, _super);
    function SelfEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    SelfEvent.HitEvent = "hit_event";
    SelfEvent.TimeResetEvent = "time_reset_event";
    return SelfEvent;
}(egret.Event));
__reflect(SelfEvent.prototype, "SelfEvent");
;window.Main = Main;