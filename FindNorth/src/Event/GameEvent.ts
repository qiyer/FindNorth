class GameEvent extends egret.Event{
	public static OverEvent = "over_event";
    public num: number;
    public index: number;
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable);
    }
}