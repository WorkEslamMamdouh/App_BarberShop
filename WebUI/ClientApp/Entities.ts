/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
class SecurityClass {
    public UserCode: string;
    public Token: string;

}

class FavModules {//
    public MODULE_CODE: string;
    public MODULE_DESCE: string;
    public MODULE_DESCA: string;
    public OPTIONORDER: string;
    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public USER_CODE: string;
}

class SystemParameters {
    public CompanyNameA: string;
    public CompanyNameE: string;
    public CompanyCode: string;
    public IsActive: boolean;
}

class APISessionRecord {

    private SetAPISession(key: string, value: string) {
        $.ajax({
            url: Url.Action("SetSessionRecordValue", "Session"),
            data: { propertyName: key, value: value },
            async: false
        });

    }
    private GetAPISession(key: string): string {

        let value = $.ajax({
            url: Url.Action("GetSessionRecordValue", "Session"),
            data: { propertyName: key },
            async: false
        }).responseJSON.result;
        return value;
    }
    public set SystemCode(value: string) {
        this.SetAPISession("SystemCode", value);
    }
    public get SystemCode(): string {
        return this.GetAPISession("SystemCode");
    }

    public set SubSystemCode(value: string) {
        this.SetAPISession("SubSystemCode", value);
    }
    public get SubSystemCode(): string {
        return this.GetAPISession("SubSystemCode");
    }

    public set Modulecode(value: string) {
        this.SetAPISession("Modulecode", value);
    }
    public get Modulecode(): string {
        return this.GetAPISession("Modulecode");
    }

    public set UserCode(value: string) {
        this.SetAPISession("UserCode", value);
    }
    public set Token(value: string) {
        this.SetAPISession("Token", value);
    }
    public get UserCode(): string {
        return this.GetAPISession("UserCode");
    }
    public get Token(): string {
        return this.GetAPISession("Token");
    }
    public set CompCode(value: string) {
        this.SetAPISession("CompCode", value);
    }
    public get CompCode(): string {
        return this.GetAPISession("CompCode");
    }

    public set BranchCode(value: string) {
        this.SetAPISession("BranchCode", value);
    }
    public get BranchCode(): string {
        return this.GetAPISession("BranchCode");
    }


    public set CurrentYear(value: string) {
        this.SetAPISession("CurrentYear", value);
    }
    public get CurrentYear(): string {
        return this.GetAPISession("CurrentYear");
    }

    public set ScreenLanguage(value: string) {
        this.SetAPISession("ScreenLanguage", value);
    }
    public get ScreenLanguage(): string {
        return this.GetAPISession("ScreenLanguage");
    }

}


abstract class EntityContext {
    public RowIndex: number;
}
class ResponseResult {
    public ResponseState: boolean;
    public ResponseMessage: string;
    public ResponseData: any;
}

class BaseResponse {
    public IsSuccess: boolean;
    public ErrorMessage: string;
    public StatusCode: Number;
    public Response: any;
}

class BaseReservations {
 
    public Reservations: any;
    public Emps: any;
}

  

class Table_Hagz extends SecurityClass {
    constructor() {
        super();
        this.ID = 0;
        this.Num = 0;
        this.Name = "";
        this.Phone = "";
        this.Type = "";
        this.Message = "";
        this.cheak = false;
        this.StatusFlag = "";
        this.RegistredTime = "";
    }
    public ID: number;
    public Num: number;
    public Name: string;
    public Phone: string;
    public Type: string;
    public Message: string;
    public cheak: boolean;
    public StatusFlag: string;
    public RegistredTime: string; 

}
 

class Display_App extends SecurityClass {
    constructor() {
        super();
        this.GetSts = new GetStatus();
        this.Table_Hagz = new Array<Table_Hagz>();
    }
    public GetSts: GetStatus;
    public Table_Hagz: Array<Table_Hagz>;


}


