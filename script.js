/////////////////////////////////////////////////// RENDER ELEMENTS FROM HTML A PUT THEM IN VARIABLES

// FIRST PAGE - CURRENCY CONVERTOR
const inputFirstCurrency = document.querySelector(".inputFirstCurrency");
const inputSecondCurrency = document.querySelector(".inputSecondCurrency");
const selectFirstCurrency = document.querySelector("#selectFirstCurrency > div > input");
const selectSecondCurrency = document.querySelector("#selectSecondCurrency > div > input");
const selectFirstCurrencyOnClick = document.querySelector("#selectFirstCurrency");
const selectSecondCurrencyOnClick = document.querySelector("#selectSecondCurrency");
const arrowImg = document.querySelector(".arrowImg");
const btnSend = document.querySelector(".btnSend");

// SECOND PAGE - LIST OF WORLD CURRENCIES
const listOfCurrenciesBtn = document.getElementById("listOfWorldCurrencies-tab");
const dateOfListInput = document.getElementById("dateOfListInput");

// THIRD PAGE - DATABASE OF SAVED CONVERSIONS
const recordDiv = document.querySelector(".records");
const recordsDatabase = document.querySelector(".recordsDatabase");
const storedRecordsBtn = document.querySelector("#storedRecords");
const databaseSpanBadge = document.querySelector(".databaseSpanBadge")



// ARRAY WITH SAVED RECORDS
let records = [];

////////////////////////////////////////////////////////// AFTER THE PAGE IS LOADED 

function DisplayRecordsFromLocalStorage() {
    window.addEventListener("load", () =>{
// FETCH INFO ABOUT ACTUAL CURRENCY RATES A SAVE IT IN OBJECT
        displayExchangeRate();
// STORE ITEMS FROM LOCAL STORAGE TO ARRAY
        const recordsDatabaseLocStorage = JSON.parse(localStorage.getItem("records"));
// IF THERE ARE NO ITEMS IN DATABASE IT WILL RETURN EMPTY ARRAY
        records = recordsDatabaseLocStorage ? recordsDatabaseLocStorage : [];
    
// IF THERE ARE ITEMS IT WILL CALL FUNCTION 
        if (records.length > 0) {
            // DISPLAY ALL ITEMS FROM DATABASE IN PAGE
            DisplayDatabase(recordDiv)
            // NUMBER OF ITEMS IS STORED IN SPANBADGE 
            databaseSpanBadge.textContent = `${records.length}`
            // HIDE ALERT ABOUT NO ITEMS IN DATABASE
            document.querySelector(".databaseAlert").style.display = "none";
        }
     })
}

// STORING DATA ABOUT CURRENCIES FROM API TO OBJECT
class Currency {
    constructor(CZK,EUR,GBP,USD,CHF,HRK,HUF,PLN,TRY) {
        this.EUR = EUR;
        this.CZK = CZK;
        this.GBP = GBP;
        this.USD = USD;
        this.CHF = CHF;
        this.HRK = HRK;
        this.HUF = HUF;
        this.PLN = PLN;
        this.TRY = TRY;
    }
};

// CURRENT RATIO BETWEEN CZK AND OTHER CURRENCIES 
class CurrencyToCZK {
    constructor(CZK,EUR,GBP,USD,CHF,HRK,HUF,PLN,TRY) {
        this.CZK = Number(CZK);
        this.EUR = Number((1/EUR).toPrecision(5));
        this.GBP = Number((1/GBP).toPrecision(5));
        this.USD = Number((1/USD).toPrecision(5));
        this.CHF = Number((1/CHF).toPrecision(5));

        this.HRK = Number((1/HRK).toPrecision(5));
        this.HUF = Number((1/HUF).toPrecision(5));
        this.PLN = Number((1/PLN).toPrecision(5));
        this.TRY = Number((1/TRY).toPrecision(5));
    }
};

// VARIABLES WHERE WILL BE STORED OBJECT ABOUT CURRENT CURRENCY RATIO
let currency;
let currencyToCZK;

