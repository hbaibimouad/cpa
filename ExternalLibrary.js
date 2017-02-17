/**************************Helper Functions***************************/
function isUndefinedOfNull(v) {
    return (v==undefined || v==null);
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isAlphabetOnly(n) {
    return (n != undefined && n.match(/^[a-z]+$/gi));
}

function isValidEmailAddress(emailAddress) {
    if (emailAddress == undefined || emailAddress == "undefined") {
        return false;
    } else if (emailAddress.toLowerCase().indexOf("@noemail.com") != -1) {
        return true;
    } else {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }
}

function NewGUID() {
    var res = [], hv;
    var rgx = new RegExp("[2345]");
    for (var i = 0; i < 8; i++) {
        hv = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        if (rgx.exec(i.toString()) != null) {
            if (i == 3) { hv = "6" + hv.substr(1, 3); }
            res.push("-");
        }
        res.push(hv.toUpperCase());
    }
    value = res.join('');
    return value;
}

function DisplayTodayDate(tarDiv, msg) {
    var currentTime = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    msg = msg.replace('#dd#', month + "/" + day + "/" + year);
    msg = msg.replace('#DOW#', days[currentTime.getDay()]);
    $(tarDiv).html(msg);
}

function toggleBgColor() { }

var tempDisableObject; var tempDisableTimer = 3000;
function AttachTriggerDisable(elem) {
    var onClickEvent = $(elem).attr("onclick");
    if (onClickEvent != undefined) {
        onClickEvent = "AttachTempDisable(this);" + onClickEvent;
        $(elem).attr("onclick", onClickEvent);
    }
}

function AttachTempDisable(elem) {
    var onClickEvent = $(elem).attr("onclick");
    if (onClickEvent != undefined) {
        onClickEvent = "return false; " + onClickEvent;
        $(elem).attr("onclick", onClickEvent);
    }
    tempDisableObject = elem;
    setTimeout("RemoveDisable();", tempDisableTimer);
}

function RemoveDisable() {
    var onClickEvent = $(tempDisableObject).attr("onclick");
    if (onClickEvent != undefined) {
        onClickEvent = onClickEvent.replace("return false; ", "");
        $(tempDisableObject).attr("onclick", onClickEvent);
    }
}
/*
var isPopLoaded = false;
$(document).ready(function () {
    if (typeof extPopHref !== 'undefined') {
        $(document).mouseleave(function (e) {
            var curWidth = $(window).width();
            var curHeight = $(window).height();
            if (!isPopLoaded && ((e.clientX <= 180 && e.clientY <= 10) || (e.clientX >= (curWidth - 180) && e.clientY <= 10)) && e.clientX != -3 && e.clientY != -3) {
                $.colorbox({ iframe: true, width: "80%", height: "90%", href: extPopHref,
                    onOpen: function () { isPopLoaded = true; },
                    onClosed: function () { isPopLoaded = false; }
                });
            }
        });
    }
    */
//Replace Text Plugin.
(function ($) { $.fn.replaceText = function (b, a, c) { return this.each(function () { var f = this.firstChild, g, e, d = []; if (f) { do { if (f.nodeType === 3) { g = f.nodeValue; e = g.replace(b, a); if (e !== g) { if (!c && /</.test(e)) { $(f).before(e); d.push(f) } else { f.nodeValue = e } } } } while (f = f.nextSibling) } d.length && $(d).remove() }) } })(jQuery);
//Replace Text plugin ends.

//Popunder
(function ($) { $.popunder = function (sUrl) { var _parent = self; var bPopunder = $.browser.msie && parseInt($.browser.version, 10) < 9; if (top != self) { try { if (top.document.location.toString()) { _parent = top } } catch (err) { } } var sOptions = "toolbar=1,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=" + (screen.availWidth - 10).toString(); sOptions += ",height=" + (screen.availHeight - 122).toString() + ",screenX=0,screenY=0,left=0,top=0"; var popunder = _parent.window.open(sUrl, "pu_" + Math.floor(89999999 * Math.random() + 1e7), sOptions); if (popunder) { popunder.blur(); if (bPopunder) { window.focus(); try { opener.window.focus() } catch (err) { } } else { popunder.init = function (e) { with (e) { (function () { if (typeof window.mozPaintCount != "undefined") { var a = window.open("about:blank"); a.close() } try { opener.window.focus() } catch (b) { } })() } }; popunder.params = { url: sUrl }; popunder.init(popunder) } } return this } })(jQuery)
//OuterHtml
jQuery.fn.outerHTML = function (s) { return s ? this.before(s).remove() : $("<p>").append(this.eq(0).clone()).html(); };




var FL = {
    erObj: {
        email: {
            emptyValue: "Please enter your Email Address",
            regex: {
                msg: "Please enter a valid Email Address", str: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
        }
      ,
        firstname: {
            emptyValue: "Please enter your First Name",
            regex: {
                msg: "Please enter a valid First Name", str: /^[a-zA-Z\s]*$/
            }
        }
      ,
        lastname: {
            emptyValue: "Please enter your Last Name",
            regex: {
                msg: "Please enter a valid Last Name", str: /^[a-zA-Z\s]*$/
            }
        }
      ,
        telephone: {
            emptyValue: "Please enter your Phone Number",
            regex: {
                msg: "Please enter valid Phone Number", str: /^\(?([2-9][0-8][0-9])\)?[-. ]?([2-9][0-9]{2})[-. ]?([0-9]{4})$/
            }
        }
      ,
        phonecode: {
            emptyValue: "Please enter your Phonecode",
            minlength: {
                msg: "Please enter 3 digit Phonecode", length: 3
            }
        }
      ,
        phoneprefix: {
            emptyValue: "Please enter your Phoneprefix",
            minlength: {
                msg: "Please enter 3 digit Phoneprefix", length: 3
            }
        }
      ,
        phonesuffix: {
            emptyValue: "Please enter your Phonesuffix",
            minlength: {
                msg: "Please enter 4 digit Phonesuffix", length: 4
            }
        }
      ,
        dobmonth: {
            minlength: {
                msg: "Please select your Birth Month", length: 1
            }
        }
      ,
        dobday: {
            minlength: {
                msg: "Please select your Birth Day", length: 1
            }
        }
      ,
        dobyear: {
            minlength: {
                msg: "Please select your Birth Year", length: 4
            }
        }
      ,
        address1: {
            emptyValue: "Please enter your Address"
        }
      ,
        city: {
            emptyValue: "Please enter your City"
        }
      ,
        state: {
            emptyValue: "Please select your State"
        }
      ,
        zippost: {
            emptyValue: "Please enter your Zip",
            regex: {
                msg: "Zip must be 5 digits", str: /(^\d{5}$)|(^\d{5}-\d{4}$)/
            }
        }
    }
};
FL.genderLookUp = function (firstname) {
    var fn = (firstname ? firstname : $('input[name=firstname]').val());
    if (fn.length > 0) {
        $.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=9&params=FName%3D' + fn + '%26apikey%3DCA5E311B-DC48-43B3-8E89-972B38E64910', function (data) {
            if (isNaN(data)) {
                if (data == 'F') {
                    $('body').find('[name="gender"]').val("False");
                } else if (data == 'M') {
                    $('body').find('[name="gender"]').val("True");
                }
            }
        });
    }
}