class GetStatus {
    constructor() {
        this.TrNo = 0;
        this.StatusName = ""; 
    }
    public TrNo: number;
    public StatusName: string; 
}


class GetSts {
    constructor() {
        this.TrNo = 0;
        this.StatusName = "";
    }
    public TrNo: number;
    public StatusName: string;
}




class ClientDto {
    constructor() { 
        this.PhoneNumber = "";
        this.FullName = "";
        this.PlayerId = "";
        this.Token = "";
    }
    public PhoneNumber: string;
    public FullName: string;
    public PlayerId: string;
    public Token: string;

}


class Reservations extends SecurityClass {
    constructor() {
        super();
        this.ClientId = 0;
        this.ClientName = "";
        this.Id = 0;
        this.PhoneNumber = "";
        this.RegistredTime = "";
        this.ServiceId = 0;
        this.StatusId = 0;
        this.Token = "";
        this.Type = "";
        this.Status = "";
        this.TurnNumber= 0;
    }
    public ClientId: number;
    public ClientName: string;
    public Id: number;
    public PhoneNumber: string;
    public RegistredTime: string;
    public ServiceId: number;
    public StatusId: number;
    public Token: string;
    public Type: string;
    public Status: string;
    public TurnNumber: number;
}



class Employee extends SecurityClass {
    constructor() {
        super();
        this.EmployeeName = "";   
        this.Id = 0;
        this.IsAvailable = true;   
    }
    public EmployeeName: string;    
    public Id: number;
    public IsAvailable: boolean;
     
}


class updateemploye {
    constructor() {
        this.Id = 0;
        this.IsAvailable = true;
    }
    public Id: number;
    public IsAvailable: boolean;
}

class Userclose {
    constructor() {
        this.ReservationId = 0;
        this.StatusId = 0;
    }
    public ReservationId: number;
    public StatusId: number; 
}
class UserAdd {
    constructor() {
        this.FullName = "";
        this.PhoneNumber = "";
        this.ServiceId = 0;
    }
    public FullName: string;
    public PhoneNumber: string;
    public ServiceId: number;
}




class Table_Tim_work extends SecurityClass {
    constructor() {
        super();
        this.ID = 0;
        this.Name = "";
        this.Cheak = false;
        this.StatusFlag = "";
    }
    public ID: number;
    public Name: string;
    public Cheak: boolean;
    public StatusFlag: string;
}



class G_SearchForm extends SecurityClass {
    constructor() {
        super();
        this.SearchFormCode = "";
        this.ReturnDataPropertyName = "";
        this.Description = "";
        this.SerachFormTitle = "";
        this.IsFullScreen = false;
        this.Left = 0;
        this.Top = 0;
        this.Height = 0;
        this.Width = 0;
        this.PageSize = 0;
        this.DataSourceName = "";
        this.SearchInterval = 0;
        this.SerachFormTitleA = "";
    }
    public SearchFormCode: string;
    public ReturnDataPropertyName: string;
    public Description: string;
    public SerachFormTitle: string;
    public IsFullScreen: boolean;
    public Left: number;
    public Top: number;
    public Height: number;
    public Width: number;
    public PageSize: number;
    public DataSourceName: string;
    public SearchInterval: number;
    public SerachFormTitleA: string;
}

class G_SearchFormModule extends SecurityClass {
    constructor() {
        super();
        this.SystemCode = "";
        this.SubSystemCode = "";
        this.ModuleCode = "";
        this.ControlCode = "";
        this.SearchFormCode = "";
    }
    public SystemCode: string;
    public SubSystemCode: string;
    public ModuleCode: string;
    public ControlCode: string;
    public SearchFormCode: string;
}

