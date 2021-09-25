
$(document).ready(() => {
    // ;
    Login.InitalizeComponent();
})

namespace Login {


    var Client: ClientDto = new ClientDto();
    var User_Add: UserAdd = new UserAdd();
    var User: Userclose = new Userclose();
    var Cuts_Display_App: Display_App = new Display_App();
    var SessionStorages: Array<SessionStorage> = new Array<SessionStorage>();
    var Sessions: SessionStorage = new SessionStorage();

    


    var GetStat: GetStatus = new GetStatus();

    var Details_Employee: Array<Table_Tim_work> = new Array<Table_Tim_work>();
    var Details_API: Array<Table_Hagz> = new Array<Table_Hagz>();
    var Details_Check: Array<Reservations> = new Array<Reservations>();
    var sys: SystemTools = new SystemTools();

    var txtName: HTMLInputElement;
    var txtPhone: HTMLInputElement;

    var submit: HTMLButtonElement;
    var btnMan: HTMLButtonElement;
    var btnChild: HTMLButtonElement;
    var btnContinue: HTMLButtonElement;
    var butConfirm: HTMLButtonElement;
    var butRemove: HTMLButtonElement;
    var butBack: HTMLButtonElement;

    var TR_Type = '1';
    var StatusId;
    var close;
    var MyTimer;

    var flag_corse;
    var ID_Device;

    export function InitalizeComponent() {

        ID_Device = Get_ID_Device();
                       
        InitalizeControls();
        InitalizeEvents();
        Get_Uesr_Session();


        cheakcloseDay()
        if (close == '0') {
            alert('المحل مغلق');
            $('#Div_Login').removeClass('display_none');
            $('#Div_Type').addClass('display_none');
            $('#Div_Confirm').addClass('display_none');
            $('#Div_Home').addClass('display_none');
            $('#Div_Employess').addClass('display_none');

            $('#butBack').addClass('display_none');
            $('#butRemove').addClass('display_none');
            $('#txt_titel').html('قائمة التسجيل');
        }

    }
    function InitalizeControls() {
        txtName = document.getElementById("txtName") as HTMLInputElement;
        txtPhone = document.getElementById("txtPhone") as HTMLInputElement;

        submit = document.getElementById("submit") as HTMLButtonElement;
        btnMan = document.getElementById("btnMan") as HTMLButtonElement;
        btnChild = document.getElementById("btnChild") as HTMLButtonElement;
        btnContinue = document.getElementById("btnContinue") as HTMLButtonElement;
        butConfirm = document.getElementById("butConfirm") as HTMLButtonElement;
        butRemove = document.getElementById("butRemove") as HTMLButtonElement;
        butBack = document.getElementById("butBack") as HTMLButtonElement;



    }
    function InitalizeEvents() {

        submit.onclick = submit_onclick;
        btnMan.onclick = btnMan_onclick;
        btnChild.onclick = btnChild_onclick;
        btnContinue.onclick = btnContinue_onclick;
        butConfirm.onclick = butConfirm_onclick;
        butRemove.onclick = butRemove_onclick;
        butBack.onclick = butBack_onclick;

    }

