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

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield  :  egret.TextField;
    private scoreTF    :  egret.TextField;
    private processBar :  FNProcessBar;
    private fnCompass  :  FNCompass;
    private fnScoreNum :  FNScoreNumber;
    private totalScore :  number = 0;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {

        Utils.getInstance().initStage(this.stage.stageWidth,this.stage.stageHeight);
        var bg:egret.Shape = new egret.Shape();
        bg.graphics.beginFill( 0xfff3e7 );
        bg.graphics.drawRect( 0, 0, Utils.getInstance().StageWidth, Utils.getInstance().StageHeight ); 
        bg.graphics.endFill();
        this.addChild(bg);

        var timer:egret.Timer = new egret.Timer(25,0);
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        timer.start();

        this.setScoreTitle(0);
        this.setProcessBar();
        this.setCompass();
        this.initEvents();
    }

    private initEvents():void{
        this.fnCompass.addEventListener(SelfEvent.HitEvent,this.hitChange,this);
    }

    private hitChange(e: egret.Event){
        this.totalScore ++;
        this.fnScoreNum.setNumber(this.totalScore);
    }

    private timerFunc(){
        // egret.log("计时");
        this.processBar.onProgress();
        this.fnCompass.rotate();
    }

    private setScoreTitle(score:Number)
    {
       if(!this.fnScoreNum){
            this.fnScoreNum = new FNScoreNumber();
            this.addChild(this.fnScoreNum);
            this.fnScoreNum.x = 52;
            this.fnScoreNum.y = 152;
       }
        // this.fnScoreNum.setNumber(562);
    }

    private setCompass() {
        if(!this.fnCompass){
            this.fnCompass = new FNCompass();
            this.addChild(this.fnCompass);
            this.fnCompass.x = (Utils.getInstance().StageWidth - this.processBar.width)*0.5;
            this.fnCompass.y = 350;
        }
    }

    private setProcessBar() {
        if(!this.processBar){
            this.processBar = new FNProcessBar();
            this.addChild(this.processBar);
            this.processBar.x = (Utils.getInstance().StageWidth - this.processBar.width)*0.5;
            this.processBar.y = 272;
        }

    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
}