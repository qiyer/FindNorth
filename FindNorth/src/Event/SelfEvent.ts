class SelfEvent extends egret.Event {
    public static HitEvent = "hit_event";
    public static TimeResetEvent = "time_reset_event";
    public num: number;
    public index: number;
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable);
    }
}