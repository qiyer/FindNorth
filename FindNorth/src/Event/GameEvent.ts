class GameEvent extends egret.Event{
	public static OverEvent  = "over_event";
    public static HomeEvent  = "home_event";
    public static RetryEvent = "retry_event";
    public static ShareEvent = "share_event";

    public static StartEvent = "start_event";
    public static RankEvent  = "rank_event";

    public num: number;
    public index: number;
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable);
    }
}