// IT WILL FETCH INFO ABOUT CURRENCIES FROM API - ASYNC FUNCTION
function fetchAndSaveCurrenciesRates() {
const date = new Date();
const formatTodayStr = formatDate(date);

fetch(`https://api.exchangerate.host/${formatTodayStr}?base=CZK`)
.then(response => response.json())
.then(data => {

    console.log(data.rates)
    let rates = data.rates

    currency = new Currency(rates.CZK,rates.EUR,rates.GBP,rates.USD,rates.CHF,rates.HRK,rates.HUF,rates.PLN,rates.TRY);
    currencyToCZK = new CurrencyToCZK(rates.CZK,rates.EUR,rates.GBP,rates.USD,rates.CHF,rates.HRK, rates.HUF,rates.PLN,rates.TRY);
            }
        );
};


// "CZK", Currency, CurrencyToCZK
// 	EUR = 24.625
// EUR = 0.040609

// CONVERSION OF ONE CURRENCY INTO ANOTHER
function ConversionOfCurrency(currencyOne = "CZK", currencyTwo = "EUR", numberOfMoney, input) {
    let resultNum;
    
if (currency[currencyOne] === 1) {
resultNum = (((currency[currencyOne]) * (currency[currencyTwo])) * parseFloat(numberOfMoney)).toFixed(2);
console.log("example 1")
console.log(currency[currencyOne]);
console.log(currency[currencyTwo])
} else if (currency[currencyOne] > 1) {
    console.log("lala")
    console.log(currency[currencyOne]);
    resultNum = (((currency[currencyTwo]) / (currency[currencyOne])) * parseFloat(numberOfMoney)).toFixed(3);
console.log(currency[currencyTwo])
}
else {
    resultNum = ((currency[currencyTwo] / currency[currencyOne]) * parseFloat(numberOfMoney)).toFixed(2);
    console.log("example 2")
console.log(currency[currencyOne]);
console.log(currency[currencyTwo])
}
    input.value = resultNum
};


// INPUT - CURRENCY - FORM NUM. 1 - INPUT EVENT
const inputFirstCurrencyFun = () => {
    inputFirstCurrency.addEventListener("input", function(event) {
        event.preventDefault();
        const inputNumOne = Number(event.target.value);
        if (isNaN(inputNumOne) || inputNumOne === 0) {
            inputSecondCurrency.value = ""; 
        } 
        else {
            ConversionOfCurrency(selectFirstCurrency.value,selectSecondCurrency.value, inputNumOne, inputSecondCurrency)
        }
        })
};

// INPUT - CURRENCY - FORM NUM. 2 - INPUT EVENT
const inputSecondCurrencyFun = () => {
    inputSecondCurrency.addEventListener("input", function(event) {
        event.preventDefault();
        const inputNumSecond = Number(inputSecondCurrency.value);
        if (isNaN(inputNumSecond) || inputNumSecond === 0) {
            inputFirstCurrency.value = "";
        } else {
        ConversionOfCurrency(selectSecondCurrency.value,selectFirstCurrency.value, inputNumSecond, inputFirstCurrency)
        }
    });
}

// SELECTOR INPUT - FIRST CURRENCY (TOGGLER)
const selectFirstCurrencyFun = () => {
    selectFirstCurrencyOnClick.addEventListener("click", function() {

// IF CURRENCY INPUTS ARE NOT EMPTY
if (    isNaN(inputFirstCurrency.value) || 
    inputFirstCurrency.value === 0 ||
    inputFirstCurrency.value === "" ||

    isNaN(inputSecondCurrency.value) || 
    inputSecondCurrency.value === 0 ||
    inputSecondCurrency.value === "") {

    inputFirstCurrency.value = "";
    inputSecondCurrency.vaue = ""
} else {

// IT CONVERTS CURRENCIES 
    const inputNumOne = Number(inputFirstCurrency.value)
    ConversionOfCurrency(selectFirstCurrency.value,selectSecondCurrency.value, inputNumOne, inputSecondCurrency)
    inputFirstCurrency.value = inputNumOne;
}
        }
    );
};

