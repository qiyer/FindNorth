class Utils {
	public constructor() {
	}

	public static UIWidth     : number = 750;
	public static UIHeight    : number = 1334;

	public  StageWidth  : number = 750;
	public  StageHeight : number = 1334;

	public totalScore   : number = 0;

	private static instance:Utils;
    public static getInstance():Utils{
        if(this.instance == null){
            this.instance = new Utils();
        }
    	return this.instance;
    }

	public initStage(stageWidth:number ,stageHeight:number){
		this.StageHeight = stageHeight;
		this.StageWidth  = stageWidth;
	}

	public static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}