// BTN ELEMENT - SEND MESSAGE
const btnSendMessage = document.getElementById("btnSendMessage");

// AFTER CLICK ON BTN - SEND MESSAGE
btnSendMessage.addEventListener("click", function (params) {
    let fromNameInputValue = document.getElementById("fromName").value;
    let fromMailInputValue = document.getElementById("fromMail").value;
    let msgInput = document.getElementById("msg").value;

    // IF MESSAGE INPUT IS EMPTY DISPLAY WARNING NOTICE
if (document.querySelector("#msg").value === "") {
    document.querySelector(".emptyMsgNotice").style.display = "initial";
    setTimeout(() => {
        // AFTER 5 SECONDS NOTICE DISAPPEAR
       document.querySelector(".emptyMsgNotice").style.display = "none";
   }, 5000);

    // IF MAIL INPUT IS EMPTY DISPLAY WARNING NOTICE
} else if (document.querySelector("#fromMail").value === "") {
    document.querySelector(".wrongMailNotice").style.display = "initial";
    setTimeout(() => {
           // AFTER 5 SECONDS NOTICE DISAPPEAR
       document.querySelector(".wrongMailNotice").style.display = "none";
   }, 5000);
} else {


    // BODY AND HEAD OF MESSAGE - www.emailjs.com
let tempParams = {
        from_name: fromNameInputValue,
        to_name:fromMailInputValue,
        message: msgInput
    };

    // SEND MESSAGE TO MY EMAIL
emailjs.send("service_nz5lwrd","template_8gxme0b",tempParams)
    .then(function(res) {
         console.log("success", res.status)

    // CLEAR INPUT - NAME, MAIL, MESSAGE
         document.getElementById("fromName").value = "";
         document.getElementById("fromMail").value = "";
         document.getElementById("msg").value = "";

    // SUCCESS NOTICE ABOUT SENDED MAIL
         document.querySelector(".successMailNotice").style.display = "initial";

         setTimeout(() => {
               // AFTER 4 SECONDS NOTICE DISAPPEAR
            document.querySelector(".successMailNotice").style.display = "none";
        }, 4000);
        });
}});