// SELECTOR INPUT - SECOND CURRENCY (TOGGLER)
const selectSecondCurrencyFun = () => {
    selectSecondCurrencyOnClick.addEventListener("click", function() {

// IF CURRENCY INPUTS ARE NOT EMPTY
if (isNaN(inputFirstCurrency.value) || 
    inputFirstCurrency.value === 0 ||
    inputFirstCurrency.value === "" ||

    isNaN(inputSecondCurrency.value) || 
    inputSecondCurrency.value === 0 ||
    inputSecondCurrency.value === ""
) {
    inputFirstCurrency.value = "";
    inputSecondCurrency.vaue = ""
} else {

// IT CONVERTS CURRENCIES 
    const inputNumOne = Number(inputFirstCurrency.value)
    ConversionOfCurrency(selectFirstCurrency.value,selectSecondCurrency.value, inputNumOne, inputSecondCurrency);
    inputFirstCurrency.value = inputNumOne;
}});
};

// ARROW - CHANGE ORDER OF CURRENCIES
function changeOrderOfCurrencies() {

// IF THERE IS A CLICK ON ARROW IMG
    arrowImg.addEventListener("click", function(e) {

// STORE DATA ABOUT CURRENCY VALUES
let selFirst = selectFirstCurrency.value;
let selSecond = selectSecondCurrency.value;
// STORE DATA ABOUT CURRENCY NAMES
const SelectedTextArr = document.querySelectorAll(".dd-selected-text");

// CHANGE ORDER OF CURRENCY VALUES 
selectFirstCurrency.value = selSecond;
selectSecondCurrency.value = selFirst;

const inputNumOne = Number(inputFirstCurrency.value);

// CONVERSION OF CURRENCIES 
ConversionOfCurrency(selectFirstCurrency.value,selectSecondCurrency.value, inputNumOne, inputSecondCurrency);

// RENDER IMG AND TEXT ABOUT CURRENCY IN 1. SELECTOR
document.querySelector("#selectFirstCurrency > div > a > img").src = `ImgFlags/${selSecond}-flag-tw.png`;
document.querySelector("#selectFirstCurrency > div > a > label").textContent = `${selSecond}`;
   
// RENDER IMG AND TEXT ABOUT CURRENCY IN 2. SELECTOR
document.querySelector("#selectSecondCurrency > div > a > img").src = `ImgFlags/${selFirst}-flag-tw.png`;
document.querySelector("#selectSecondCurrency > div > a > label").textContent = `${selFirst}`

// PUT NAME OF FIRST CURRENCY TO SECOND SELECTOR
SelectedTextArr[0].innerHTML = `${selectFirstCurrency.value}`

// IF THERE IS NOTHING IN INPUTS, IT WILL CLEAR THEM
if (inputFirstCurrency.value === "" || inputSecondCurrency.value === "") {
    inputFirstCurrency.value = "";
    inputSecondCurrency.value = ""; 
} });

};

