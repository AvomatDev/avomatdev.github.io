// my variable delaration section
let bankcode = document.getElementById("bankcode");
let codeError = document.getElementById("codeError");

let opr = document.getElementById("opr");
let oprError = document.getElementById("oprError");

let pin = document.getElementById("pin");
let pinError = document.getElementById("pinError");

let pn = document.getElementById("pn");
let pnError = document.getElementById("pnError");

let acct = document.getElementById("acct");
let acctError = document.getElementById("acctError");

let amt = document.getElementById("amt");
let amtError = document.getElementById("amtError");

let selectbank = document.getElementById("selectbank");
let selectbankerror = document.getElementById("selectbankerror");

let btnsubmit = document.getElementById("btnsubmit");



// my event listener section
btnsubmit.addEventListener("click", function () {    
    validateData();
})

function validateData() {

    if (opr.value == "") {
        oprError.innerHTML = "Select Banking Option"
    } else if (opr.value == "Aa") {
        airtimeacceptvalue()
    } else if (opr.value == "Cc") {
        transferacceptvalue()
    } else {
        oprError.innerHTML = "Transaction currently not available"
    }

}

function airtimeacceptvalue() {

    if (bankcode.value == "") {
        codeError.innerHTML = "Enter bank code"
    } else {
        codeError.innerHTML = ""
    }

    if (pin.value == "") {
        pinError.innerHTML = "This section is required"
    } else {
        pinError.innerHTML = ""
    }

    if (amt.value == "") {
        amtError.innerHTML = "This section is required"
    } else {
        amtError.innerHTML = ""
    }
    if (pn.value == "") {
        pnError.innerHTML = "Enter your pin"
    } else {
        pnError.innerHTML = ""
    }

    if (bankcode.value != "" && opr.value != "" && pin.value != "" && amt.value != "" && pn.value != "") {
        messageTxt.innerHTML = ("Your " + amt.value + " Airtime Transaction " + pn.value + " was Successful");
        exitApp();
    }
        
    
}

function transferacceptvalue() {

    if (bankcode.value == "") {
        codeError.innerHTML = "Enter bank code"
    } else {
        codeError.innerHTML = ""
    }

    if (pin.value == "") {
        pinError.innerHTML = "This section is required"
    } else {
        pinError.innerHTML = ""
    }

    if (amt.value == "") {
        amtError.innerHTML = "This section is required"
    } else {
        amtError.innerHTML = ""
    }

    if (acct.value == "") {
        acctError.innerHTML = "This section is required"
    } else {
        acctError.innerHTML = ""
    }

    if (selectbank.value == "") {
        selectbankerror.innerHTML = "This section is required"
    } else {
        selectbankerror.innerHTML = ""
    }

    if (bankcode.value != "" && opr.value != "" && pin.value != "" && amt.value != "" && pn.value != "" && selectbank.value !="") {
        messageTxt.innerHTML = ("Your " + amt.value + " Transfer to " + acct.value + " was Successful");
        exitApp()
    }
   
} 

function exitApp() {
    opr.value = ""
    pin.value = ""
    amt.value = ""
    selectbank.value = ""
    pn.value = ""
    bankcode.value = ""
    acct.value=""

}




