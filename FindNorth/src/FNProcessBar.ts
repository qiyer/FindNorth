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

	private currentIndex: number = 100;
	

    private createView(): void {
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

    public onProgress(): void {
		if(this.currentIndex > 0){
			this.currentIndex--;
			this.maskBitmap.width = this.blueBitmap.width*this.currentIndex/100;
		}
	}
}