    function Get_Uesr_Session() {



        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("Home", "Get_Uesr_Session"),
            data: { ID_Device: ID_Device },
            success: (d) => {
                let result = d as BaseResponse;
                if (result.IsSuccess) {
                    SessionStorages = result.Response as Array<SessionStorage>;
                    debugger
                    if (SessionStorages.length > 0) {
                                                  
                        sessionStorage.setItem("Name", SessionStorages[0].Name);
                        sessionStorage.setItem("Phone", SessionStorages[0].Phone);
                        sessionStorage.setItem("page", "" + SessionStorages[0].page + "");
                        sessionStorage.setItem("TR_Type", SessionStorages[0].TR_Type);
                        sessionStorage.setItem("TurnNumber", "" + SessionStorages[0].TurnNumber + "");
                        sessionStorage.setItem("ServiceId", "" + SessionStorages[0].ServiceId + "");
                        sessionStorage.setItem("Id", "" + SessionStorages[0].Id_Cust + "");
                        txtName.value = SessionStorages[0].Name.toString();
                        txtPhone.value =  SessionStorages[0].Phone.toString();

                        if (SessionStorages[0].Phone == null) {
                            sessionStorage.setItem("page", "2");
                            LoadPage();
                        }
                        else {
                            LoadPage();
                        }


                    }
                    else {

                        sessionStorage.setItem("page", "1");
                        txtName.value = '';
                        txtPhone.value = '';
                        LoadPage();

                    }


                }

            }
        });



    }

    function Get_ID_Device() {

        var navigator_info = window.navigator;
        var screen_info = window.screen;
        var uid = navigator_info.mimeTypes.length.toString();
        uid += navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid += screen_info.height || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';


        return uid;
    }

    function setTime() {
        MyTimer = setTimeout(function () {


            Refresh()
            setTime();
        }, 15000);


    }

    function cheakcloseDay() {

        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("Home", "cheakcloseDay"),
            success: (d) => {
                let result = d as BaseResponse;
                if (result.IsSuccess) {

                    close = result.Response;

                }
            }
        });

    }

    function LoadPage() {


        var page = sessionStorage.getItem("page");
                   
        if (page == '2') {

            clearTimeout(MyTimer);

            $('#Div_Type').removeClass('display_none');
            $('#Div_Login').addClass('display_none');
            $('#Div_Confirm').addClass('display_none');
            $('#Div_Home').addClass('display_none');
            $('#Div_Employess').addClass('display_none');


            $('#butBack').removeClass('display_none');
            $('#butRemove').addClass('display_none');

            $('#txt_titel').html('أختر نوع الخدمة');

        }
        else if (page == '3') {

            clearTimeout(MyTimer);

            TR_Type = sessionStorage.getItem("TR_Type");

            $('#Div_Type').addClass('display_none');
            $('#Div_Login').addClass('display_none');
            $('#Div_Confirm').addClass('display_none');
            $('#Div_Home').addClass('display_none');
            $('#Div_Employess').removeClass('display_none');


            $('#butBack').removeClass('display_none');
            $('#butRemove').addClass('display_none');

            $('#txt_titel').html('قائمة الحضور');

            Disbly_Emb();


        }
        else if (page == '4') {

            clearTimeout(MyTimer);

            $('#Div_Type').addClass('display_none');
            $('#Div_Login').addClass('display_none');
            $('#Div_Employess').addClass('display_none');
            $('#Div_Home').addClass('display_none');
            $('#Div_Confirm').removeClass('display_none');


            $('#butBack').removeClass('display_none');
            $('#butRemove').addClass('display_none');
            $('#txt_titel').html('تأكيد الحجز');

            Cheack_Num_Confirm();
        }
        else if (page == '5') {

            TR_Type = sessionStorage.getItem("TR_Type");

            $('#Div_Type').addClass('display_none');
            $('#Div_Login').addClass('display_none');
            $('#Div_Employess').addClass('display_none');
            $('#Div_Confirm').addClass('display_none');
            $('#Div_Home').removeClass('display_none');


            $('#butBack').addClass('display_none');
            $('#butRemove').removeClass('display_none');
            $('#txt_titel').html('معرفة دورك');

            Refresh();

            setTime();

        }
        else {

            clearTimeout(MyTimer);

            $('#Div_Login').removeClass('display_none');
            $('#Div_Type').addClass('display_none');
            $('#Div_Confirm').addClass('display_none');
            $('#Div_Home').addClass('display_none');
            $('#Div_Employess').addClass('display_none');

            $('#butBack').addClass('display_none');
            $('#butRemove').addClass('display_none');

            $('#txt_titel').html('قائمة التسجيل');


        }




    }

    function submit_onclick() {


        if (txtName.value.trim() != '' && txtPhone.value.trim() != '') {

            cheakcloseDay()
            if (close == 0) {
                alert('لا يمكنك تسجيل الدخول لانه المحل مغلق')
            }
            else {

                Insert_SessionStorage();

            }



        }
        else {
            alert('برجاء ملئ الحقول الفارغة بالبيانات');
        }
    }

    function Insert_SessionStorage() {

        Sessions = new SessionStorage();

        Sessions.ID_Device = ID_Device;
        Sessions.Name = txtName.value;
        Sessions.Phone = txtPhone.value;
        Sessions.page = 2;
        Sessions.TR_Type = "";
        Sessions.ServiceId = 0;
        Sessions.TurnNumber = 0;
        Sessions.Id_Cust = 0;
                      
        
        Ajax.Callsync({
            type: "Post",
            url: sys.apiUrl("Home", "Insert_SessionStorage"),
            data: JSON.stringify(Sessions),
            success: (d) => {      
                let result = d as BaseResponse;
                if (result.IsSuccess) {
                   
                    $('#Div_Type').removeClass('display_none');
                    $('#Div_Login').addClass('display_none');
                    $('#Div_Confirm').addClass('display_none');
                    $('#Div_Home').addClass('display_none');
                    $('#Div_Employess').addClass('display_none');


                    $('#butBack').removeClass('display_none');
                    $('#butRemove').addClass('display_none');

                    $('#txt_titel').html('أختر نوع الخدمة');

                    sessionStorage.setItem("page", "2");

                    sessionStorage.setItem("Name", txtName.value);

                    sessionStorage.setItem("Phone", txtPhone.value);

                }

            }
        });

    }

    function btnMan_onclick() {


        TR_Type = '1';

        sessionStorage.setItem("TR_Type", TR_Type);

        $('#Div_Type').addClass('display_none');
        $('#Div_Login').addClass('display_none');
        $('#Div_Confirm').addClass('display_none');
        $('#Div_Home').addClass('display_none');
        $('#Div_Employess').removeClass('display_none');


        $('#butBack').removeClass('display_none');
        $('#butRemove').addClass('display_none');

        $('#txt_titel').html('قائمة الحضور');

        Disbly_Emb();

        sessionStorage.setItem("page", "3");



    }

    function btnChild_onclick() {


        TR_Type = '2';

        sessionStorage.setItem("TR_Type", TR_Type);


        $('#Div_Type').addClass('display_none');
        $('#Div_Login').addClass('display_none');
        $('#Div_Confirm').addClass('display_none');
        $('#Div_Home').addClass('display_none');
        $('#Div_Employess').removeClass('display_none');


        $('#butBack').removeClass('display_none');
        $('#butRemove').addClass('display_none');

        $('#txt_titel').html('قائمة الحضور');

        Disbly_Emb();

        sessionStorage.setItem("page", "3");

    }

    function Disbly_Emb() {


        $("#div_Emb").html("");
        Details_Employee = new Array<Table_Tim_work>();
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("Home", "GetAllEmb_InApp"),
            data: { TR_Type: TR_Type, ID_Device: ID_Device },   
            success: (d) => {
                ;
                let result = d as BaseResponse;
                Details_Employee = result.Response as Array<Table_Tim_work>;


                for (var i = 0; i < Details_Employee.length; i++) {

                    BuildControls(i);

                    $('#id_' + i).val(Details_Employee[i].ID)
                    $('#label_' + i).html(Details_Employee[i].Name)

                    Details_Employee[i].Cheak == true ? $('#checkbox_' + i).prop("checked", true) : $('#checkbox_' + i).prop("checked", false);




                }

            }
        });
    }

    function BuildControls(cnt: number) {
        var html;

        html = '<div id="But_' + cnt + '" class="col-sm-12 col-md-12 col-lg-12 col-xl-12 checkbox_Div">' +
            '<input id="id_' + cnt + '" class=" display_none  " type = "text"  /> ' +
            '<input id="checkbox_' + cnt + '" disabled Data-Num="' + cnt + '" class="col-sm-2 col-md-2 col-lg-2 col-xl-2   checkbox  check " type = "checkbox" /> ' +

            '<label id="label_' + cnt + '" class="col-sm-8 col-md-8 col-lg-8 col-xl-8 checkbox_label  " > سامح البحيري  ' +
            '</div > ';


        $("#div_Emb").append(html);

    }

    function btnContinue_onclick() {

        $('#Div_Type').addClass('display_none');
        $('#Div_Login').addClass('display_none');
        $('#Div_Employess').addClass('display_none');
        $('#Div_Home').addClass('display_none');
        $('#Div_Confirm').removeClass('display_none');


        $('#butBack').removeClass('display_none');
        $('#butRemove').addClass('display_none');
        $('#txt_titel').html('تأكيد الحجز');

        sessionStorage.setItem("page", "4");

        Cheack_Num_Confirm();

    }

    function butConfirm_onclick() {

        var r = confirm('هل تود فعلا بتاكيد الحجز');
        if (r == true) {

            $('#Div_Type').addClass('display_none');
            $('#Div_Login').addClass('display_none');
            $('#Div_Employess').addClass('display_none');
            $('#Div_Confirm').addClass('display_none');
            $('#Div_Home').removeClass('display_none');


            $('#butBack').addClass('display_none');
            $('#butRemove').removeClass('display_none');
            $('#txt_titel').html('معرفة دورك');

            insert_Cust();



            sessionStorage.setItem("page", "5");



            setTime();


        }
        else {



        }

    }

    function insert_Cust() {
        debugger

        let Name = sessionStorage.getItem("Name");
        let Phone = sessionStorage.getItem("Phone");
        let Type = sessionStorage.getItem("TR_Type");



        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("Home", "insert_Table_on_App"),
            data: { Name: Name, Phone: Phone, Type: Type, Message: "حجز خارجي", TR_Type: Type ,ID_Device: ID_Device},
            success: (d) => {

                let result = d as BaseResponse;
                if (result.IsSuccess) {
                    Details_API = result.Response as Array<Table_Hagz>;


                    sessionStorage.setItem("TurnNumber", Details_API[0].Num.toString());
                    sessionStorage.setItem("ServiceId", Details_API[0].Type.toString());
                    sessionStorage.setItem("Id", Details_API[0].ID.toString());

                    $('#label_Num').html(Details_API[0].Num.toString());

                    Display();

                }
            }
        });

    }

    function Refresh() {

        Display();

        let TurnNumber = sessionStorage.getItem("TurnNumber");
        $('#label_Num').html(TurnNumber);


    }

    function Cheack_Num_Confirm() {

        TR_Type = sessionStorage.getItem("TR_Type");

        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("Home", "Cheack_Num_Confirm"),
            data: { TrType: TR_Type, ID_Device: ID_Device },
            success: (d) => {
                let result = d as BaseResponse;
                if (result.IsSuccess) {
                    let num = result.Response;

                    if (TR_Type == '1') {

                        if (num == -1) {
                            num = 'يمكنك الدخول';
                        }


                    }
                    else {
                        if (num == -1) {
                            num = 'يمكنك الدخول';
                        }
                    }

                    $('#Confirm_Num_Dor').html(' في الانتظار : متاح الان ' + num.toString() + '');

                }

            }
        });

    }

    function butRemove_onclick() {

        var r = confirm('هل انت متاكد من اللغاء الحجز الخاص بك');
        if (r == true) {

            let ReservationId = sessionStorage.getItem("Id");

            Ajax.Callsync({
                type: "Get",
                url: sys.apiUrl("Home", "Delete_Cut"),
                data: { ID: ReservationId, ID_Device: ID_Device },
                success: (d) => {

                    sessionStorage.setItem("page", "2");
                    sessionStorage.setItem("TR_Type", "");
                    sessionStorage.setItem("Id", "");
                    LoadPage();

                    //txtName.value = '';
                    //txtPhone.value = '';

                }
            });




        }
        else {



        }

    }

    function chack_Remove() {

        Display();
        let Id = sessionStorage.getItem("Id");
        let check = Details_Check.filter(x => x.ServiceId == Number(TR_Type) && x.Id == Number(Id));


        if (check[0].StatusId == 3) {

            StatusId = 4;

        }
        else {
            StatusId = 2;
        }

    }

    function butBack_onclick() {

        debugger

        let page = sessionStorage.getItem("page");

        let New_Page = Number(Number(page) - 1);


        sessionStorage.setItem("page", New_Page.toString());

        LoadPage();


    }

    function Display() {
        Cuts_Display_App = new Display_App();
        let ID = sessionStorage.getItem("Id");
        Ajax.Callsync({
            type: "Get",
            url: sys.apiUrl("Home", "GetAll_App"),
            data: { TR_Type: TR_Type, ID: ID, ID_Device: ID_Device },
            success: (d) => {
                debugger;
                let result = d as BaseResponse;
                if (result.IsSuccess) {
                    debugger;
                    Cuts_Display_App = result.Response as Display_App;
                    GetStat = Cuts_Display_App.GetSts as GetStatus;
                    let id_Corse = 1;
                    Corse_ON_Active();
                    for (var i = 0; i < Cuts_Display_App.Table_Hagz.length; i++) {
                        if (Cuts_Display_App.Table_Hagz[i].cheak == true) {

                            Corse_Is_Active(id_Corse, Cuts_Display_App.Table_Hagz, i);

                            id_Corse++;

                            flag_corse = true;
                        }

                    }

                    $('#label_Num').html(GetStat.TrNo.toString());

                    $('#Home_Num_Dor').html('باقي علي دورك : ' + GetStat.StatusName.toString() + '');

                    if (GetStat.StatusName == "الحجز الخاص بك غير موجود او تم الانتهتء من الخدمة الرجاء الحجز مره اخري") {

                        let page = sessionStorage.getItem("page");

                        if (page == '5') {

                            alert('الحجز الخاص بك غير موجود او تم الانتهتء من الخدمة الرجاء الحجز مره اخري')

                            $('#Home_Num_Dor').html('باقي علي دورك : يمكنك الدخول');

                            sessionStorage.setItem("page", "2");
                            sessionStorage.setItem("TR_Type", "");
                            sessionStorage.setItem("Id", "");
                            LoadPage();

                            //txtName.value = '';
                            //txtPhone.value = '';

                        }

                    }




                }

            }
        });
             
    }

    function Corse_Is_Active(id_Corse: number, Details: Array<Table_Hagz>, i: number) {
        $('#Corse_' + id_Corse + '').attr('class', ' col-sm-3 col-md-3 col-lg-3 col-xl-3  jq-tab-title Corse_Is_Active');
        $('#Corse_' + id_Corse + '').attr('Data_ID', Details[i].ID);
        $('#Corse_' + id_Corse + '').attr('StatusId', '' + Details[i].cheak + '');
        $('#Corse_' + id_Corse + '').attr('Num', Details[i].Num);
        $('#Corse_' + id_Corse + '').attr('Phone', Details[i].Phone);
        $('#Corse_' + id_Corse + '').attr('DesName', Details[i].Name);
        //let timer = timeConverter(Details[i].RegistredTime)
        $('#Corse_' + id_Corse + '').attr('Time', Details[i].RegistredTime);
        $('#Corse_' + id_Corse + '').attr('Message', '');
        $('#Corse_' + id_Corse + '').attr('cheak', '' + Details[i].cheak + '');

        $('#text_Num_' + id_Corse + '').html('' + Details[i].Num + '');


        $('#disc_Corse').attr('style', '');
        $('#btnExit').attr('style', 'background-color: #b72020;width: 261px;font-size: 31px;');



    }

    function Corse_ON_Active() {
        for (var i = 1; i < 5; i++) {
            $('#Corse_' + i + '').attr('class', 'jq-tab-title Corse_ON_Active');
            $('#Corse_' + i + '').attr('Num', '');
            $('#Corse_' + i + '').attr('Phone', '');
            $('#Corse_' + i + '').attr('DesName', '');
            $('#Corse_' + i + '').attr('Message', '');
            $('#Corse_' + i + '').attr('cheak', 'false');
            $('#Corse_' + i + '').attr('style', '');
            $('#text_Num_' + i + '').html('');
        }



        if (TR_Type == "1") {

            for (var i = 1; i < 5; i++) {
                $('#Corse_' + i + '').removeClass('display_none');
            }

        }
        else {
            for (var i = 2; i < 5; i++) {
                $('#Corse_' + i + '').addClass('display_none');
            }
        }

    }


}