class G_SearchFormSetting extends SecurityClass {
    constructor() {
        super();
        this.SearchFormSettingID = 0;
        this.SearchFormCode = "";
        this.FieldSequence = 0;
        this.DataMember = "";
        this.AlternateDataMember = "";
        this.FieldTitle = "";
        this.IsReadOnly = false;
        this.Datatype = 0;
        this.FieldWidth = 0;
        this.UseSelectionOperator = false;
        this.Language = 0;
        this.FieldTitleA = "";
    }
    public SearchFormSettingID: number;
    public SearchFormCode: string;
    public FieldSequence: number;
    public DataMember: string;
    public AlternateDataMember: string;
    public FieldTitle: string;
    public IsReadOnly: boolean;
    public Datatype: number;
    public FieldWidth: number;
    public UseSelectionOperator: boolean;
    public Language: number;
    public FieldTitleA: string;
}


class G_STANDARD extends SecurityClass {
    constructor() {
        super();
        this.BACKUP_PATH = "";
        this.BACKUP_DB = "";
        this.BACKUP_COPIES = 0;
    }
    public BACKUP_PATH: string;
    public BACKUP_DB: string;
    public BACKUP_COPIES: number;
}

class G_SUB_SYSTEMS extends SecurityClass {
    constructor() {
        super();
        this.SYSTEM_CODE = "";
        this.SUB_SYSTEM_CODE = "";
        this.SUB_SYSTEM_DESCA = "";
        this.SUB_SYSTEM_DESCE = "";
        this.ICON_PATH = "";
        this.APPNAME = "";
        this.APPVERSION = "";
    }
    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public SUB_SYSTEM_DESCA: string;
    public SUB_SYSTEM_DESCE: string;
    public ICON_PATH: string;
    public APPNAME: string;
    public APPVERSION: string;
}

class G_SYSTEM extends SecurityClass {
    constructor() {
        super();
        this.SYSTEM_CODE = "";
        this.SYSTEM_DESCE = "";
        this.SYSTEM_DESCA = "";
        this.DB_NAME = "";
        this.ICON_PATH = "";
        this.INIT_ORDER = 0;
        this.VER_PATH = "";
    }
    public SYSTEM_CODE: string;
    public SYSTEM_DESCE: string;
    public SYSTEM_DESCA: string;
    public DB_NAME: string;
    public ICON_PATH: string;
    public INIT_ORDER: number;
    public VER_PATH: string;
}

class G_USER_BRANCH extends SecurityClass {
    constructor() {
        super();
        this.USER_CODE = "";
        this.COMP_CODE = 0;
        this.BRA_CODE = 0;
        this.EXECUTE = false;
        this.CREATE = false;
        this.EDIT = false;
        this.DELETE = false;
        this.PRINT = false;
        this.VIEW = false;
    }
    public USER_CODE: string;
    public COMP_CODE: number;
    public BRA_CODE: number;
    public EXECUTE: boolean;
    public CREATE: boolean;
    public EDIT: boolean;
    public DELETE: boolean;
    public PRINT: boolean;
    public VIEW: boolean;
}

class G_USER_COMPANY extends SecurityClass {
    constructor() {
        super();
        this.USER_CODE = "";
        this.COMP_CODE = 0;
        this.EXECUTE = false;
        this.CREATE = false;
        this.EDIT = false;
        this.DELETE = false;
        this.PRINT = false;
        this.VIEW = false;
    }
    public USER_CODE: string;
    public COMP_CODE: number;
    public EXECUTE: boolean;
    public CREATE: boolean;
    public EDIT: boolean;
    public DELETE: boolean;
    public PRINT: boolean;
    public VIEW: boolean;
}

class G_USER_LOG extends SecurityClass {
    constructor() {
        super();
        this.USER_CODE = "";
        this.SYSTEM_CODE
        this.SYSTEM_YEAR = 0;
        this.MODULE_CODE = "";
        this.COMP_CODE = 0;
        this.LOG_DATE = "";
    }
    public USER_CODE: string;
    public SYSTEM_CODE: any;
    public SYSTEM_YEAR: number;
    public MODULE_CODE: string;
    public COMP_CODE: number;
    public LOG_DATE: string;
}


