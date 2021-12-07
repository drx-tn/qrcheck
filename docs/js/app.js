var pchamps = [
    { "code_champ": "00", "nom": "Full Name / الاسم و اللقب" },
    { "code_champ": "0U", "nom": "Date of Birth / تاريخ الولادة" },
    { "code_champ": "SV", "nom": "Pass Id" },
    { "code_champ": "4P", "nom": "Full Name / الاسم و اللقب" },
    { "code_champ": "4R", "nom": "Date of Birth / تاريخ الولادة" },
    { "code_champ": "ST", "nom": "Parent Guardian Name (for children) / (بالنسبة للقصر)إسم الولي" },
    { "code_champ": "SW", "nom": "Effective Date  / تاريخ النفاذ" }
];
vchamps = [
    { "code_champ": "C2", "nom_francais": ":Nom et prénom", "nom_arabe": "الاسم و اللقب " },
    { "code_champ": "CU", "nom_francais": "Agent de vaccination ", "nom_arabe": "1 عامل التطعيم" },
    { "code_champ": "CV", "nom_francais": "Agent de vaccination 2", "nom_arabe": "عامل التطعيم 2" },
    { "code_champ": "CW", "nom_francais": "Centre de vaccination 1ére dose", "nom_arabe": "مركز تلقيح  أول تلقيح " },
    { "code_champ": "CX", "nom_francais": "Centre de vaccination 2éme dose", "nom_arabe": "مركز تلقيح ثاني تلقيح " },
    { "code_champ": "C4", "nom_francais": "Date de naissance", "nom_arabe": "تاريخ الولادة" },
    { "code_champ": "CY", "nom_francais": "N° lot dose 1", "nom_arabe": "دُفعة لقاح  1 " },
    { "code_champ": "CZ", "nom_francais": "N°lot dose 2", "nom_arabe": "دُفعة لقاح 2 " },
    { "code_champ": "D1", "nom_francais": ":Atteint du covid", "nom_arabe": "سبق الإصابة بفيروس كوفيد " },
    { "code_champ": "D2", "nom_francais": "Reférence du certificat de vaccination", "nom_arabe": "مرجع شهادة التلقيح " },
    { "code_champ": "D3", "nom_francais": "Type d'identifiant", "nom_arabe": "نوع المعرف" },
    { "code_champ": "10", "nom_francais": "CIN", "nom_arabe": "بطاقة التعريف الوطنية " },
    { "code_champ": "D4", "nom_francais": "Nom du vaccin ", "nom_arabe": "اسم التلقيح " },
    { "code_champ": "D5", "nom_francais": "numéro d'inscriptior EVAX", "nom_arabe": "رقم تسجيل " },
    { "code_champ": "D6", "nom_francais": "Référence dose 1", "nom_arabe": "رقم دفعت الجرعة الأولى " },
    { "code_champ": "D7", "nom_francais": "Date de la vaccination dose 1", "nom_arabe": "تاريخ تلقيح الجرعة الأولى " },
    { "code_champ": "D8", "nom_francais": "Référence dose 2", "nom_arabe": "رقم دفعت الجرعة الثانية" },
    { "code_champ": "D9", "nom_francais": "Date de la vaccination dose 2", "nom_arabe": "تاريخ تلقيح الجرعة الثانية " },
    { "code_champ": "00", "nom_francais": "Nom et prénom", "nom_arabe": "الاسم و اللقب " },
    { "code_champ": "5H", "nom_francais": "Numéro d'inscriptior EVAX", "nom_arabe": "EVAX رقم تسجيل " },
    { "code_champ": "5I", "nom_francais": "Type d'identifiant", "nom_arabe": "نوع المعرف" },
    { "code_champ": "5J", "nom_francais": "Carte d'identité nationale", "nom_arabe": "بطاقة تعريف وطنية" },
    { "code_champ": "0U", "nom_francais": "Date de naissance", "nom_arabe": "تاريخ الولادة" },
    { "code_champ": "5K", "nom_francais": "Reférence du certificat de vaccination", "nom_arabe": "مرجع شهادة التلقيح " },
    { "code_champ": "5L", "nom_francais": "Nom du vaccin 1ére dose", "nom_arabe": "اسم التلقيح الجرعة الأولى" },
    { "code_champ": "5S", "nom_francais": ":Date du COVID", "nom_arabe": "تاريخ الإصابة كوفيد " },
    { "code_champ": "5Q", "nom_francais": "N°lot dose 1", "nom_arabe": "رقم دُفعة الجرعة الأولى 1 " },
    { "code_champ": "5O", "nom_francais": "Date de la vaccination dose 1", "nom_arabe": "تاريخ تلقيح الجرعة الأولى " },
    { "code_champ": "5N", "nom_francais": "Nom du vaccin 2éme dose", "nom_arabe": "اسم التلقيح الجرعة الثانية" },
    { "code_champ": "5R", "nom_francais": "N°lot dose 2", "nom_arabe": " رقم دُفعة الجرعة الثانيه" },
    { "code_champ": "5P", "nom_francais": "Date de la vaccination dose 2", "nom_arabe": "تاريخ تلقيح الجرعة الثانية " },
    { "code_champ": "5G", "nom_francais": "Nom du vaccin 3éme dose", "nom_arabe": "اسم التلقيح الجرعة الثالثة " },
    { "code_champ": "5F", "nom_francais": "N°lot dose 3", "nom_arabe": " رقم دُفعة الجرعة الثالثة " },
    { "code_champ": "5E", "nom_francais": "Date de la vaccination dose 3", "nom_arabe": "تاريخ تلقيح الجرعة الثالثة " },
    { "code_champ": "5C", "nom_francais": "Nom du vaccin 4éme dose", "nom_arabe": "اسم التلقيح الجرعة الرابعة " },
    { "code_champ": "5B", "nom_francais": "N°lot dose 4", "nom_arabe": " رقم دُفعة الجرعة الرابعة " },
    { "code_champ": "5A", "nom_francais": "Date de la vaccination dose 4", "nom_arabe": "تاريخ تلقيح الجرعة الرابعة " },
    { "code_champ": "5M", "nom_francais": "Centre de vaccination ", "nom_arabe": "مركز التلقيح " }
];
function hexabyte(s) {
    var len = s.length;
    var data = [];
    for (var i = 0; i < len; i += 2) {
        var value = (parseInt(s.charAt(i), 16) << 4) + parseInt(s.charAt(i + 1), 16);
        if (value > 127) value -= 256;
        data[i / 2] = value;
    }
    return data;
}
function bytestring(data) {
    var count = data.length;
    var str = "";
    for (var index = 0; index < count; index += 1) str += String.fromCharCode(data[index]);
    return str;
}
function base64ToHex(str) {
    var raw = atob(str);
    var result = '';
    for (var i = 0; i < raw.length; i++) {
        var hex = raw.charCodeAt(i).toString(16);
        result += (hex.length === 2 ? hex : '0' + hex);
    }
    return result.toUpperCase();
}
function decode(scanStr) {
var str = scanStr.substring(26, strDc.length);
var i = 0;
var msg = new String(str);
var size = msg.length;
var datavalue = new Array();
while (i < size) {
    var id = str.substring(i, i + 4);
    var bytess = hexabyte(id);
    var id2 = bytestring(bytess);
    i = i + 4;
    var taill = str.substring(i, i + 2);
    var tailfi = parseInt(taill, 16) * 2;
    i = i + 2;
    var msgchamp = str.substring(i, i + tailfi);
    i = i + tailfi;
    var bytesss = hexabyte(msgchamp);
    var uint8array = new Uint8Array(bytesss);
    var value = new TextDecoder().decode(uint8array);
        datavalue.push({ "code_champ": id2, "value": value });
    }
    return datavalue;
}
function validateThis(scanStr,resultDiv) {
    certPEMstring = "-----BEGIN CERTIFICATE-----MIIDLzCCArWgAwIBAgIIZBsDu2mokvUwCgYIKoZIzj0EAwMwYDENMAsGA1UEAwwEVE4wMTESMBAGA1UECwwJVE4gQ0VWIENBMS4wLAYDVQQKDCVOYXRpb25hbCBEaWdpdGFsIENlcnRpZmljYXRpb24gQWdlbmN5MQswCQYDVQQGEwJUTjAeFw0yMTEwMDgxMjM1NTNaFw0yMzEwMDgxMjM1NTJaMGQxCzAJBgNVBAYTAlROMR4wHAYDVQQKDBVNSU5JU1RFUkUgREUgTEEgU0FOVEUxNTAzBgNVBAMMLENFTlRSRSBJTkZPUk1BVElRVUUgRFUgTUlOSVNURVJFIERFIExBIFNBTlRFMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEwM2anXoMNfEuUnlJyEDD0JAjd8wJ+Modq8JTILjfQshl9mF1FWP+4i2Dy2xyCSjEd72B1Bk8Tnm0IqCZ84C90aOCAVMwggFPMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzodISKkvqPW2y/eXtfcCkdKKnFgwNgYIKwYBBQUHAQEEKjAoMCYGCCsGAQUFBzABhhpodHRwOi8vdmEuY2VydGlmaWNhdGlvbi50bjAVBgNVHSAEDjAMMAoGCGCGFAECBgEMMIGfBgNVHR8EgZcwgZQwgZGgKaAnhiVodHRwOi8vY3JsLmNlcnRpZmljYXRpb24udG4vY2V2Y2EuY3JsomSkYjBgMQ0wCwYDVQQDDARUTjAxMRIwEAYDVQQLDAlUTiBDRVYgQ0ExLjAsBgNVBAoMJU5hdGlvbmFsIERpZ2l0YWwgQ2VydGlmaWNhdGlvbiBBZ2VuY3kxCzAJBgNVBAYTAlROMB0GA1UdDgQWBBSjSy3Asc9FwGxcQ3EIU00routx8DAOBgNVHQ8BAf8EBAMCBsAwCgYIKoZIzj0EAwMDaAAwZQIxAIcFpE0m6NdCfrFZkrjzaqOF1ZVBImfpqjiED2Kz2HXaJuUuS3Yqb/XoEnSzm17KoQIwa6IfNAiJaDGnFPhxWtIwX/NVGdq3v/1g1Od+gkmMfJPMsZQUimEs9Rw6NbuwDoW7-----END CERTIFICATE-----";
    datavalue = new Array();
    qrCodel = scanStr.split(String.fromCharCode(31));
    strDc = qrCodel[0];
    signature = qrCodel[1];
    codeDoc = strDc.substring(20, 22);
    str = scanStr.substring(26, strDc.length);
    datavalue = decode(scanStr);
    data = new Array();
    //--> Check Signature
    var sig = new KJUR.crypto.Signature({ "alg": "SHA256withECDSA" });
    sig.init(certPEMstring);
    sig.updateString(strDc);
    if (!sig.verify(base64ToHex(signature))) {
    data.push({"label" : "Erreur", "value" : "Signature non conforme"});
    return data;
    }
    //-->
    if (codeDoc==="AO") {
        data.push({"label" : "Document type / نوع الوثيقة", "value" : "جواز التلقيح كوفيد-19 VACCINE PASSPORT COVID-19"});
        pchamps.map(function (item) {
            datavalue.find(function (o, i) {
                if (o.code_champ === item.code_champ) {
                    data.push({ "label": item.nom, "value": o.value });
                }
            });
        });
    } else if ((codeDoc==="AK")|(codeDoc==="AL")) {
        data.push({"label" : (codeDoc==="AK")?"نوع الوثيقة":"Type de document" , "value" : (codeDoc==="AK")?"شهادة تلقيح كوفيد-19":"Certificat de vaccination COVID-19" });
        vchamps.map(function (item) {
                datavalue.find(function (o, i) {
                    if (o.code_champ === item.code_champ) {
                        data.push({ "label": (codeDoc==="AK")?item.nom_arabe:item.nom_francais, "value": o.value });
                    }
                });
        });
    }
    return data;
}

