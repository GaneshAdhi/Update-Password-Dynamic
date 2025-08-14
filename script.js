// form Container
let formEl = document.getElementById("updatePasswordForm");

//Input Element  
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");

//Error Message Para

let newPasswordErrMsgPara = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgPara = document.getElementById("confirmPasswordErrMsg");

//Error Message 
let newPasswordErrMsg = "Required*";
let confirmPasswordErrMsg = "Password must be same";

// update button  
let updateBtnEl = document.getElementById("updateBtn");

// newPasswordErrMsgPara Function 

let errorMsgNew = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgPara.textContent = newPasswordErrMsg;
    } else {
        newPasswordErrMsgPara.textContent = ""
    }
}




// Update Button function
let errorMsgNewConfirm = function() {

    if (newPasswordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrMsgPara.textContent = confirmPasswordErrMsg;
    } else {
        confirmPasswordErrMsgPara.textContent = ""
    }
}

newPasswordEl.addEventListener("blur", errorMsgNew);
confirmPasswordEl.addEventListener("blur", errorMsgNewConfirm);




//form container Funtion
formEl.addEventListener("submit", function(event) {

    event.preventDefault();

    errorMsgNew();
    errorMsgNewConfirm();

});