class G_USER_MODULE extends SecurityClass {
    constructor() {
        super();
        this.USER_CODE = "";
        this.SYSTEM_CODE = "";
        this.SUB_SYSTEM_CODE = "";
        this.MODULE_CODE = "";
        this.EXECUTE = false;
        this.CREATE = false;
        this.EDIT = false;
        this.DELETE = false;
        this.PRINT = false;
        this.VIEW = false;
        this.CUSTOM1 = false;
        this.CUSTOM2 = false;
        this.CUSTOM3 = false;
        this.CUSTOM4 = false;
        this.CUSTOM5 = false;
        this.CUSTOM6 = false;
        this.CUSTOM7 = false;
        this.CUSTOM8 = false;
        this.CUSTOM9 = false;
        this.ViewImages = false;
        this.EditImages = false;
    }
    public USER_CODE: string;
    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public MODULE_CODE: string;
    public EXECUTE: boolean;
    public CREATE: boolean;
    public EDIT: boolean;
    public DELETE: boolean;
    public PRINT: boolean;
    public VIEW: boolean;
    public CUSTOM1: boolean;
    public CUSTOM2: boolean;
    public CUSTOM3: boolean;
    public CUSTOM4: boolean;
    public CUSTOM5: boolean;
    public CUSTOM6: boolean;
    public CUSTOM7: boolean;
    public CUSTOM8: boolean;
    public CUSTOM9: boolean;
    public ViewImages: boolean;
    public EditImages: boolean;
}

class G_USER_SUB_SYSTEM extends SecurityClass {
    constructor() {
        super();
        this.USER_CODE = "";
        this.SYSTEM_CODE = "";
        this.SUB_SYSTEM_CODE = "";
        this.EXECUTE = false;
        this.FILTER_STRING = "";
    }
    public USER_CODE: string;
    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public EXECUTE: boolean;
    public FILTER_STRING: string;
}

class G_USER_SYSTEM extends SecurityClass {
    constructor() {
        super();
        this.USER_CODE = "";
        this.SYSTEM_CODE = "";
        this.EXECUTE = false;
        this.FILTER_STRING = "";
    }
    public USER_CODE: string;
    public SYSTEM_CODE: string;
    public EXECUTE: boolean;
    public FILTER_STRING: string;
}

class G_USERS extends SecurityClass {
    constructor() {
        super();
        this.USER_CODE = "";
        this.USER_PASSWORD = "";
        this.USER_ACTIVE = false;
        this.USER_NAME = "";
        this.CompCode = 0;
        this.REGION_CODE = "";
        this.GRP_CODE = 0;
        this.USER_PASSWORD2 = "";
        this.USER_PASSWORD3 = "";
        this.CHANGE_PASS_DATE = "";
        this.MANUAL_VC = "";
        this.MASTER_USER_CODE = "";
        this.City = "";
        this.Address = "";
        this.Tel = "";
        this.Fax = "";
        this.Mobile = "";
        this.Email = "";
        this.DepartmentName = "";
        this.JobTitle = "";
        this.USER_TYPE = 0;
        this.ManagedBy = "";
        this.SYSTEM_CODE = "";
        this.SUB_SYSTEM_CODE = "";
        this.Tokenid = "";
        this.LastLogin = "";

    }
    public USER_CODE: string;
    public USER_PASSWORD: string;
    public USER_ACTIVE: boolean;
    public USER_NAME: string;
    public CompCode: number;
    public REGION_CODE: string;
    public GRP_CODE: number;
    public USER_PASSWORD2: string;
    public USER_PASSWORD3: string;
    public CHANGE_PASS_DATE: string;
    public MANUAL_VC: string;
    public MASTER_USER_CODE: string;
    public City: string;
    public Address: string;
    public Tel: string;
    public Fax: string;
    public Mobile: string;
    public Email: string;
    public DepartmentName: string;
    public JobTitle: string;
    public USER_TYPE: number;
    public ManagedBy: string;
    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public LastLogin: string;
    public Tokenid: string
}

