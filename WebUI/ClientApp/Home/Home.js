$(document).ready(function () {
    //debugger;
    Home.InitalizeComponent();
});
var Home;
(function (Home) {
    var url = 'http://barbersystemdb.gear.host';
    var TR_Type = "1";
    var Insert_Type;
    var AccountType = 1;
    var MSG_ID;
    var Details_Employee = new Array();
    var Details_API = new Array();
    var Details = new Array();
    var New_Details = new Array();
    var BilldIData = new Array();
    var ReportGrid = new JsGrid();
    var Model = new Table_Hagz();
    var User = new Userclose();
    var User_EMP = new updateemploye();
    var User_Add = new UserAdd();
    var sys = new SystemTools();
    var txt_Cust_Type;
    var btnback;
    var btnDelete;
    var btnPrint;
    var btnAdd;
    var btnEdit;
    var btnEnter;
    var btnChange;
    var btnExit;
    var ID_Add_Custmor;
    var ID_Add_E;
    var Close_Day;
    var myModal;
    var txt_NAME;
    var txt_MOBILE;
    var searchbutmemreport;
    //chkboxes
    var chkActive;
    var compcode; //SharedSession.CurrentEnvironment.CompCode;
    var IsNew;
    var index;
    //Selecteditem
    var Selecteditem;
    var CustomerIdUpdate = 0;
    var CustomerId;
    var sum_balance;
    var Debit;
    var Credit;
    var Valid = 0;
    var SearchDetails;
    var NewDetails = new Array();
    var modal;
    var Modal_close;
    var span;
    var flag_corse;
    var Name = "";
    var Phone = "";
    var Type = "";
    var Message = "";
    //var i;
    var veid = 0;
    var ID;
    var after_Corse;
    var ID_One_Cust;
    var Div_Num = 0;
    var flag_chack_Enter = true;
    function InitalizeComponent() {
        debugger;
        InitalizeControls();
        InitalizeEvents();
        InitializeGrid();
        Display();
        setTime();
        Close_Day.checked = true;
        //AddNew_Emp();
        Disbly_Emb();
    }
    Home.InitalizeComponent = InitalizeComponent;
    function InitalizeControls() {
        //debugger;
        btnExit = document.getElementById("btnExit");
        btnDelete = document.getElementById("btnDelete");
        btnPrint = document.getElementById("btnPrint");
        btnAdd = document.getElementById("btnAdd");
        btnChange = document.getElementById("btnChange");
        ID_Add_Custmor = document.getElementById("ID_Add_Custmor");
        ID_Add_E = document.getElementById("ID_Add_E");
        Close_Day = document.getElementById("Close_Day");
        myModal = document.getElementById("myModal");
        modal = document.getElementById("myModal");
        Modal_close = document.getElementById("Modal_close");
        span = document.getElementsByClassName("close")[0];
        //btnEdit = document.getElementById("btnedite") as HTMLButtonElement;
        btnEnter = document.getElementById("btnEnter");
        //btnback = document.getElementById("btnback") as HTMLButtonElement;
        txt_NAME = document.getElementById("txt_NAME");
        txt_MOBILE = document.getElementById("txt_NAssME");
        txt_Cust_Type = document.getElementById("txt_Cust_Type");
        searchbutmemreport = document.getElementById("searchbutmemreport");
        ////textBoxes
    }
    function InitalizeEvents() {
        debugger;
        btnDelete.onclick = btnDelete_onclick;
        btnPrint.onclick = btnPrint_onclick;
        btnAdd.onclick = btnAdd_onclick;
        btnChange.onclick = btnChange_onclick;
        btnExit.onclick = btnfinish_onclick;
        span.onclick = span_onclick;
        Modal_close.onclick = window_onclick;
        btnEnter.onclick = btnEnter_onClick;
        ID_Add_Custmor.onclick = ID_Add_Custmor_onClick;
        ID_Add_E.onclick = ID_Add_E_onClick;
        Close_Day.onchange = Close_Day_onClick;
        //btnback.onclick = btnback_onclick;
        //btnEdit.onclick = btnEdit_onclick;
        searchbutmemreport.onkeyup = _SearchBox_Change;
        $('.jq-tab-title').on('click', click_Corse);
    }
    //----------------------------------------------Grid-------------------  
    function InitializeGrid() {
        ReportGrid.ElementName = "ReportGrid";
        ReportGrid.PrimaryKey = "Id";
        ReportGrid.Paging = true;
        ReportGrid.PageSize = 50;
        ReportGrid.Sorting = true;
        ReportGrid.Editing = true;
        ReportGrid.Inserting = false;
        ReportGrid.OnRowDoubleClicked = DriverDoubleClick;
        ReportGrid.SelectedIndex = 1;
        ReportGrid.OnItemEditing = function () { };
        ReportGrid.Columns = [
            { title: "ID", name: "ClientId", type: "text", width: "60px", visible: false },
            { title: "ID", name: "Id", type: "text", width: "60px", visible: false },
            { title: "الرقم", name: "TurnNumber", type: "text", width: "30px", textField: "" },
            { title: "الاسم", name: "ClientName", type: "text", width: "80px" },
            { title: "رقم الجوال", name: "PhoneNumber", type: "text", width: "80px" },
            { title: "النوع", name: "Type", type: "text", width: "60px" },
            { title: "الوقت", name: "RegistredTime", type: "text", width: "60px" },
            { title: "الحاله", name: "Status", type: "text", width: "40px" },
        ];
    }
    function DriverDoubleClick() {
        debugger;
        Selecteditem = Details_API.filter(function (x) { return x.Id == Number(ReportGrid.SelectedKey); });
        show_div();
        $("#Customer_Detils").removeClass("display_none");
        $("#Add_Customer").addClass("display_none");
        var title = "رقم الزبون ( " + Selecteditem[0].TurnNumber + " )";
        var Labol = Selecteditem[0].ClientName;
        var img = "";
        var id_title = document.getElementById('id_title');
        var id_Labol = document.getElementById('id_Labol');
        id_title.innerHTML = title;
        id_Labol.innerHTML = Labol;
        chack_Enter_Cust();
    }
    function _SearchBox_Change() {
        debugger;
        if (searchbutmemreport.value != "") {
            var search_1 = searchbutmemreport.value.toLowerCase();
            SearchDetails = Details_API.filter(function (x) { return x.TurnNumber.toString().search(search_1) >= 0 || x.ClientName.toLowerCase().search(search_1) >= 0; } /*|| x.PhoneNumber.toLowerCase().search(search) >= 0*/);
            ReportGrid.DataSource = SearchDetails;
            ReportGrid.Bind();
        }
        else {
            ReportGrid.DataSource = Details_API;
            ReportGrid.Bind();
        }
    }
    //----------------------------------------------------------------------- 
    //----------------------------------------------Display-------------------
    function setTime() {
        setTimeout(function () {
            Display();
            setTime();
        }, 15000);
    }
    function Display() {
        debugger;
        Close_div();
        Details_API = new Array();
        Ajax.Callsync({
            type: "Get",
            url: (url + '/api/BarberReservation/GetAllReservation'),
            //data: { TR_Type: TR_Type },
            success: function (d) {
                debugger;
                var result = d;
                Details_API = result.Reservations;
                Details_API = Details_API.filter(function (x) { return x.ServiceId == Number(TR_Type); });
                var id_Corse = 1;
                Corse_ON_Active();
                for (var i = 0; i < Details_API.length; i++) {
                    if (Details_API[i].StatusId == 3) {
                        Corse_Is_Active(id_Corse, Details_API, i);
                        var index = Details_API.map(function (e) { return e.TurnNumber; }).indexOf(Details_API[i].TurnNumber);
                        delete Details_API[index];
                        id_Corse++;
                        flag_corse = true;
                    }
                }
                if (flag_corse == false) {
                    NO_Cust_on_Corse();
                }
                reindexArray(Details_API);
                var length = Details_API.length;
                length -= 1;
                ID = length < 0 ? 0 : Details_API[length].Id;
                //InitializeGrid();
                //Details_API =  Details_API.filter(x => x.TurnNumber != 1);
                for (var i = 0; i < Details_API.length; i++) {
                    Details_API[i].RegistredTime = timeConverter(Details_API[i].RegistredTime);
                    Details_API[i].Type = Details_API[i].ServiceId == 1 ? 'راجل' : 'طفل';
                    Details_API[i].Status = Details_API[i].StatusId != 3 ? 'في الانتظار' : '';
                }
                try {
                    if (Details_API.length != 0) {
                        ID_One_Cust = Details_API[0].Id;
                    }
                }
                catch (e) {
                }
                ReportGrid.DataSource = Details_API;
                ReportGrid.Bind();
                if (TR_Type == '1') {
                    $('#text_type').html('حجز ( الرجال )');
                }
                else {
                    $('#text_type').html('حجز ( ألاطفال )');
                }
            }
        });
        ID_Add_Custmor.disabled = false;
    }
    //----------------------------------------------------------------------- 
    //----------------------------------------------Empl-------------------
    function ID_Add_E_onClick() {
        Div_Num += 1;
        if (Div_Num % 2 == 0) {
            $('#div_Emb').addClass('display_none');
        }
        else {
            $('#div_Emb').removeClass('display_none');
            setTimeout(function () { $('#div_Emb').addClass('display_none'); Div_Num += 1; }, 20000);
        }
    }
    function BuildControls(cnt) {
        var html;
        html = '<button id="But_' + cnt + '" class="col-sm-2 col-md-2 col-lg-2 col-xl-2 checkbox_Div">' +
            '<input id="id_' + cnt + '" class=" display_none  " type = "text"  /> ' +
            '<input id="checkbox_' + cnt + '" Data-Num="' + cnt + '" class="col-sm-2 col-md-2 col-lg-2 col-xl-2 checkbox  " type = "checkbox" /> ' +
            '<label id="label_' + cnt + '" class="col-sm-8 col-md-8 col-lg-8 col-xl-8 checkbox_label  " > سامح البحيري  ' +
            '</button > ';
        $("#div_Emb").append(html);
        var checkbox = document.getElementById("checkbox_" + cnt);
        checkbox.onchange = checkbox_onchange;
    }
    function Disbly_Emb() {
        debugger;
        $("#div_Emb").html("");
        Details_Employee = new Array();
        Ajax.Callsync({
            type: "Get",
            url: (url + '/api/Employess/GetAllEmployees'),
            success: function (d) {
                debugger;
                var result = d;
                Details_Employee = result.Emps;
                for (var i = 0; i < Details_Employee.length; i++) {
                    BuildControls(i);
                    $('#id_' + i).val(Details_Employee[i].Id);
                    $('#label_' + i).html(Details_Employee[i].EmployeeName);
                    Details_Employee[i].IsAvailable == true ? $('#checkbox_' + i).prop("checked", true) : $('#checkbox_' + i).prop("checked", false);
                }
            }
        });
    }
    function checkbox_onchange() {
        var Num = $(this).attr('Data-Num');
        User_EMP = new updateemploye();
        User_EMP.Id = $('#id_' + Num).val();
        User_EMP.IsAvailable = $(this).is(':checked');
        var Name = $('#label_' + Num).html();
        Ajax.Callsync({
            type: "post",
            url: (url + '/api/Employess/UpdateStatus'),
            data: JSON.stringify(User_EMP),
            success: function (d) {
                alert('تم تعديل ( ' + Name + ' )');
            }
        });
    }
    //----------------------------------------------------------------------- 
    //----------------------------------------------Change Man or chrde-------------------
    function btnChange_onclick() {
        debugger;
        if (TR_Type == "2") {
            TR_Type = "1";
            btnChange.innerHTML = '<span class="glyphicon"> <img class="img-fluid" src="/img/testimonial/t1.png" alt="" style="border-radius: 4.25rem;box-shadow: 0 5px 15px rgb(255 165 0 / 75%);" ></span><span > <<< </span>الذهب الي حجز الاطفال';
        }
        else {
            TR_Type = "2";
            btnChange.innerHTML = '<span class="glyphicon"> <img class="img-fluid" src="/img/testimonial/t2.png" alt="" style="border-radius: 4.25rem;box-shadow: 0 5px 15px rgb(255 165 0 / 75%);" ></span><span > <<< </span>الذهب الي حجز الرجال';
        }
        Display();
    }
    //-----------------------------------------------------------------------
    //----------------------------------------------Add_Cust------------------- 
    function ID_Add_Custmor_onClick() {
        ID_Add_Custmor.disabled = true;
        $('#ID_Add_Custmor').addClass('display_none');
        insert_Table();
        //show_div(); 
        //$("#Add_Customer").removeClass("display_none");
        //$("#Customer_Detils").addClass("display_none");
    }
    function btnAdd_onclick() {
        insert_Table();
    }
    function Assign_Insert() {
        var ph = "010" + (Math.floor(Math.random() * 10000) + 1) + (Math.floor(Math.random() * 10000) + 1);
        if (txt_NAME.value == "") {
            Name = "اسمه اية...";
        }
        else {
            Name = txt_NAME.value;
        }
        if (txt_MOBILE.value == "") {
            Phone = ph;
        }
        else {
            Phone = txt_MOBILE.value;
        }
        TR_Type == '1' ? Type = "1" : Type = "2";
        Message = "Eslam";
        //if (txt_Cust_Type.value == "Null") {
        //    Errorinput(txt_Cust_Type);
        //    alert('يجب اختيار النوع');
        //    return veid = 1;
        //}
        //else {
        //    let ph = "010" + (Math.floor(Math.random() * 10000) + 1) + (Math.floor(Math.random() * 10000) + 1)
        //    if (txt_NAME.value == "") { Name = "اسمه اية..." } else { Name = txt_NAME.value; }
        //    if (txt_MOBILE.value == "") { Phone = ph } else { Phone = txt_MOBILE.value; }
        //    if (txt_Cust_Type.value == "0") { Type = "1"; Insert_Type = 1; }
        //    if (txt_Cust_Type.value == "1") { Type = "2"; Insert_Type = 2; }
        //    Message = "Eslam";
        //}
        return veid = 0;
    }
    function insert_Table() {
        debugger;
        Assign_Insert();
        if (veid != 1) {
            User_Add = new UserAdd();
            User_Add.FullName = Name;
            User_Add.PhoneNumber = Phone;
            User_Add.ServiceId = Number(Type);
            Ajax.Callsync({
                type: "POST",
                url: (url + '/api/BarberReservation/NewClientWithConfirmation'),
                data: JSON.stringify(User_Add),
                success: function (d) {
                    $('#ID_Add_Custmor').removeClass('display_none');
                    Display();
                    var Index = Details_API.length - 1;
                    Print(Details_API[Index].RegistredTime, Details_API[Index].TurnNumber, Details_API[Index].ClientName, Details_API[Index].PhoneNumber);
                }
            });
        }
    }
    //-----------------------------------------------------------------------
    //----------------------------------------------Corse------------------- 
    function NO_Cust_on_Corse() {
        $('#text_Corse').html('<br />لا يوجد اي زبون قاعد علي الكورسي');
        $('#disc_Corse').attr('style', 'margin-top: 38px;text-align: center;height: 135px;box-shadow: 0 5px 15px rgb(255 255 255);font-size: x-large;');
        $('#btnExit').attr('style', 'display: none;');
    }
    function Corse_Is_Active(id_Corse, Details, i) {
        $('#Corse_' + id_Corse + '').attr('class', ' col-sm-3 col-md-3 col-lg-3 col-xl-3  jq-tab-title Corse_Is_Active');
        $('#Corse_' + id_Corse + '').attr('Data_ID', Details[i].Id);
        $('#Corse_' + id_Corse + '').attr('StatusId', Details[i].StatusId);
        $('#Corse_' + id_Corse + '').attr('Num', Details[i].TurnNumber);
        $('#Corse_' + id_Corse + '').attr('Phone', Details[i].PhoneNumber);
        $('#Corse_' + id_Corse + '').attr('DesName', Details[i].ClientName);
        var timer = timeConverter(Details[i].RegistredTime);
        $('#Corse_' + id_Corse + '').attr('Time', timer);
        $('#Corse_' + id_Corse + '').attr('Message', '');
        $('#Corse_' + id_Corse + '').attr('cheak', '' + Details[i].StatusId + '');
        $('#text_Num_' + id_Corse + '').html('' + Details[i].TurnNumber + '');
        $('#disc_Corse').attr('style', '');
        $('#btnExit').attr('style', 'background-color: #b72020;width: 261px;font-size: 31px;');
        after_Corse = $('#Corse_1');
        //after_Corse = $(this); 
        //alert($(this).attr('Time'));
        after_Corse.attr('style', 'background: #00ffa1cc !important;border-radius: 46px 50px 70px 68px; box-shadow: 0 5px 15px rgb(0 255 55);height: 108px;');
        $('#text_Corse').html('( ' + after_Corse.attr('Time') + ' ) الرقم ( ' + after_Corse.attr('num') + ' )  <br />  ( ' + after_Corse.attr('desname') + ' ) الاسم <br />  ( ' + after_Corse.attr('phone') + ' ) التليفون <br /> ');
        $('#btnExit').attr('Data_ID', after_Corse.attr('Data_ID'));
        $('#btnExit').attr('StatusId', after_Corse.attr('StatusId'));
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
        flag_corse = false;
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
    function click_Corse() {
        if ($(this).attr('num') != '') {
            after_Corse.attr('style', '');
            after_Corse = $(this);
            $(this).attr('style', 'background: #00ffa1cc !important;border-radius: 46px 50px 70px 68px; box-shadow: 0 5px 15px rgb(0 255 55);height: 108px;');
            $('#text_Corse').html('( ' + after_Corse.attr('Time') + ' ) الرقم ( ' + $(this).attr('num') + ' ) <br />  ( ' + $(this).attr('desname') + ' ) الاسم <br />  ( ' + $(this).attr('phone') + ' ) التليفون <br /> ');
            $('#btnExit').attr('Data_ID', $(this).attr('Data_ID'));
        }
    }
    //----------------------------------------------------------------------- 
    //----------------------------------------------finish------------------- 
    function btnfinish_onclick() {
        debugger;
        var r = confirm('هل انتها من الحلاقه');
        if (r == true) {
            var id = $(this).attr('Data_ID');
            var StatusId = $(this).attr('StatusId');
            User = new Userclose();
            User.ReservationId = Number(id);
            User.StatusId = 4;
            //User.StatusId = 2;
            Ajax.Callsync({
                type: "POST",
                url: (url + '/api/BarberReservation/ReservationSystem'),
                data: JSON.stringify(User),
                success: function (d) {
                    debugger;
                    alert('تم');
                }
            });
            Display();
        }
        else {
        }
    }
    //----------------------------------------------------------------------- 
    //----------------------------------------------------Poup--------------------------
    function btnPrint_onclick() {
        Print(Selecteditem[0].RegistredTime, Selecteditem[0].TurnNumber, Selecteditem[0].ClientName, Selecteditem[0].PhoneNumber);
    }
    function btnDelete_onclick() {
        var r = confirm('هل تريد المسح');
        if (r == true) {
            User = new Userclose();
            User.ReservationId = Number(Selecteditem[0].Id);
            User.StatusId = 2;
            Ajax.Callsync({
                type: "POST",
                url: (url + '/api/BarberReservation/ReservationSystem'),
                data: JSON.stringify(User),
                success: function (d) {
                    debugger;
                    alert('تم');
                }
            });
            Display();
        }
        else {
        }
    }
    function btnEnter_onClick() {
        debugger;
        //var validation_cheak = Details.filter(x => x.cheak == true);
        //if (validation_cheak.length < 4) {
        //    debugger
        //    Enter_Customer(Selecteditem[0].ID);
        //    //Enter_Rows(Selecteditem[0].Num);
        //}
        //else {
        //    alert("العدد مكتمل يجب اخراج احد");
        //}
        //flag_chack_Enter = true;
        //if (!chack_Enter_Cust()) {
        //    Assign_Insert();
        //    if (veid != 1) {
        //        User_Add = new UserAdd();
        //        User_Add.FullName = Name;
        //        User_Add.PhoneNumber = Phone;
        //        User_Add.ServiceId = Number(Type);
        //        Ajax.Callsync({
        //            type: "POST",
        //            url: (url + '/api/BarberReservation/NewClientWithConfirmation'),
        //            data: JSON.stringify(User_Add),
        //            success: (d) => {
        //                flag_chack_Enter = false;
        //            }
        //        });
        //    }
        //}
        var validation_cheak;
        var flag_cheak = 0;
        for (var i = 1; i < 5; i++) {
            validation_cheak = $('#Corse_' + i + '').attr('cheak');
            if (validation_cheak == "3") {
                flag_cheak += 1;
            }
        }
        if (TR_Type == "1") {
            if (flag_cheak < 4) {
                debugger;
                Enter_Customer(Selecteditem[0].Id);
                Close_div();
            }
            else {
                alert(" العدد مكتمل في حجز الرجال يجب اخراج احد من علي الكرسي");
            }
        }
        else {
            if (flag_cheak < 1) {
                debugger;
                Enter_Customer(Selecteditem[0].Id);
                Close_div();
            }
            else {
                alert("العدد مكتمل في حجز الاطفال يجب اخراج احد من علي الكرسي");
            }
        }
    }
    function Enter_Customer(New_ID) {
        User = new Userclose();
        User.ReservationId = Number(New_ID);
        User.StatusId = 3;
        Ajax.Callsync({
            type: "post",
            url: (url + '/api/BarberReservation/ReservationSystem'),
            data: JSON.stringify(User),
            success: function (d) {
                //Display();       
                alert('لقد حدث خطاء في الكورسي الرجاء اعادة المحاوله مره اخري ');
                User = new Userclose();
                User.ReservationId = Number(New_ID);
                User.StatusId = 2;
                Ajax.Callsync({
                    type: "POST",
                    url: (url + '/api/BarberReservation/ReservationSystem'),
                    data: JSON.stringify(User),
                    success: function (d) {
                    }
                });
            }
        });
        Display();
    }
    function chack_Enter_Cust() {
        if (Details_API.length <= 2) {
            //alert('اصغر' + Details_API.length)
            return false;
        }
        else {
            //alert('اكبر تمام' + Details_API.length)
            return true;
        }
    }
    function span_onclick() {
        Close_div();
    }
    function window_onclick() {
        debugger;
        Close_div();
    }
    function show_div() {
        modal.style.display = "block";
        Modal_close.style.display = "block";
    }
    function Close_div() {
        modal.style.display = "none";
        Modal_close.style.display = "none";
    }
    //------------------------------------------------------------------------------------
    //----------------------------------------------------Close_Day-------------------------- 
    function Close_Day_onClick() {
        debugger;
        var r = confirm('هل تريد اغلاق المحل');
        if (r == true) {
            //let chak = Close_Day.checked == true ? true : false;
            Ajax.Callsync({
                type: "GET",
                url: (url + '/api/BarberReservation/CloseTheStore'),
                data: { isClosed: true },
                success: function (d) {
                    Ajax.Callsync({
                        type: "GET",
                        url: (url + '/api/BarberReservation/CloseTheStore'),
                        data: { isClosed: false },
                        success: function (d) {
                            Display();
                        }
                    });
                }
            });
        }
        else {
            Close_Day.checked = true;
        }
    }
    //------------------------------------------------------------------------------------
    function Print(date, number, name, phone) {
        debugger;
        var divToPrint = document.getElementById('printer');
        document.getElementById('date').innerHTML = date;
        document.getElementById('number').innerHTML = number;
        document.getElementById('name').innerHTML = name;
        document.getElementById('phone').innerHTML = phone;
        var newWin = window.open('', 'Print-Window', 'height=600,width=800');
        //newWin.document.open();
        this.prints = true;
        newWin.document.write('<body onload="window.print()" style="width:220px;height:10px!important;" >');
        newWin.document.write(divToPrint.innerHTML);
        newWin.document.write('</body></html>');
        newWin.focus();
        newWin.print();
        setTimeout(function () { newWin.close(); }, 10);
    }
})(Home || (Home = {}));
//# sourceMappingURL=Home.js.map