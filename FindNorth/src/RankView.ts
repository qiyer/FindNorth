class RankView extends egret.Sprite {
	public constructor() {
		super();
        this.createView();
	}

    private bgBitmap    : egret.Bitmap;
	private backBtn     : egret.Bitmap;

	private createView(): void {
		this.bgBitmap = Utils.createBitmapByName("rankbg_png");
		this.addChild(this.bgBitmap);
		this.bgBitmap.x = (Utils.getInstance().StageWidth - this.bgBitmap.width)*0.5;
		this.bgBitmap.y = 260;

		this.backBtn = Utils.createBitmapByName("back_png");
		this.addChild(this.backBtn);
		this.backBtn.x = (Utils.getInstance().StageWidth - this.backBtn.width)*0.5;
		this.backBtn.y = Utils.getInstance().StageHeight - 100;

		this.backBtn.touchEnabled  = true;
        this.backBtn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onBack, this );
	}

	private onBack(evt:egret.TouchEvent){
        this.parent.removeChild(this);
    }
}