class I_Control   {
    constructor() {
       
        this.CompCode = 0;
        this.IsVat = false;
        this.DefSlsVatType = 1;
        this.DefPurVatType = 1;
        this.VatNo = "";        
        this.MobileLength = 0;        
        this.IDLength = 0;
        this.SendSMS = false;
        this.SendEmail = false;
        this.SendPublicSMS = false;
        this.NotePeriodinSec = 0;
        this.DashBoardPeriodinSec = 0;
        this.MaxYearlyMSGs = 0;
        this.UsedMSGs = 0;
        this.UserTimeZoneUTCDiff = 0;
        this.ServerTimeZoneUTCDiff = 0;        
        this.MaxImagesize = 0;
        this.SaudiNationID = 0;
        this.WebCustomerWebsite = false;
        this.ImgPath = "";        
        this.MembeshiptStartDate = "";
        this.MembeshipEndDate = "";
        this.MembershipAllanceDays = 0;
        this.MembershipreadOnlyDays = 0;

    }
    public CompCode: number;
    public IsVat: boolean;
    public DefPurVatType: number;
    public DefSlsVatType: number;
    public VatNo: string;
    public MobileLength: number;
    public IDLength: number;
    public SendSMS: boolean;
    public SendEmail: boolean;
    public SendPublicSMS: boolean;
    public NotePeriodinSec: number;
    public DashBoardPeriodinSec: number;
    public MaxYearlyMSGs: number;
    public UsedMSGs: number;
    public UserTimeZoneUTCDiff: number;
    public ServerTimeZoneUTCDiff: number;
    public MaxImagesize: number;
    public SaudiNationID: number;
    public WebCustomerWebsite: boolean;
    public ImgPath: string;
    public MembeshiptStartDate: string;
    public MembeshipEndDate: string;
    public MembershipAllanceDays: number;
    public MembershipreadOnlyDays: number;
}



class G_AlertLog extends SecurityClass {
    constructor() {
        super();

        this.AlertID = 0;
        this.AlertTypeID = 0;
        this.AlertSubTypeID = 0;
        this.MemberID = 0;
        this.MsgType = 0;
        this.MsgDate = "";
        this.MsgHeader = "";
        this.MsgBody = "";
        this.IsSent = false;
        this.SendDate = "";
        this.MobileNo = "";
        this.Email = "";
        this.SystemCode = "";
        this.CompCode = 0;
        this.TrID = 0;
        this.AlertType = "";
    }
    public AlertID: number;
    public AlertTypeID: number;
    public AlertSubTypeID: number;
    public MemberID: number;
    public MsgType: number;
    public MsgDate: string;
    public MsgHeader: string;
    public MsgBody: string;
    public IsSent: boolean;
    public SendDate: string;
    public MobileNo: string;
    public Email: string;
    public SystemCode: string;
    public CompCode: number;
    public TrID: number;
    public AlertType: string;
}

class G_AlertControl extends SecurityClass {
    constructor() {
        super();

        this.Compcode = 0;
        this.SystemCode = "";
        this.EMAIL_SSL = false;
        this.EMAIL_Authentication = false;
        this.EMAIL_SenderName = "";
        this.EMAIL_Sender = "";
        this.EMAIL_SenderPassword = "";
        this.EMAIL_SendorPort = 0;
        this.EMAIL_SenderSMTP = "";
        this.SMS_UserName = "";
        this.SMS_SenderName = "";
        this.SMS_Password = "";
        this.MobileNoPreFex = "";
    }
    public Compcode: number;
    public SystemCode: string;
    public EMAIL_SSL: boolean;
    public EMAIL_Authentication: boolean;
    public EMAIL_SenderName: string;
    public EMAIL_Sender: string;
    public EMAIL_SenderPassword: string;
    public EMAIL_SendorPort: number;
    public EMAIL_SenderSMTP: string;
    public SMS_UserName: string;
    public SMS_SenderName: string;
    public SMS_Password: string;
    public MobileNoPreFex: string;
}

