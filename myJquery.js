// MAKES TOGGLE MENU FOR FIRST INPUT
$('#selectFirstCurrency').ddslick({
    width: 140,
    selectText: "CZK",
    background: "rgb(204, 231, 244)",
});

// MAKES TOGGLE MENU FOR SECOND INPUT
$('#selectSecondCurrency').ddslick({
    width: 140,
    selectText: "CZK",
    background: "rgb(204, 231, 244)",
});

// MAKES DIFFERENT TEXT COLOR FOR ACTIVE LINK IN NAV MENU FOR MOBILE DEVICES
$(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});