// OBJECT OF SAVED RECORD IN DATABES
class Record {
    constructor(inputFirst,currencyFirst,inputSecond,currencySecond) {
        this.inputFirst = inputFirst;
        this.currencyFirst = currencyFirst;
        this.inputSecond = inputSecond;
        this.currencySecond = currencySecond;
        this.dateCz = new Date().toLocaleDateString("cs-CZ", {
            second: "numeric",
            minute: "numeric",
            hour: "numeric",
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
};

_getDataAboutRecord () {
    return `Dne ${this.dateCz} ${this.inputFirst} ${this.currencyFirst} = ${this.inputSecond} ${this.currencySecond}`
    }
};


/////////////////////////////////////////////////////////////// KURZOVNÍ LIST

// ELEMENTS FOR CURRENCY LIST
const USDTab = document.getElementById("USDTab");
const GBPTab = document.getElementById("GBPTab");
const EURTab =  document.getElementById("EURTab");
const CHFTab =  document.getElementById("CHFTab");

const HRKTab = document.getElementById("HRKTab");
const HUFTab = document.getElementById("HUFTab");
const PLNTab =  document.getElementById("PLNTab");
const TRYTab =  document.getElementById("TRYTab");

// FORMAT DATE TO ISO FORMAT
const formatDate = (date) => {
    let d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
};

// IT GETS INFORMATION ABOUT CURRENCY RATES FROM INSERTED DATE
function FormatDateAndGetApiInfo (date) {
    const formatTodayStr = formatDate(date);
    dateOfListInput.value = formatTodayStr
    console.log(formatTodayStr)
    
        fetch(`https://api.exchangerate.host/${formatTodayStr}?base=CZK`)
        .then(response => response.json())
        .then(data => {
            
           console.log(data)    
            currencyToCZK = new CurrencyToCZK(
            data.rates.CZK,
            data.rates.EUR,
            data.rates.GBP,
            data.rates.USD,
            data.rates.CHF,
            data.rates.HRK,
            data.rates.HUF,
            data.rates.PLN,
            data.rates.TRY);

            USDTab.textContent = currencyToCZK.USD;
            GBPTab.textContent = currencyToCZK.GBP;
            EURTab.textContent = currencyToCZK.EUR;
            EURTab.textContent = currencyToCZK.EUR;
            CHFTab.textContent = currencyToCZK.CHF;
            HRKTab.textContent = currencyToCZK.HRK;
            HUFTab.textContent = (currencyToCZK.HUF * 100).toPrecision(4);
            PLNTab.textContent = currencyToCZK.PLN;
            TRYTab.textContent = currencyToCZK.TRY;

        })
        .catch(() =>{
                USDTab.textContent = currencyToCZK.USD;
                GBPTab.textContent = currencyToCZK.GBP;
                EURTab.textContent = currencyToCZK.EUR;
                EURTab.textContent = currencyToCZK.EUR;
                CHFTab.textContent = currencyToCZK.CHF;
                HRKTab.textContent = currencyToCZK.HRK;
                HUFTab.textContent = currencyToCZK.HUF;
                PLNTab.textContent = currencyToCZK.PLN;
                TRYTab.textContent = currencyToCZK.TRY;
        })
};

// GET INFORMATION ABOUT UP-TO-DATE CURRENCY RATES
function displayExchangeRate() {
    const date = new Date();
    FormatDateAndGetApiInfo(date)
};

// IT WILL CHANGE CURRENCY TABLE - FOR INSERTED DATE
function ChangeDateOfCurrenciesList() {
dateOfListInput.addEventListener("change", function(e) {
const firstPossibleDay = new Date("2000-01-01");
const today = new Date();
const inputDay = new Date(`${e.target.value}`)

// IF DATE IS TOO OLD OR TOO NEW
if (inputDay > today || inputDay < firstPossibleDay ) {
    document.querySelector(".failedDatabaseNotice").style.display = "block";
} else {
    e.preventDefault()
    FormatDateAndGetApiInfo(e.target.value)
    document.querySelector(".failedDatabaseNotice").style.display = "none";
}  
    });
};

// DISPLAY DATABASE ID PAGE 
function DisplayDatabase (div) {
    div.classList.add("backGroundRecords");
    div.innerHTML = `
    <h3 class = "text-center" style= "color:rgb(13, 18, 105)" > Databáze uložených kurzů </h3>
    <table class="recordJS" style="width: 100%; border: 0.2rem solid #0d1269; color:rgb(13, 18, 105)">
    <tr style="border: 0.2rem solid black;">
      <th>Datum</th>
      <th>Zadaný kurz</th>
    </tr>
  </table>
  <div class="d-flex justify-content-center ">
  <button type="button " class="btn btn-danger btnDelete">Smazat vše</button>
</div>
    `
const RecordJsDiv = document.querySelector(".recordJS")

// STORE EVERY RECORD TO DATABASE
records.forEach(function(record) {
        RecordJsDiv.innerHTML +=  `
            <tr class="RecordPadItem" style="border-bottom: 1px solid rgb(13, 18, 105);" >
      <td>${record.dateCz}</td>
      <td>${record.inputFirst} ${record.currencyFirst} = ${record.inputSecond} ${record.currencySecond} 
       </td>

      <td> <div class="p-1 d-flex justify-content-end align-content-end flex-wrap"> <button class= "btn btn-outline-danger btn-deleteOne"> smazat </button> <div> <td>
            </tr>
            `
            }
        );

// BTN DELETE ALL RECORDS
const btnDeleteAll = document.querySelector(".btnDelete");
// BTN DELETE ONE RECORDS
const btnDeleteOne = document.querySelectorAll(".btn-deleteOne");


// REAGUJE NA TLAČÍTKO SMAZAT - SMAŽE VŽDY JEN URČITÝ ZÁZNAM V DATABÁZI


// DELETE ONE PARTICULAR RECORD FROM DATABASE
btnDeleteOne.forEach((btn,index) => {
    btn.addEventListener("click", function() {
        records.splice(index, 1)
        localStorage.setItem("records", JSON.stringify(records));
        DisplayDatabase(recordDiv);

        databaseSpanBadge.textContent = `${records.length}`

        if(records.length === 0) {
            div.innerHTML = "";
            div.classList.remove("backGroundRecords");
            document.querySelector(".databaseAlert").style.display = "block";
        } 
    })
});

//  DELETE ONE ALL RECORDS FROM DATABASE
btnDeleteAll.addEventListener("click", function() {
   if (confirm("Opravdu si přejete vše odstranit?")) {
    localStorage.removeItem("records");
    records = [];
    div.innerHTML = "";
    div.classList.remove("backGroundRecords")
    databaseSpanBadge.textContent = `${records.length}`;
    document.querySelector(".databaseAlert").style.display = "block";
   }
})};

// SAVE RECORD ABOUT CURRENCY TO DATABASE (FIRST PAGE)
function SaveRecordInDatabase() {
    btnSend.addEventListener("click", function() {
        setTimeout(() => {
// ONLY IF THERE IS A NUMBER BIGGER THAN ONE IN INPUT
            if (
                isNaN(inputFirstCurrency.value) || 
                inputFirstCurrency.value === 0 ||
                inputFirstCurrency.value === "" ||

                isNaN(inputSecondCurrency.value) || 
                inputSecondCurrency.value === 0 ||
                inputSecondCurrency.value === ""
                ) 
        {
// DISPLAY FAILED CONVERTION NOTICE IN PAGE
            document.querySelector(".failedConvertionNotice").style.display = "initial";
            document.querySelector(".successConvertionNotice").style.display = "none";
// AFTER 6 SECOND NOTICE DISAPPEAR
            setTimeout(() => {
             document.querySelector(".failedConvertionNotice").style.display = "none"
            }, 6000);
                    

            } else {
// SAVE DATA ABOUT CURRENT EXCHANGE IN INPUTS IN DATABASE
                const inputNumOne = Number(inputFirstCurrency.value);
                const inputNumSecond = Number(inputSecondCurrency.value);
                const firstCurrency = selectFirstCurrency.value;
                const secondCurrency = selectSecondCurrency.value;
                const record = new Record(inputNumOne,firstCurrency,inputNumSecond,secondCurrency);
                records.push(record);
                localStorage.setItem("records", JSON.stringify(records));
                DisplayDatabase(recordDiv);
                databaseSpanBadge.textContent = `${records.length}`;
                
               document.querySelector(".successConvertionNotice").style.display = "initial";
               document.querySelector(".failedConvertionNotice").style.display = "none";
               document.querySelector(".databaseAlert").style.display = "none";
               setTimeout(() => {
                document.querySelector(".successConvertionNotice").style.display = "none"
               }, 3500);
            }
        }, 50);
    });
}

// CALLING OF ALL FUNCTIONS - ON/OFF
function AppOn() {
    DisplayRecordsFromLocalStorage();
    fetchAndSaveCurrenciesRates();
    inputFirstCurrencyFun();
    inputSecondCurrencyFun();
    selectFirstCurrencyFun();
    selectSecondCurrencyFun();
    changeOrderOfCurrencies();
    ChangeDateOfCurrenciesList();
    SaveRecordInDatabase();
};

AppOn();