window.addEventListener('load', function () {
// Service Worker
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js', {scope: '/qrcheck/'});
// Init
let selectedDeviceId;
const codeReader = new ZXing.BrowserMultiFormatReader();
codeReader.listVideoInputDevices().then((videoInputDevices) => {
    // Select device
    selectedDeviceId = videoInputDevices[0].deviceId;
    if (videoInputDevices.length >= 1) {
        const sourceSelect = document.getElementById("source");
        videoInputDevices.forEach((element) => {
            const sourceOption = document.createElement('option');
            sourceOption.text = element.label;
            sourceOption.value = element.deviceId;
            sourceSelect.appendChild(sourceOption);
        });
        sourceSelect.onchange = () => {
            selectedDeviceId = sourceSelect.value;
            codeReader.reset();
            document.getElementById("start").click();
        }
        document.getElementById("camera").style.display = 'block';
    }
    // Start Scan
    document.getElementById("start").addEventListener('click', () => {
        codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
        if (result) {
            codeReader.reset();
            data = validateThis(result.text);
            resultText = "<table class=\"table table-striped\"><tbody>";
            data.map(function (item){
                resultText+="<tr><th>"+item.label+"</th><td>"+item.value+"</td></tr>";
            });
            resultText += "</tbody></table>";
            document.getElementById("result").innerHTML = resultText;
            var resultModal = new bootstrap.Modal(document.getElementById("resultModal"))
            resultModal.toggle();
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
            console.error(err)
        }
        });
    })
        // STOP
        document.getElementById("reset").addEventListener('click', () => {
            codeReader.reset();
        });
    })
    .catch((err) => {
        console.log(err);
    })
});