class G_ModuleHelp extends SecurityClass {
    constructor() {
        super();

        this.SYSTEM_CODE = "";
        this.SUB_SYSTEM_CODE = "";
        this.MODULE_CODE = "";
        this.HelpBody_Ar = "";
        this.HelpBody_En = "";
    }
    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public MODULE_CODE: string;
    public HelpBody_Ar: string;
    public HelpBody_En: string;
}
 
class G_Noteifications extends SecurityClass {
    constructor() {
        super();

        this.SYSTEM_CODE = "";
        this.SUB_SYSTEM_CODE = "";
        this.MODULE_CODE = "";
        this.MODULE_DESCE = "";
        this.MODULE_DESCA = "";
        this.Remarks = "";
        this.ISActive = false;
        this.ActiveIcon = "";
        this.InActiveIcon = "";
        this.PageName = "";
        this.DisplayOrder = 0;
    }

    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public MODULE_CODE: string;
    public MODULE_DESCE: string;
    public MODULE_DESCA: string;
    public Remarks: string;
    public ISActive: boolean;
    public ActiveIcon: string;
    public InActiveIcon: string;
    public PageName: string;
    public DisplayOrder: number;
}

class G_NotificationCompany extends SecurityClass {
    constructor() {
        super();

        this.SYSTEM_CODE = "";
        this.SUB_SYSTEM_CODE = "";
        this.MODULE_CODE = "";
        this.CompCode = 0;
        this.BranchCode = 0;
        this.ISActive = false;
        this.NoteCount = 0;

    }
    public SYSTEM_CODE: string;
    public SUB_SYSTEM_CODE: string;
    public MODULE_CODE: string;
    public CompCode: number;
    public BranchCode: number;
    public ISActive: boolean;
    public NoteCount: number;
}
class NoteificationsModel extends SecurityClass {
    constructor() {
        super();

        this.MODULE_CODE = "";
        this.MODULE_DESCE = "";
        this.MODULE_DESCA = "";
        this.NoteCount = 0;

    }
    public MODULE_CODE: string;
    public MODULE_DESCE: string;
    public MODULE_DESCA: string;
    public NoteCount: number;
}


class G_Codes extends SecurityClass {
    constructor() {
        super();

        this.ID = 0;
        this.CodeType = "";
        this.CodeValue = 0;
        this.DescA = "";
        this.DescE = "";
        this.SubCode = "";
        this.Remarks = "";
    }

    public ID: number;
    public CodeType: string;
    public CodeValue: number;
    public DescA: string;
    public DescE: string;
    public SubCode: string;
    public Remarks: string;
}




class KQ_GetAlertNoteLog extends SecurityClass {
    constructor() {
        super();
        this.NoteType = 0;
        this.NoteSubType = 0;
        this.MemberID = 0;
        this.MsgDate = "";
        this.MsgText = "";
        this.IsSent = false;
        this.AlertID = 0;
    }
    public NoteType: number;
    public NoteSubType: number;
    public MemberID: number;
    public MsgDate: string;
    public MsgText: string;
    public IsSent: boolean;
    public AlertID: number;
}
       
class SessionStorage extends SecurityClass {
    constructor() {
        super();
        this.ID = 0;
        this.ID_Device = "";
        this.Name = "";
        this.Phone = "";
        this.TR_Type = "";
        this.page = 0;
        this.TurnNumber = 0;
        this.ServiceId = 0;
        this.Id_Cust = 0;
    }
    public ID: number;
    public ID_Device: string;
    public Name: string;
    public Phone: string;
    public TR_Type: string;
    public page: number;
    public TurnNumber: number;
    public ServiceId: number;
    public Id_Cust: number;
}


