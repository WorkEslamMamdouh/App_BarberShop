/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
class Custom_AlertLog extends SecurityClass {
    constructor() {
        super();
        this.AlertSubTypeID = "";
        this.AlertTypeID = "";
        this.CompCode = "";
        this.MsgBody = "";
        this.SystemCode = "";
        //this.MemberIDs;
    }
    public MemberIDs: Array<number>;
    public SystemCode: string;
    public AlertTypeID: string;
    public MsgBody: string;
    public CompCode: string;
    public AlertSubTypeID: string;



}

