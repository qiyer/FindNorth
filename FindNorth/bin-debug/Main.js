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
        this.startBG = this.createBitmapByName("startbg_png");
        this.addChild(this.startBG);
        this.startName = this.createBitmapByName("gamename_png");
        this.addChild(this.startName);
        this.startName.x = (Utils.getInstance().StageWidth - this.startName.width) * 0.5;
        this.startName.y = 330;
        this.startBtn = this.createBitmapByName("start_png");
        this.addChild(this.startBtn);
        this.startBtn.x = (Utils.getInstance().StageWidth - this.startBtn.width) * 0.5;
        this.startBtn.y = 902;
        this.rankBtn = this.createBitmapByName("rank_png");
        this.addChild(this.rankBtn);
        this.rankBtn.x = (Utils.getInstance().StageWidth - this.rankBtn.width) * 0.5;
        this.rankBtn.y = Utils.getInstance().StageHeight - this.rankBtn.height - 35;
        this.startBtn.touchEnabled = true;
        this.rankBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRank, this);
    };
    Main.prototype.startGame = function (evt) {
        this.removeChild(this.startBG);
        this.removeChild(this.startName);
        this.removeChild(this.startBtn);
        this.removeChild(this.rankBtn);
        this.createGuide();
    };
    Main.prototype.onRank = function (evt) {
        if (!this.rankView) {
            this.rankView = new RankView();
        }
        this.addChild(this.rankView);
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
//# sourceMappingURL=Main.js.map