"use strict";

function makeDoubleDigit(input) {
    input = input.toString()
    switch(input.length) {
        case 0:
            return "00";
        break;
        
        case 1:
            return "0"+input;
        break;

        case 2:
            return input;
        break;
    }
    return input
}

 var genderMap = {
    "Female":"1",
    "Male":"2",
    "Transgender":"3",
 }

var currrentAddressCategoryMap = {
    "Not Categorized":"04",
    "Office Address":"03",
    "Permanent Address":"01",
    "Residence Address":"02",
 }
            
var currrentAddressStateMap = {
    "Andaman & Nicobar Islands":"35",       
    "Andhra Pradesh":"28",          
    "APO Address":"99",         
    "Arunachal Pradesh":"12",       
    "Assam":"18",       
    "Bihar":"10",       
    "Chandigarh":"04",          
    "Chhattisgarh":"22",        
    "Dadra &amp; Nagar Haveli":"26",        
    "Daman &amp; Diu":"25",         
    "Delhi":"07",       
    "Goa":"30",         
    "Gujarat":"24",         
    "Haryana":"06",         
    "Himachal Pradesh":"02",        
    "Jammu &amp; Kashmir":"01",         
    "Jharkhand":"20",       
    "Karnataka":"29",       
    "Kerala":"32",          
    "Lakshadweep":"31",         
    "Madhya Pradesh":"23",          
    "Maharashtra":"27",         
    "Manipur":"14",         
    "Meghalaya":"17",       
    "Mizoram":"15",         
    "Nagaland":"13",        
    "Orissa":"21",          
    "Pondicherry":"34",         
    "Punjab":"03",          
    "Rajasthan":"08",       
    "Sikkim":"11",          
    "Tamil Nadu":"33",          
    "Telangana":"36",       
    "Tripura":"16",         
    "Uttar Pradesh":"09",       
    "Uttaranchal":"05",         
    "West Bengal":"19",
}

var creditTypeMap = {      
    "auto loan":"IA01",
    "building":"IA102",
    "business loan - general":"IA12",
    "business loan - income generating":"IA13",
    "business loan - priority sector - general":"IA14",
    "business loan - priority sector - agriculture":"IA15",
    "business loan against bank deposits":"IA16",
    "buy other house":"IA100",
    "buy small farm":"IA101",
    "credit card":"IA07",
    "education loan":"IA06",
    "equipment loan":"IA09",
    "gold loan":"IA05",
    "housing loan":"IA02",
    "lease":"IA08",
    "loan against property":"IA03",
    "no information":"IA104",
    "non funded credit facility":"IA11",
    "other":"IA99",
    "overdraft":"IA10",
    "personal loan":"IA04",
    "rest":"IA103",
}
var dobDayMap = {
    "1":1,
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "11":11,
    "12":12,
    "13":13,
    "14":14,
    "15":15,
    "16":16,
    "17":17,
    "18":18,
    "19":19,
    "20":20,
    "21":21,
    "22":22,
    "23":23,
    "24":24,
    "25":25,
    "26":26,
    "27":27,
    "28":28,
    "29":29,
    "30":30,
    "31":31,
 }
var dobMonthMap = {
    "1":"01",
    "01":"01",
    "2":"02",
    "02":"02",
    "3":"03",
    "03":"03",
    "4":"04",
    "04":"04",
    "5":"05",
    "05":"05",
    "6":"06",
    "06":"06",
    "7":"07",
    "07":"07",
    "8":"08",
    "08":"08",
    "9":"09",
    "09":"09",
    "10":"10",
    "11":"11",
    "12":"12",
 }

chrome.storage.sync.get(["CRIFElementIndex","CRIFElementLastIndex"], function(items){
    var CRIFElementIndex = items["CRIFElementIndex"];
    var CRIFElementLastIndex = items["CRIFElementLastIndex"];
    if(CRIFElementIndex<=CRIFElementLastIndex){ 
        chrome.storage.sync.get([CRIFElementIndex.toString()], function(items){
            var dataObject = items[CRIFElementIndex.toString()]
            document.querySelector('select[name="creditType"]').value = creditTypeMap["personal loan"];
            document.querySelector('input[name="creditAmount"]').value = dataObject["creditAmount"];
            document.querySelector('input[name="firstName"]').style.background = "none"
            document.querySelector('input[name="firstName"]').value = dataObject["firstName"];
            document.querySelector('input[name="lastName"]').style.background = "none"
            document.querySelector('input[name="lastName"]').value = dataObject["lastName"];
            document.querySelector('select[name="dobDay"]').value =dobDayMap[dataObject["dobDay"]];
            document.querySelector('select[name="dobMonth"]').value =dobMonthMap[dataObject["dobMonth"]];
            document.querySelector('select[name="dobYear"]').value = dataObject["dobYear"];
            document.querySelector('input[name="fatherName"]').value = dataObject["fatherName"];
            document.querySelector('input[name="pan"]').value = dataObject["pan"];
            document.querySelector('input[name="telephoneNumber1"]').value = dataObject["telephoneNumber1"];
            document.querySelector('input[name="addr1Line1"]').style.background = "none"
            document.querySelector('input[name="addr1Line1"]').value = dataObject["addr1Line1"];
            document.querySelector('input[name="villageLocality1"]').value = dataObject["villageLocality1"];
            document.querySelector('input[name="addr1Pin"]').value = dataObject["addr1Pin"];
            chrome.storage.sync.set({'CRIFElementIndex':CRIFElementIndex+1}, function(){});
        })
    }
});
