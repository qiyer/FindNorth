class StartView extends egret.Sprite{
	public constructor() {
		super();
        this.createView();
	}

    private startBG   : egret.Bitmap;
    private startName : egret.Bitmap;
    private startBtn  : egret.Bitmap;
    private rankBtn   : egret.Bitmap;

	private createView():void{
		this.startBG = Utils.createBitmapByName("startbg_png");
        this.addChild(this.startBG);

        this.startName = Utils.createBitmapByName("gamename_png");
        this.addChild(this.startName);
        this.startName.x = (Utils.getInstance().StageWidth - this.startName.width)*0.5;
        this.startName.y = 330;

        this.startBtn = Utils.createBitmapByName("start_png");
        this.addChild(this.startBtn);
        this.startBtn.x = (Utils.getInstance().StageWidth - this.startBtn.width)*0.5;
        this.startBtn.y = 902;

        this.rankBtn = Utils.createBitmapByName("rank_png");
        this.addChild(this.rankBtn);
        this.rankBtn.x = (Utils.getInstance().StageWidth - this.rankBtn.width)*0.5;
        this.rankBtn.y = Utils.getInstance().StageHeight - this.rankBtn.height - 35;

        this.startBtn.touchEnabled = true;
        this.rankBtn.touchEnabled  = true;
        this.startBtn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.startGame, this );
        this.rankBtn.addEventListener(  egret.TouchEvent.TOUCH_TAP, this.onRank   , this );
	}

	private startGame(evt:egret.TouchEvent){
        var overEvent = egret.Event.create(GameEvent,GameEvent.StartEvent);
    	this.dispatchEvent(overEvent);
		this.parent.removeChild(this);
    }

    private onRank(evt:egret.TouchEvent){
        var overEvent = egret.Event.create(GameEvent,GameEvent.RankEvent);
    	this.dispatchEvent(overEvent);
    }
}