FL.zipLookUp = function (zip) {
    var zp = (zip ? zip : $('input[name=zippost]').val());
    if (zp.length == 5 && !isNaN(zp)) {
        $.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=4&params=zip%3D' + zp + '%26apikey%3D50479670-5D5C-48FA-8384-98A28758BFA4', function (data) {
            if (data && data != 0) {
                var zip_obj = $.parseJSON(data);
                $('body').find('[name="city"]').val(zip_obj.City);
                $('body').find('[name="state"]').val(zip_obj.State);
            }
        }
        );
    }
}
FL.geoIpLookUp = function () {
    var ip = AF.Lead.v.ClientIP;
    $.get('/svcg.aspx?SvcTP=3&apikey=6C0E62C4-FB5C-42A5-9D3B-10457F314A81&pID=16&params=ip%3D' + ip + '%26apikey%3D17905175-9ED5-E983-5451-14439B152AB54C115399', function (data) {
        var loc_obj = $.parseJSON(data);
        $('body').find('[name="state"]').val(loc_obj.region);
        $('body').find('[name="zippost"]').val(loc_obj.postalCode);
        $('body').find('[name="city"]').val(loc_obj.city);
    }
    );
}
FL.getInputVal = function (name) {
    var obj = $('input[name="' + name + '"], select[name="' + name + '"]').get(0),
        returnValue = '';
    if ($(obj).attr('type') == 'radio') {
        returnValue = UC($('input[name="' + name + '"]:checked').val());
    }
    else if ($(obj).attr('type') == 'checkbox') {
        $('input[name="' + name + '"]').each(function () {
            if (this.checked)
                returnValue += this.value + ',';
        }
                                            );
    }
    else {
        returnValue = obj == undefined ? '' : obj.value;
    }
    return returnValue.toLowerCase();
}
FL.checkFields = function (alrt, id, callback, cbprms) {
    var alertMsg = '';
    $("#" + id).find("input,select").each(function () {
        if (FL.validate(this) != '') {
            alertMsg += FL.validate(this) + '\n';
        }
    }
                                         );
    if (alertMsg.length > 0) {
        if (alrt) alert(alertMsg);
        return false;
    }
    if (alrt && callback != undefined && typeof (callback) == "function") {
        callback(cbprms);
    }
    return true;
}
FL.validate = function (obj) {
    var inputVal = obj.value = $.trim(obj.value);
    var inputName = obj.name;
    var allValid = '';
    if (FL.erObj[inputName] != undefined) {
        var wObj = FL.erObj[inputName];
        var ret = false;
        $.each(wObj, function (key, value) {
            switch (key) {
                case "emptyValue":
                    if (inputVal.length == 0) {
                        ret = true;
                        allValid = value;
                    }
                    break;
                case "minlength":
                    if (obj.type == "checkbox" && $('input[name=' + inputName + ']:checked').length < value.length) {
                        ret = true;
                        allValid = value.msg;
                    } else if (obj.type != "checkbox" && inputVal.length < value.length) {
                        ret = true;
                        allValid = value.msg;
                    }
                    break;
                case "maxlength":
                    if (obj.type == "checkbox" && $('input[name=' + inputName + ']:checked').length > value.length) {
                        ret = true;
                        allValid = value.msg;
                    } else if (obj.type != "checkbox" && inputVal.length < value.length) {
                        ret = true;
                        allValid = value.msg;
                    }
                    break;
                case "regex":
                    if (!value.str.test(inputVal)) {
                        ret = true;
                        allValid = value.msg;
                    }
                    break;
            }
            if (ret) return false;
        }
              );
    }
    return allValid;
}
FL.getRptSurvey = function (chkVS) {
    var surveyData = "";
    for (var key in AF.Lead.v) {
        if (key.length == 3 && key.substring(0, 1) == "v" && chkVS.indexOf(key) < 0) {
            surveyData += "&" + key + "=" + AF.Lead.v[key];
        }
    }
    return surveyData;
}
FL.getSurvey = function () {
    var surveyPrm = AF.Flow.GetSurveyParamAsQS();
    if (surveyPrm == "") {
        var params = unescape(GetFlowVariable(AF.System.v.pubParams)).split("&");
        if (params.length > 0) {
            for (var i = 0; i < params.length; i++) {
                var srvParam = params[i].split("=")[0];
                if (srvParam.length == 3 && srvParam.substring(0, 1) == "v") {
                    surveyPrm += "&" + params[i];
                }
            }
        }
    }
    return surveyPrm;
}
var CG = {
    Location: "",
    Identity: "",
    CurrentStep: "load"
};
FL.ClickGen = function (Seq, CurrentAction, NextStep) {
    try {
        if (CG.Location === "") {
            var F = (AF.Flow.v.FlowID != undefined && AF.Flow.v.FlowID != "") ? '"f":' + AF.Flow.v.FlowID + ',' : '';
            var DF = (AF.Flow.v.RegFormID != undefined) ? '"df":' + AF.Flow.v.RegFormID + ',' : '';
            var DFB = (AF.Flow.v.DataFormBankID != undefined) ? '"dfb":' + AF.Flow.v.DataFormBankID : '';
            CG.Location = JSON.parse("{" + F + DF + DFB + "}");
        }
        if (CG.Identity === "") {
            var cgVID = '"vid":"' + AF.Lead.v.VID + '",';
            var cgEVID = '"evid":"' + AF.Lead.v.EntranceVID + '"';
            var cgDemo = "";
            if (UC(AF.Lead.v.Gender) != "") cgDemo += ',"gender":' + AF.Lead.v.Gender.toLowerCase();
            if (UC(AF.Lead.v.Age) != "") cgDemo += ',"age":' + AF.Lead.v.Age;
            if (UC(AF.Lead.v.State) != "") cgDemo += ',"state":"' + AF.Lead.v.State.toUpperCase() + '"';
            var cgSubAffArr = (AF.Flow.v.SubAff != undefined) ? AF.Flow.v.SubAff.split('_') : {
            };
            var cgSubAff = "";
            if (cgSubAffArr.length >= 1 && cgSubAffArr[0] !== "") cgSubAff = ',"sa1":"' + UC(cgSubAffArr[0]) + '"';
            if (cgSubAffArr.length >= 2 && cgSubAffArr[1] !== "") cgSubAff += ',"sa2":"' + UC(cgSubAffArr[1]) + '"';
            if (cgSubAffArr.length >= 3 && cgSubAffArr[2] !== "") cgSubAff += ',"sa3":"' + UC(cgSubAffArr[2]) + '"';
            if (cgSubAffArr.length >= 4 && cgSubAffArr[3] !== "") cgSubAff += ',"sa4":"' + UC(cgSubAffArr[3]) + '"';
            if (cgSubAffArr.length >= 5 && cgSubAffArr[4] !== "") cgSubAff += ',"sa5":"' + UC(cgSubAffArr[4]) + '"';
            CG.Identity = JSON.parse("{" + cgVID + cgEVID + cgSubAff + cgDemo + "}");
        }
        $.ajax({
            type: 'POST',
            url: '//www.clicken.us/Click/',
            dataType: 'json',
            data: {
                Seq: Seq, CS: CG.CurrentStep, CA: CurrentAction, NS: NextStep, Loc: CG.Location, Ide: CG.Identity
            }
        }
              );
        CG.CurrentStep = NextStep;
    }
    catch (err) {
    }
}
function SL() {
    this.totalQuestionsNum = $(".SurveyQue").not(".SubQue").length;
    this.currentQuestionNum = 0;
    this.Qnum = this.step = 0;
    this.TCPA = true;
    this.trck = false;
    this.tcpaLinkOut = (AF.System.v.IsMobile == "1");
    this.iframetagstf = this.tcpaList = '';
    this.ConditionList;
    this.CompList;
    this.Questions = new Array();
    this.question = function (num, name, qid, cls, dpndpr, prgr, filtered) {
        this.Number = num;
        this.Pname = name;
        this.QID = qid;
        this.Class = cls || "";
        this.Shown = false;
        this.Filtered = (filtered ? filtered : false);
        this.DependParam = dpndpr;
        this.Progress = prgr;
    }
    this.animateBefore = function () {
    }
    this.animateAfter = function (qNum) {
    }
    this.getNextQuestion = function (obj, oSurvey) {
        if (typeof (oSurvey) != "object") {
            alert("oSurvey is not an object.");
            return false;
        }
        this.animateBefore();
        if (obj != null) {
            var dependQs = $.grep(oSurvey.Questions, function (n, i) {
                var tgt = false;
                $.each(n.DependParam, function () {
                    if (this.name == obj.name) {
                        tgt = true;
                        return false;
                    }
                }
                      );
                return (!n.Shown && !n.Filtered && tgt);
            }
                                 );
            $.each(dependQs, function () {
                var q = this;
                $.each(this.DependParam, function () {
                    var values = this.value.split(',');
                    if ((!this.excl && (obj.name == this.name || (this.name == 'multicond' && this.value.indexOf(obj.name) > -1)) && $.inArray(obj.value, values) == -1) ||
                    (this.excl && (obj.name == this.name || (this.name == 'multicond' && this.value.indexOf(obj.name) > -1)) && $.inArray(obj.value, values) > -1)) {
                        oSurvey.Questions[q.Number - 1].Filtered = true;
                        $.each(oSurvey.Questions, function () {
                            var deepQ = this;
                            var qName = oSurvey.Questions[q.Number - 1].Pname;
                            if (!this.Shown && !this.Filtered) {
                                $.each(this.DependParam, function () {
                                    if (qName == this.name || (this.name == 'multicond' && this.value.indexOf(qName) > -1)) {
                                        deepQ.Filtered = true;
                                    }
                                }
                                      );
                            }
                        }
                              );
                        return false;
                    }
                }
                      );
            }
                  );
        }
        this.showNextQuestion(obj, oSurvey);
    }
    this.showNextQuestion = function (obj, oSurvey) {
        var remainQuestions = $.grep(this.Questions, function (n, i) {
            return !n.Shown && !n.Filtered;
        }
                                    );
        var totalQuestions = $.grep(this.Questions, function (n, i) {
            return !n.Filtered;
        }
                                   );
        this.totalQuestionsNum = totalQuestions.length;
        var niq = 0;
        do {
            var skipQuestion = false;
            if (remainQuestions[niq] != undefined) {
                $.each(remainQuestions[niq].DependParam, function () {
                    var formVal = (FL.getInputVal(this.name) == "" ? UC(AF.Lead.v[this.name]) : FL.getInputVal(this.name)).toLowerCase();
                    var fValues = this.value.toLowerCase().split(',');
                    if (this.value != "" && this.name.length == 3 && this.name.substring(0, 1) == 'v'
                && ((!this.excl && $.inArray(formVal, fValues) == -1) || (this.excl && $.inArray(formVal, fValues) > -1))) {
                        skipQuestion = true;
                        oSurvey.Questions[remainQuestions[niq].Number - 1].Filtered = true;
                        if (remainQuestions[niq + 1] != undefined) niq++;
                        else remainQuestions.shift();
                        return false;
                    }
                }
             );
            }
        }
        while (skipQuestion);
        var answer = (obj != null ? $(obj).parents('.SurveyQue').find('input,select').serialize() : "");
        if (remainQuestions.length > 0 && remainQuestions[niq] != undefined && $('#Qnum' + remainQuestions[niq].Number).get(0) != undefined) {
            this.animateAfter(remainQuestions[niq].Number);
            var Qid = UC($('#Qnum' + remainQuestions[niq].Number).attr('class').match(/(Qid\d+(\.\d)*)/g)[0]).replace(/\D+/g, '');
            if (oSurvey.trck) FL.ClickGen(this.step++, answer, Qid);
            this.Qnum = remainQuestions[niq].Number;
            if ($('#Qnum' + remainQuestions[niq].Number).attr('class').indexOf('SubQue_') < 0) {
                $(".SurveyQue").hide();
                ++this.currentQuestionNum;
            }
            $('#Qnum' + remainQuestions[niq].Number).show();
            this.Questions[remainQuestions[niq].Number - 1].Shown = true;
            this.updateQuestionNum();
        }
        else {
            this.animateAfter();
            $("#surveyContainer").hide();
            $("#toast-container").slideUp();
            if (!FL.checkFields(false, 'FormStep', oSurvey.complete, oSurvey)) {
                if (oSurvey.trck) FL.ClickGen(this.step++, answer, "ShowForm");
                $("#FormStep").fadeIn();
            }
            else if (this.TCPA && this.showTCPA()) {
                if (oSurvey.trck) FL.ClickGen(this.step++, answer, "ShowTCPA");
                $("#TCPAStep").fadeIn();
            }
            else {
                if (oSurvey.trck) FL.ClickGen(this.step++, answer, "SubmitSurvey");
                this.submit();
            }
        }
    }
    this.updateQuestionNum = function () {
        $("#totalQ").html(this.totalQuestionsNum);
        $("#curQ").html(this.currentQuestionNum);
    }
    this.start = function (oSurvey) {
        if (typeof (oSurvey) != "object") {
            alert("oSurvey is not an object.");
            return false;
        }
        if (UC(AF.Lead.v.ZipPost) != "" && (UC(AF.Lead.v.State) == "" || UC(AF.Lead.v.City) == "")) {
            FL.zipLookUp(UC(AF.Lead.v.ZipPost));
        }
        else if (UC(AF.Lead.v.State) == "") {
            FL.geoIpLookUp();
        }
        if (UC(AF.Lead.v.FirstName) != "" && UC(AF.Lead.v.Gender) == "") {
            FL.genderLookUp(UC(AF.Lead.v.FirstName));
        }
        $.getJSON('/Services/GetAllConditions.ashx?dataformid=' + AF.Flow.v.RegFormID
                  + '&gender=' + FL.getInputVal('gender')
        + '&age=' + FL.getInputVal('age')
        + '&dataformbankid=' + AF.Flow.v.DataFormBankID
        + '&flowid=' + AF.Flow.v.FlowID
        + '&allc=' + (oSurvey.tcpaLinkOut ? 0 : 1),
          function (data) {
              if (data) {
                  oSurvey.tcpaList = data.TCPA;
                  oSurvey.ConditionList = data.SurveyCondition;
                  oSurvey.tfList = data.TF;
                  oSurvey.run(oSurvey);
              }
          }
        );
        $("#RgForm").append('<input type="hidden" name="device" value="' + AF.System.v.Device + '" />');
        $("#RgForm").append('<input type="hidden" name="esp" value="' + UC($.trim(UC(AF.Lead.v.Email)).split('@')[1]) + '" />');
    }
    this.skip = function (oSurvey) {
        $("#surveyContainer").hide();
        $("#toast-container").slideUp();
        if (!FL.checkFields(false, 'FormStep', oSurvey.complete, oSurvey)) {
            if (oSurvey.trck) FL.ClickGen(this.step++, "Skip", "ShowForm");
            $("#FormStep").fadeIn();
        }
        else if (this.TCPA && this.showTCPA()) {
            if (oSurvey.trck) FL.ClickGen(this.step++, "Skip", "ShowTCPA");
            $("#TCPAStep").fadeIn();
        }
        else {
            if (oSurvey.trck) FL.ClickGen(this.step++, "Skip", "SubmitSurvey");
            oSurvey.submit();
        }
    }
    this.run = function (oSurvey) {
        $.each(this.tfList, function () {
            oSurvey.iframetagstf += "<iframe id=\"off" + this.ID + "iframe\" src=\"/campaign.aspx?campaign=" + this.PlacementID + "\" style=\"display: none\"></iframe>";
        }
              );
        $("#tf_ex").append(oSurvey.iframetagstf);
        var cappedQids = [];
        if (AF.Flow.v.CappedSurveyQuestionID != undefined) {
            cappedQids = AF.Flow.v.CappedSurveyQuestionID.split(',');
            $.each(cappedQids, function (index, value) {
                $(".Qid" + value).addClass("Pre_");
            }
                  );
        }
        $('.SurveyQue').each(function (ind, vl) {
            var filtered = false,
                QID = $(this).attr('class').match(/(Qid\d+(\.\d)*)/g)[0].replace(/[^0-9]+/g, "");
            var Condisions = $(this).attr('class').match(/((SubQue_|Cond_)\d+(\.\d)*)/g);
            var dependParam = [];
            if (!filtered && $.inArray(QID, cappedQids) > -1) {
                filtered = true;
                --oSurvey.totalQuestionsNum;
            }
            if (Condisions != null) {
                $.each(Condisions, function () {
                    var curCond = this;
                    var c = $.grep(oSurvey.ConditionList, function (n, i) {
                        return n.ID == curCond.split('_')[1];
                    }
                                  );
                    if (c[0] != undefined) {
                        if ('age,gender,State,device,esp,carrier'.indexOf(c[0].FieldName) == -1) {
                            dependParam.push({
                                name: c[0].FieldName, value: c[0].Value, excl: c[0].Exclusive
                            }
                                            );
                        }
                        if (!filtered && ((c[0].Value == "" && UC(AF.Lead.v[c[0].FieldName]) != "") ||
                          (('age,gender,State,device,esp,carrier'.indexOf(c[0].FieldName) > -1 || ind == 0)
                           && ((!c[0].Exclusive && !oSurvey.ConditionMet(c[0].FieldName, c[0].Value)) || (c[0].Exclusive && oSurvey.ConditionMet(c[0].FieldName, c[0].Value)))))) {
                            filtered = true;
                            --oSurvey.totalQuestionsNum;
                        }
                    }
                }
                      );
            }
            oSurvey.Questions.push(new oSurvey.question(parseInt(this.id.replace(/[^0-9]+/g, "")), $(this).find('input,select').first().attr('name'),
                                                        parseInt(QID),
                                                        $(this).attr('class'), dependParam, 0, filtered));
        }
                            );
        var tq = $.grep(oSurvey.Questions, function (n, i) {
            return !n.Filtered;
        }
                       ),
            ttq = tq.length,
            pck = Math.round(ttq / 3),
            onep = 100 / ttq,
              accum = 0,
                ow = 1.2;
        $.each(oSurvey.Questions, function (ind, vl) {
            if (!this.Filtered) {
                var prgr = (100 - pck * ow * onep - pck * 0.8 * ow * onep) / (ttq - 2 * pck);
                if (ind + 1 <= pck) {
                    prgr = ow * onep;
                }
                else if (ind + 1 > pck && ind + 1 <= 2 * pck) {
                    prgr = 0.8 * ow * onep;
                }
                accum += prgr;
            }
            this.Progress = accum;
        }
              );
        this.showNextQuestion(null, oSurvey);
    }

    this.ConditionMet = function (fieldName, fieldValue) {
        fieldName = fieldName.toLocaleLowerCase();
        fieldValue = fieldValue.toLocaleLowerCase();
        var formVal = (FL.getInputVal(fieldName) == "" ? UC(AF.Lead.v[fieldName]) : FL.getInputVal(fieldName)).toLocaleLowerCase();
        if (fieldName == 'multicond') {
            var cond = fieldValue.split('||'),
                condMetArr = [];
            for (var z = 0; z < cond.length; z++) {
                var fValues = cond[z].split('=')[1].split(',');
                var cVal = (FL.getInputVal(cond[z].split('=')[0]) == "" ?
                            UC(AF.Lead.v[cond[z].split('=')[0]]) : FL.getInputVal(cond[z].split('=')[0])).toLocaleLowerCase();
                condMetArr.push($.inArray(cVal, fValues) > -1);
            }
            if ($.inArray(true, condMetArr) > -1) return true;
        }
        else if (fieldName.indexOf('gender') > -1) {
            if (formVal.substring(0, 1).replace('m', 't') == fieldValue.substring(0, 1))
                return true;
        }
        else if (fieldName.indexOf('age') > -1) {
            var age = UC(AF.Lead.v.Age);
            if (eval(fieldValue.replace('&', ' && '))) return true;
        }
        else if (fieldValue.indexOf(',') > -1) {
            var fValues = fieldValue.split(',');
            if ($.inArray(formVal, fValues) > -1) return true;
        }
        else if (formVal == fieldValue) return true;
        return false;
    }
    this.complete = function (oSurvey) {
        $("#FormStep").hide();
        if (oSurvey.TCPA && oSurvey.showTCPA()) {
            if (oSurvey.trck) FL.ClickGen(this.step++, "FormValidate", "ShowTCPA");
            $("#TCPAStep").fadeIn();
        }
        else {
            if (oSurvey.trck) FL.ClickGen(this.step++, "FormValidate", "SubmitSurvey");
            oSurvey.submit();
        }
    }
    this.showTCPA = function () {
        var oSurvey = this;
        var tcpaExist = false;
        if ($('#tcpaterms').get(0) != undefined && this.tcpaList.length > 2) {
            $("#TCPAStep").find("label").each(function () {
                var apndVal = $('[name="' + this.id.replace('l', '') + '"]').val();
                if ($.inArray(this.id, ["lphone", "ltelephone"]) > -1) apndVal = apndVal.substr(0, 3).concat('-', apndVal.substr(3, 3), '-', apndVal.substr(6, 4));
                $(this).html(apndVal);
            }
                                             );
            $.each(this.tcpaList, function (index, value) {
                var pValues = this.Pvalue.split('||');
                var formVal = (FL.getInputVal(this.Pname) == "" ? UC(AF.Lead.v[this.Pname]) : FL.getInputVal(this.Pname)).toLocaleLowerCase();
                $.each(pValues, function () {
                    if (formVal != "" && formVal == this.toLowerCase()) {
                        tcpaExist = true;
                        return false;
                    }
                }
                      );
                if (tcpaExist)
                    return false;
            }
                  );
        }
        if (tcpaExist) {
            if (this.tcpaLinkOut) {
                var mPartners = "/campaign.aspx?campaign=CCEC1815-37EA-7DEC-3C18-BBA9BB1A27551EBF6097";
                $.ajax({
                    url: window.location.origin + mPartners
                }
                      )
                .done(function (data) {
                    mPartners = window.location.origin + mPartners;
                    oSurvey.setTcpa(mPartners);
                }
                     )
                .fail(function () {
                    mPartners = "http://www.cdn925.com/" + mPartners;
                    oSurvey.setTcpa(mPartners);
                }
                     );
            }
            else {
                this.setTcpa();
                var tnames = $.grep(this.tcpaList, function (n, i) {
                    return n.Pname == "allC";
                }
                                   );
                $("#tnames").html(tnames[0].Pvalue);
            }
            AF.System.v.TCPAOffers = this.CompList;
        }
        return tcpaExist;
    }
    this.submit = function () {
        if (this.trck) FL.ClickGen(this.step++, "SubmitSurvey", "Exit");
        $('[id ^=off][id $=iframe]').each(function () {
            var tfid = $(this).prop('id').match(/off(\d+)/)[1];
            $("#tf_ex").append('<input type="text" name="vtf' + tfid + '" value="' + $(this).contents().find('[name="tf' + tfid + '"]').val() + '" />');
        }
                                         );
        var survey_param = $('#RgForm').find('[name^="v"]').not('input[name=vid]').serialize();
        survey_param += '&age=' + $('#RgForm').find('[name="age"]').val();
        survey_param += FL.getRptSurvey(survey_param);
        if ($('#RgForm').find('[name="surveyparam"]').get(0) == undefined) {
            $("#RgForm").append('<input type="hidden" name="surveyparam" value="' + survey_param + '" />');
        }
        else {
            $('#RgForm').find('[name="surveyparam"]').val(survey_param);
        }
        $("#surveyContainer, #TCPAStep, #FormStep").fadeOut();
        AF.Campaign.SurveySubmit(SumbitRegform, null);
    }
    this.setTcpa = function (partners) {
        var hd = $.grep(this.tcpaList, function (n, i) {
            return n.Pname == "TcpaH";
        }
                       )[0].Pvalue;
        var ft = $.grep(this.tcpaList, function (n, i) {
            return n.Pname == "TcpaF";
        }
                       )[0].Pvalue;
        var mrktPartners = $('<a id="tcpaLink">Marketing Partners</a>');
        if (partners != undefined) {
            mrktPartners.attr({
                target: "_blank",
                href: partners
            }
                             );
        }
        else {
            mrktPartners.attr({
                href: "javascript:void(0);",
                onclick: "javascript: $('#tcpadark').show(); $('#tcpalight').fadeIn(250);"
            }
                             );
        }
        var tcpaCont = "".concat(
          hd, "and our ",
          mrktPartners.outerHTML(),
          ft);
        $("#tcpaterms").html(tcpaCont);
    }
}
