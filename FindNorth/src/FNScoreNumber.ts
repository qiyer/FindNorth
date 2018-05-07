class FNScoreNumber extends egret.Sprite {
	public constructor() {
		super();
		this.setNumber(0);
	}

	public colorGreen: boolean = false;

	public colorMatrix = [
   						 	1,0,0,0,0,
    						0,1,0,0,100,
    						0,0,1,0,0,
    						0,0,0,1,0	
						 ];

	public setNumber(count:number){
		this.removeChildren();
		let countStr = String(count);
		var len = countStr.length;
		for(var i=0;i<len;i++){
            var num = new egret.Bitmap();
			var numStr = countStr.charAt(i);
        	let texture: egret.Texture = RES.getRes(numStr+"_png");
            num.texture = texture;
			this.addChild(num);
			num.x = (num.width+10)*i;

			if(this.colorGreen){
				var colorFlilter = new egret.ColorMatrixFilter(this.colorMatrix);
				num.filters = [colorFlilter];
			}
        }
	}
}