class FNProcessBar extends egret.Sprite {
    public constructor() {
        super();
        this.createView();
    }

    private textField   : egret.TextField;
	private grayBitmap  : egret.Bitmap;
	private blueBitmap  : egret.Bitmap;
	private lightBitmap : egret.Bitmap;
	private maskBitmap  : egret.Bitmap;

	private currentIndex: number   = 240;
	private timeArr     : number[] = [240,200,170,140,120,100,90,80,60,50];
	private currentLevel: number   = 0;
	

    private createView(): void {
		this.currentIndex = this.timeArr[this.currentLevel];
		if(!this.grayBitmap){
			this.grayBitmap = new egret.Bitmap();
        	let texture: egret.Texture = RES.getRes("gray_progress_png");
            this.grayBitmap.texture = texture;
			this.addChild(this.grayBitmap);			
		}
		if(!this.blueBitmap){
			this.blueBitmap = new egret.Bitmap();
        	let texture: egret.Texture = RES.getRes("blue_progress_png");
            this.blueBitmap.texture = texture;
			this.addChild(this.blueBitmap);
			this.blueBitmap.x = (this.grayBitmap.width - this.blueBitmap.width)*0.5;	
			this.blueBitmap.y = (this.grayBitmap.height - this.blueBitmap.height)*0.5;		

			this.maskBitmap = new egret.Bitmap();
            this.maskBitmap.texture = texture;
			this.addChild(this.maskBitmap);
			this.maskBitmap.x = (this.grayBitmap.width - this.maskBitmap.width)*0.5;	
			this.maskBitmap.y = (this.grayBitmap.height - this.maskBitmap.height)*0.5;		

			this.blueBitmap.mask = this.maskBitmap;
			
		}
		if(!this.lightBitmap){
			this.lightBitmap = new egret.Bitmap();
        	let texture: egret.Texture = RES.getRes("light_png");
            this.lightBitmap.texture = texture;
			this.addChild(this.lightBitmap);
			this.lightBitmap.x = 25;	
			this.lightBitmap.y = 15;		
		}
    }

	public resetProcess():void{
		if(Utils.getInstance().totalScore < 10){
			this.currentLevel = 0 ;
		} else if(Utils.getInstance().totalScore < 20){
			this.currentLevel = 1 ;
		} else if(Utils.getInstance().totalScore < 30){
			this.currentLevel = 2 ;
		} else if(Utils.getInstance().totalScore < 40){
			this.currentLevel = 3 ;
		}else if(Utils.getInstance().totalScore < 50){
			this.currentLevel = 4 ;
		}else if(Utils.getInstance().totalScore < 60){
			this.currentLevel = 5 ;
		}else if(Utils.getInstance().totalScore < 70){
			this.currentLevel = 6 ;
		}else if(Utils.getInstance().totalScore < 80){
			this.currentLevel = 7 ;
		}else if(Utils.getInstance().totalScore < 90){
			this.currentLevel = 8 ;
		}else if(Utils.getInstance().totalScore < 100){
			this.currentLevel = 9 ;
		}
		this.currentIndex = this.timeArr[this.currentLevel];
	}

    public onProgress(): void {
		if(this.currentIndex > 0){
			this.currentIndex--;
			this.maskBitmap.width = this.blueBitmap.width*this.currentIndex/this.timeArr[this.currentLevel];
		}else{
			var overEvent = egret.Event.create(GameEvent,GameEvent.OverEvent);
        	this.dispatchEvent(overEvent);	
		}
	}
}