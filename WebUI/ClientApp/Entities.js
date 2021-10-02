var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var SecurityClass = (function () {
    function SecurityClass() {
    }
    return SecurityClass;
}());
var FavModules = (function () {
    function FavModules() {
    }
    return FavModules;
}());
var SystemParameters = (function () {
    function SystemParameters() {
    }
    return SystemParameters;
}());
var APISessionRecord = (function () {
    function APISessionRecord() {
    }
    APISessionRecord.prototype.SetAPISession = function (key, value) {
        $.ajax({
            url: Url.Action("SetSessionRecordValue", "Session"),
            data: { propertyName: key, value: value },
            async: false
        });
    };
    APISessionRecord.prototype.GetAPISession = function (key) {
        var value = $.ajax({
            url: Url.Action("GetSessionRecordValue", "Session"),
            data: { propertyName: key },
            async: false
        }).responseJSON.result;
        return value;
    };
    Object.defineProperty(APISessionRecord.prototype, "SystemCode", {
        get: function () {
            return this.GetAPISession("SystemCode");
        },
        set: function (value) {
            this.SetAPISession("SystemCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "SubSystemCode", {
        get: function () {
            return this.GetAPISession("SubSystemCode");
        },
        set: function (value) {
            this.SetAPISession("SubSystemCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "Modulecode", {
        get: function () {
            return this.GetAPISession("Modulecode");
        },
        set: function (value) {
            this.SetAPISession("Modulecode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "UserCode", {
        get: function () {
            return this.GetAPISession("UserCode");
        },
        set: function (value) {
            this.SetAPISession("UserCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "Token", {
        get: function () {
            return this.GetAPISession("Token");
        },
        set: function (value) {
            this.SetAPISession("Token", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "CompCode", {
        get: function () {
            return this.GetAPISession("CompCode");
        },
        set: function (value) {
            this.SetAPISession("CompCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "BranchCode", {
        get: function () {
            return this.GetAPISession("BranchCode");
        },
        set: function (value) {
            this.SetAPISession("BranchCode", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "CurrentYear", {
        get: function () {
            return this.GetAPISession("CurrentYear");
        },
        set: function (value) {
            this.SetAPISession("CurrentYear", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APISessionRecord.prototype, "ScreenLanguage", {
        get: function () {
            return this.GetAPISession("ScreenLanguage");
        },
        set: function (value) {
            this.SetAPISession("ScreenLanguage", value);
        },
        enumerable: true,
        configurable: true
    });
    return APISessionRecord;
}());
var EntityContext = (function () {
    function EntityContext() {
    }
    return EntityContext;
}());
var ResponseResult = (function () {
    function ResponseResult() {
    }
    return ResponseResult;
}());
var BaseResponse = (function () {
    function BaseResponse() {
    }
    return BaseResponse;
}());
var BaseReservations = (function () {
    function BaseReservations() {
    }
    return BaseReservations;
}());
var Table_Hagz = (function (_super) {
    __extends(Table_Hagz, _super);
    function Table_Hagz() {
        var _this = _super.call(this) || this;
        _this.ID = 0;
        _this.Num = 0;
        _this.Name = "";
        _this.Phone = "";
        _this.Type = "";
        _this.Message = "";
        _this.cheak = false;
        _this.StatusFlag = "";
        _this.RegistredTime = "";
        return _this;
    }
    return Table_Hagz;
}(SecurityClass));
var Display_App = (function (_super) {
    __extends(Display_App, _super);
    function Display_App() {
        var _this = _super.call(this) || this;
        _this.GetSts = new GetStatus();
        _this.Table_Hagz = new Array();
        return _this;
    }
    return Display_App;
}(SecurityClass));
var GetStatus = (function () {
    function GetStatus() {
        this.TrNo = 0;
        this.StatusName = "";
    }
    return GetStatus;
}());
var GetSts = (function () {
    function GetSts() {
        this.TrNo = 0;
        this.StatusName = "";
    }
    return GetSts;
}());
var ClientDto = (function () {
    function ClientDto() {
        this.PhoneNumber = "";
        this.FullName = "";
        this.PlayerId = "";
        this.Token = "";
    }
    return ClientDto;
}());
var Reservations = (function (_super) {
    __extends(Reservations, _super);
    function Reservations() {
        var _this = _super.call(this) || this;
        _this.ClientId = 0;
        _this.ClientName = "";
        _this.Id = 0;
        _this.PhoneNumber = "";
        _this.RegistredTime = "";
        _this.ServiceId = 0;
        _this.StatusId = 0;
        _this.Token = "";
        _this.Type = "";
        _this.Status = "";
        _this.TurnNumber = 0;
        return _this;
    }
    return Reservations;
}(SecurityClass));
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super.call(this) || this;
        _this.EmployeeName = "";
        _this.Id = 0;
        _this.IsAvailable = true;
        return _this;
    }
    return Employee;
}(SecurityClass));
var updateemploye = (function () {
    function updateemploye() {
        this.Id = 0;
        this.IsAvailable = true;
    }
    return updateemploye;
}());
var Userclose = (function () {
    function Userclose() {
        this.ReservationId = 0;
        this.StatusId = 0;
    }
    return Userclose;
}());
var UserAdd = (function () {
    function UserAdd() {
        this.FullName = "";
        this.PhoneNumber = "";
        this.ServiceId = 0;
    }
    return UserAdd;
}());
var Table_Tim_work = (function (_super) {
    __extends(Table_Tim_work, _super);
    function Table_Tim_work() {
        var _this = _super.call(this) || this;
        _this.ID = 0;
        _this.Name = "";
        _this.Cheak = false;
        _this.StatusFlag = "";
        return _this;
    }
    return Table_Tim_work;
}(SecurityClass));
var G_SearchForm = (function (_super) {
    __extends(G_SearchForm, _super);
    function G_SearchForm() {
        var _this = _super.call(this) || this;
        _this.SearchFormCode = "";
        _this.ReturnDataPropertyName = "";
        _this.Description = "";
        _this.SerachFormTitle = "";
        _this.IsFullScreen = false;
        _this.Left = 0;
        _this.Top = 0;
        _this.Height = 0;
        _this.Width = 0;
        _this.PageSize = 0;
        _this.DataSourceName = "";
        _this.SearchInterval = 0;
        _this.SerachFormTitleA = "";
        return _this;
    }
    return G_SearchForm;
}(SecurityClass));
var G_SearchFormModule = (function (_super) {
    __extends(G_SearchFormModule, _super);
    function G_SearchFormModule() {
        var _this = _super.call(this) || this;
        _this.SystemCode = "";
        _this.SubSystemCode = "";
        _this.ModuleCode = "";
        _this.ControlCode = "";
        _this.SearchFormCode = "";
        return _this;
    }
    return G_SearchFormModule;
}(SecurityClass));
var G_SearchFormSetting = (function (_super) {
    __extends(G_SearchFormSetting, _super);
    function G_SearchFormSetting() {
        var _this = _super.call(this) || this;
        _this.SearchFormSettingID = 0;
        _this.SearchFormCode = "";
        _this.FieldSequence = 0;
        _this.DataMember = "";
        _this.AlternateDataMember = "";
        _this.FieldTitle = "";
        _this.IsReadOnly = false;
        _this.Datatype = 0;
        _this.FieldWidth = 0;
        _this.UseSelectionOperator = false;
        _this.Language = 0;
        _this.FieldTitleA = "";
        return _this;
    }
    return G_SearchFormSetting;
}(SecurityClass));
var G_STANDARD = (function (_super) {
    __extends(G_STANDARD, _super);
    function G_STANDARD() {
        var _this = _super.call(this) || this;
        _this.BACKUP_PATH = "";
        _this.BACKUP_DB = "";
        _this.BACKUP_COPIES = 0;
        return _this;
    }
    return G_STANDARD;
}(SecurityClass));
var G_SUB_SYSTEMS = (function (_super) {
    __extends(G_SUB_SYSTEMS, _super);
    function G_SUB_SYSTEMS() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.SUB_SYSTEM_DESCA = "";
        _this.SUB_SYSTEM_DESCE = "";
        _this.ICON_PATH = "";
        _this.APPNAME = "";
        _this.APPVERSION = "";
        return _this;
    }
    return G_SUB_SYSTEMS;
}(SecurityClass));
var G_SYSTEM = (function (_super) {
    __extends(G_SYSTEM, _super);
    function G_SYSTEM() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SYSTEM_DESCE = "";
        _this.SYSTEM_DESCA = "";
        _this.DB_NAME = "";
        _this.ICON_PATH = "";
        _this.INIT_ORDER = 0;
        _this.VER_PATH = "";
        return _this;
    }
    return G_SYSTEM;
}(SecurityClass));
var G_USER_BRANCH = (function (_super) {
    __extends(G_USER_BRANCH, _super);
    function G_USER_BRANCH() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.COMP_CODE = 0;
        _this.BRA_CODE = 0;
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        return _this;
    }
    return G_USER_BRANCH;
}(SecurityClass));
var G_USER_COMPANY = (function (_super) {
    __extends(G_USER_COMPANY, _super);
    function G_USER_COMPANY() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.COMP_CODE = 0;
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        return _this;
    }
    return G_USER_COMPANY;
}(SecurityClass));
var G_USER_LOG = (function (_super) {
    __extends(G_USER_LOG, _super);
    function G_USER_LOG() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE;
        _this.SYSTEM_YEAR = 0;
        _this.MODULE_CODE = "";
        _this.COMP_CODE = 0;
        _this.LOG_DATE = "";
        return _this;
    }
    return G_USER_LOG;
}(SecurityClass));
var G_USER_MODULE = (function (_super) {
    __extends(G_USER_MODULE, _super);
    function G_USER_MODULE() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.EXECUTE = false;
        _this.CREATE = false;
        _this.EDIT = false;
        _this.DELETE = false;
        _this.PRINT = false;
        _this.VIEW = false;
        _this.CUSTOM1 = false;
        _this.CUSTOM2 = false;
        _this.CUSTOM3 = false;
        _this.CUSTOM4 = false;
        _this.CUSTOM5 = false;
        _this.CUSTOM6 = false;
        _this.CUSTOM7 = false;
        _this.CUSTOM8 = false;
        _this.CUSTOM9 = false;
        _this.ViewImages = false;
        _this.EditImages = false;
        return _this;
    }
    return G_USER_MODULE;
}(SecurityClass));
var G_USER_SUB_SYSTEM = (function (_super) {
    __extends(G_USER_SUB_SYSTEM, _super);
    function G_USER_SUB_SYSTEM() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.EXECUTE = false;
        _this.FILTER_STRING = "";
        return _this;
    }
    return G_USER_SUB_SYSTEM;
}(SecurityClass));
var G_USER_SYSTEM = (function (_super) {
    __extends(G_USER_SYSTEM, _super);
    function G_USER_SYSTEM() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.SYSTEM_CODE = "";
        _this.EXECUTE = false;
        _this.FILTER_STRING = "";
        return _this;
    }
    return G_USER_SYSTEM;
}(SecurityClass));
var G_USERS = (function (_super) {
    __extends(G_USERS, _super);
    function G_USERS() {
        var _this = _super.call(this) || this;
        _this.USER_CODE = "";
        _this.USER_PASSWORD = "";
        _this.USER_ACTIVE = false;
        _this.USER_NAME = "";
        _this.CompCode = 0;
        _this.REGION_CODE = "";
        _this.GRP_CODE = 0;
        _this.USER_PASSWORD2 = "";
        _this.USER_PASSWORD3 = "";
        _this.CHANGE_PASS_DATE = "";
        _this.MANUAL_VC = "";
        _this.MASTER_USER_CODE = "";
        _this.City = "";
        _this.Address = "";
        _this.Tel = "";
        _this.Fax = "";
        _this.Mobile = "";
        _this.Email = "";
        _this.DepartmentName = "";
        _this.JobTitle = "";
        _this.USER_TYPE = 0;
        _this.ManagedBy = "";
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.Tokenid = "";
        _this.LastLogin = "";
        return _this;
    }
    return G_USERS;
}(SecurityClass));
var I_Control = (function () {
    function I_Control() {
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
    return I_Control;
}());
var G_AlertLog = (function (_super) {
    __extends(G_AlertLog, _super);
    function G_AlertLog() {
        var _this = _super.call(this) || this;
        _this.AlertID = 0;
        _this.AlertTypeID = 0;
        _this.AlertSubTypeID = 0;
        _this.MemberID = 0;
        _this.MsgType = 0;
        _this.MsgDate = "";
        _this.MsgHeader = "";
        _this.MsgBody = "";
        _this.IsSent = false;
        _this.SendDate = "";
        _this.MobileNo = "";
        _this.Email = "";
        _this.SystemCode = "";
        _this.CompCode = 0;
        _this.TrID = 0;
        _this.AlertType = "";
        return _this;
    }
    return G_AlertLog;
}(SecurityClass));
var G_AlertControl = (function (_super) {
    __extends(G_AlertControl, _super);
    function G_AlertControl() {
        var _this = _super.call(this) || this;
        _this.Compcode = 0;
        _this.SystemCode = "";
        _this.EMAIL_SSL = false;
        _this.EMAIL_Authentication = false;
        _this.EMAIL_SenderName = "";
        _this.EMAIL_Sender = "";
        _this.EMAIL_SenderPassword = "";
        _this.EMAIL_SendorPort = 0;
        _this.EMAIL_SenderSMTP = "";
        _this.SMS_UserName = "";
        _this.SMS_SenderName = "";
        _this.SMS_Password = "";
        _this.MobileNoPreFex = "";
        return _this;
    }
    return G_AlertControl;
}(SecurityClass));
var G_ModuleHelp = (function (_super) {
    __extends(G_ModuleHelp, _super);
    function G_ModuleHelp() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.HelpBody_Ar = "";
        _this.HelpBody_En = "";
        return _this;
    }
    return G_ModuleHelp;
}(SecurityClass));
var G_Noteifications = (function (_super) {
    __extends(G_Noteifications, _super);
    function G_Noteifications() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.MODULE_DESCE = "";
        _this.MODULE_DESCA = "";
        _this.Remarks = "";
        _this.ISActive = false;
        _this.ActiveIcon = "";
        _this.InActiveIcon = "";
        _this.PageName = "";
        _this.DisplayOrder = 0;
        return _this;
    }
    return G_Noteifications;
}(SecurityClass));
var G_NotificationCompany = (function (_super) {
    __extends(G_NotificationCompany, _super);
    function G_NotificationCompany() {
        var _this = _super.call(this) || this;
        _this.SYSTEM_CODE = "";
        _this.SUB_SYSTEM_CODE = "";
        _this.MODULE_CODE = "";
        _this.CompCode = 0;
        _this.BranchCode = 0;
        _this.ISActive = false;
        _this.NoteCount = 0;
        return _this;
    }
    return G_NotificationCompany;
}(SecurityClass));
var NoteificationsModel = (function (_super) {
    __extends(NoteificationsModel, _super);
    function NoteificationsModel() {
        var _this = _super.call(this) || this;
        _this.MODULE_CODE = "";
        _this.MODULE_DESCE = "";
        _this.MODULE_DESCA = "";
        _this.NoteCount = 0;
        return _this;
    }
    return NoteificationsModel;
}(SecurityClass));
var G_Codes = (function (_super) {
    __extends(G_Codes, _super);
    function G_Codes() {
        var _this = _super.call(this) || this;
        _this.ID = 0;
        _this.CodeType = "";
        _this.CodeValue = 0;
        _this.DescA = "";
        _this.DescE = "";
        _this.SubCode = "";
        _this.Remarks = "";
        return _this;
    }
    return G_Codes;
}(SecurityClass));
var KQ_GetAlertNoteLog = (function (_super) {
    __extends(KQ_GetAlertNoteLog, _super);
    function KQ_GetAlertNoteLog() {
        var _this = _super.call(this) || this;
        _this.NoteType = 0;
        _this.NoteSubType = 0;
        _this.MemberID = 0;
        _this.MsgDate = "";
        _this.MsgText = "";
        _this.IsSent = false;
        _this.AlertID = 0;
        return _this;
    }
    return KQ_GetAlertNoteLog;
}(SecurityClass));
var SessionStorage = (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage() {
        var _this = _super.call(this) || this;
        _this.ID = 0;
        _this.BranchCode = 0;
        _this.ID_Device = "";
        _this.Name = "";
        _this.Phone = "";
        _this.TR_Type = "";
        _this.page = 0;
        _this.TurnNumber = 0;
        _this.ServiceId = 0;
        _this.Id_Cust = 0;
        return _this;
    }
    return SessionStorage;
}(SecurityClass));
var G_Branch = (function (_super) {
    __extends(G_Branch, _super);
    function G_Branch() {
        var _this = _super.call(this) || this;
        _this.BranchCode = 0;
        _this.NameA = "";
        _this.NameE = "";
        return _this;
    }
    return G_Branch;
}(SecurityClass));
//# sourceMappingURL=Entities.js.map