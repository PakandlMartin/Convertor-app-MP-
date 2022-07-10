<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
                                                          <!-- LINK - BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                                                          <!-- LINK - MY STYLES -->
    <link rel="stylesheet" href="styles.css">
                                                          <!-- LINK - FONTS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

                                                           <!-- SCRIPT - BOOTSTRAP JS -->
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                                                          <!-- SCRIPT - JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.ddslick.min.js" ></script>
                                                          <!-- SCRIPT - MY JS  -->
    <script defer src="myJquery.js"></script>
    <script defer src="mail.js"></script>
    <script defer src="script.js"></script>
                                                             <!-- SCRIPT - MAIL   -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">emailjs.init('A4TQUcyXbE2_QKZ7h')</script>
    
</head>

<body>
 <div class="content">
    <div class="main-body containerMy">
                                                                  <!-- HEADER -->
      <header>
        <h3 class="text-center titleH3">Převodník měn - Zjistěte kurz snadno a rychle!</h3>
      </header> 
                                                                 <!-- NAV MENU - FOR LARGE VIEWPORT -->
      <nav>
        <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
          <li class="nav-item active" role="presentation">
              <button class="nav-link fw-bold btnNumOne active" id="actualCourse-tab" data-bs-toggle="tab" data-bs-target="#actualCourse" type="button" role="tab" >Aktuální převod kurzů 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 15 19">
                 <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                 <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                </svg>
              </button>
          </li>

          <li class="nav-item" role="presentation">
              <button class="nav-link fw-bold" id="listOfWorldCurrencies-tab" data-bs-toggle="tab" data-bs-target="#listOfWorldCurrencies" type="button" role="tab">Kurzovní list 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 15 19">
                 <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                 <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                </svg>
              </button>
          </li>

          <li class="nav-item" role="presentation">
              <button class="nav-link fw-bold" id="storedRecords-tab" data-bs-toggle="tab" data-bs-target="#storedRecords" type="button" role="tab">Databáze uložených kurzů    
                <span class="databaseSpanBadge badge bg-primary rounded-pill text-white"></span>
              </button>
          </li>

          <li class="nav-item " role="presentation">
              <button class="nav-link fw-bold " id="aboutApp-tab" data-bs-toggle="tab" data-bs-target="#aboutApp" type="button" role="tab">O aplikaci 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 15 19">
                 <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                 <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
               </svg>
              </button>
          </li>

          <li class="nav-item" role="presentation">
              <button class="nav-link fw-bold contactBtn" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">Kontakt 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 15 19">
                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                 <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </button>
          </li>
        </ul>
      </nav>
                 <!-- NAV MENU - FOR MOBILE DEVICES (RESPONSIVE) -->
      <nav class="navbar navbar-light bg-light" id="MyMenuResponse">
                                                                                  <!-- NAV TOGGLER -->
           <div class="nav nav-tabs d-flex">
                <button class="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"   aria-controls="navbarNavAltMarkup"      aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                                                                                   <!-- NAV LINKS -->
              <div class="collapse navbar-collapse active" id="navbarNavAltMarkup">
                  <ul class="navbar-nav nav-tabs">
                      <button role="presentation" class="nav-link " id="actualCourse-tab" data-bs-toggle="tab" data-bs-target="#actualCourse" type="button" role="tab" >Aktuální převod kurzů 
                       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 15 19">
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                      </svg>
                    </button>

                    <button class="nav-link " id="listOfWorldCurrencies-tab" data-bs-toggle="tab" data-bs-target="#listOfWorldCurrencies" type="button" role="tab">Kurzovní list   
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 15 19">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                      </svg>
                    </button>

                    <button class="nav-link" id="storedRecords-tab" data-bs-toggle="tab" data-bs-target="#storedRecords" type="button" role="tab">Databáze uložených kurzů 
                      <span class="databaseSpanBadge badge bg-primary rounded-pill text-white"></span>
                    </button>

                    <button class="nav-link" id="aboutApp-tab" data-bs-toggle="tab" data-bs-target="#aboutApp" type="button" role="tab">O aplikaci 
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 15 19">
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      </svg>
                    </button>

                    <button class="nav-link contactBtn" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">Kontakt 
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 15 19">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </button>
                </ul>
             </div>
          </div>
      </nav>
                                  <!-- NAV ITEMS -->
        <section>
          <div class="tab-content" id="myTabContent">
                        <!-- FIRST PAGE - CURRENCY CONVERTOR -->
          <div class="tab-pane fade active show" id="actualCourse" role="tabpanel">
              <div class="row ClassMainMy">
                  <div class="firstCurrency d-flex align-items-center col-md-5 col-sm-12">
                      <div class="input-group input-group-lg">
                                        <!-- FIRST CURRENCY INPUT -->
                          <select id="selectFirstCurrency" class="btn btn-primary dropdown-toggle selectFirstCurrency">
                              <option value="CZK" data-imagesrc="ImgFlags/CZK-flag-tw.png">CZK </option> 
                              <option value="EUR" data-imagesrc="ImgFlags/EUR-flag-tw.png">EUR</option>
                              <option value="USD" data-imagesrc="ImgFlags/USD-flag-tw.png">USD</option>
                              <option value="GBP" data-imagesrc="ImgFlags/GBP-flag-tw.png">GBP</option>
                              <option value="CHF" data-imagesrc="ImgFlags/CHF-flag-tw.png">CHF</option>
                              <option value="HRK" data-imagesrc="ImgFlags/HRK-flag-tw.png">HRK</option>
                              <option value="HUF" data-imagesrc="ImgFlags/HUF-flag-tw.png">HUF</option>
                              <option value="PLN" data-imagesrc="ImgFlags/PLN-flag-tw.png">PLN</option>                
                              <option value="TRY" data-imagesrc="ImgFlags/TRY-flag-tw.png">TRY</option>
                          </select>

                          <input type="text" class="form-control inputFirstCurrency" aria-label="Text input with dropdown button" style="padding: 0.7rem 1rem;" placeholder="Částka" id="floatingInputGrid">
                        </div>
                  </div>
                
                                        <!-- ARROW CIRCLE -->
                  <div class="arrowImg col-md-2 col-sm-12 d-flex justify-content-center">
                     <a href="#arrowImgRotate">
                      <img tabindex="0" class="arrowImgRotate"  src="arrow-circle.png" width="100rem" alt="">
                     </a> 
                  </div>

                                     <!-- SECOND CURRENCY INPUT -->
                  <div class="secondCurrency d-flex align-items-center col-md-5 col-sm-12 ">
                      <div class="input-group col input-group-lg">
                          <select   id="selectSecondCurrency" class="btn btn-primary dropdown-toggle selectSecondCurrency">
                              <option value="EUR" data-imagesrc="ImgFlags/EUR-flag-tw.png">EUR</option>
                              <option value="CZK" data-imagesrc="ImgFlags/CZK-flag-tw.png">CZK</option>
                              <option value="USD" data-imagesrc="ImgFlags/USD-flag-tw.png">USD</option>
                              <option value="GBP" data-imagesrc="ImgFlags/GBP-flag-tw.png">GBP</option>
                              <option value="CHF" data-imagesrc="ImgFlags/CHF-flag-tw.png">CHF</option>
                              <option value="HRK" data-imagesrc="ImgFlags/HRK-flag-tw.png">HRK</option>
                              <option value="HUF" data-imagesrc="ImgFlags/HUF-flag-tw.png">HUF</option>
                              <option value="PLN" data-imagesrc="ImgFlags/PLN-flag-tw.png">PLN</option>                
                              <option value="TRY" data-imagesrc="ImgFlags/TRY-flag-tw.png">TRY</option>
                          </select>
                          <input type="text" class="form-control inputSecondCurrency" style="padding: 0.7rem 1rem;"  aria-label="Text input with dropdown button" placeholder="Částka">
                          </ul>
                        </div>
                  </div>
              </div>
                                    <!-- BUTTON - SAVE CONVERTION -->
              <div class="d-flex justify-content-center ">
                  <button type="button " class="btn btn-light btnSend">Ulož kurz</button>
              </div>

                    <!-- SUCCESS ALERT -->
                <div class="d-flex justify-content-center  ">
                 <div class="successConvertionNotice alert alert-success text-center fw-bold" role="alert" style="display: none;">
                  Převod kurzu byl úspěšně vložen do databáze!
                 </div>
                </div>

                      <!--FAILED ALERT -->
                <div class="d-flex justify-content-center">
                <div class="failedConvertionNotice alert alert-danger text-center fw-bold " role="alert">
                  Převod kurzu byl neúspěšný! Špatně vložené údaje.
                </div>
                </div>
          </div>
                    <!-- SECOND PAGE -  LIST OF WORLD CURRENCIES -->
          <div class="tab-pane fade" id="listOfWorldCurrencies" role="tabpanel" >

            <h3 class="text-center text-white mt-3"> Kurzovní list ke dni:</h3>
    
                      <!--INPUT - CALENDAR -->
                <div class="row d-flex justify-content-center">
                  <div class="col-md-5">
                    <input id="dateOfListInput" class="form-control text-center" type="date" />
                  </div>
                </div>
                       <!--FAILED ALERT -->
                <div class="failedDatabaseNotice alert alert-danger text-center fw-bold mt-3" role="alert">
                  Zadáváte neplatné datum (ještě nenastalo, nebo je příliš staré na to, aby bylo v databázi).
                </div>
                       <!--WORLD CURRENCIES TABLE -->
                <div class="ms-2 me-2 mt-4">
                  <table class="table table-primary table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Země</th>
                        <th scope="col">Měna</th>
                        <th scope="col">Množství</th>
                        <th scope="col">Kód</th>
                        <th scope="col">Kurz (KČ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Eurozóna <img src="ImgFlags/EUR-flag-tw.png" alt="" width="25rem"></th>
                        <td>Euro</td>
                        <td>1</td>
                        <td>EUR</td>
                        <td id="EURTab"></td>
                      </tr>
                      <tr>
                        <th scope="row">Švýcarsko <img src="ImgFlags/CHF-flag-tw.png" alt="" width="25rem"></th>
                        <td>Švýcarský frank</td>
                        <td>1</td>
                        <td>CHF</td>
                        <td id="CHFTab"></td>
                      </tr>
                      <tr>
                        <th scope="row">USA <img src="ImgFlags/USD-flag-tw.png" alt="" width="25rem"></th>
                        <td> Dolar</td>
                        <td>1</td>
                        <td>USD</td>
                        <td id="USDTab"></td>
                      </tr>
                      <tr>
                        <th scope="row">Velká Británie <img src="ImgFlags/GBP-flag-tw.png" alt="" width="25rem"></th>
                        <td>Libra</td>
                        <td>1</td>
                        <td>GBP</td>
                        <td id="GBPTab"></td>
                      </tr>
                      <tr>
                        <th scope="row">Chorvatsko <img src="ImgFlags/HRK-flag-tw.png" alt="" width="25rem"></th>
                        <td>Kuna</td>
                        <td>1</td>
                        <td>HRK</td>
                        <td id="HRKTab"></td>
                      </tr>
                      <tr>
                        <th scope="row">Maďarsko <img src="ImgFlags/HUF-flag-tw.png" alt="" width="25rem"></th>
                        <td>Forint</td>
                        <td>100</td>
                        <td>HUF</td>
                        <td id="HUFTab"></td>
                      </tr>
                      <tr>
                        <th scope="row">Polsko <img src="ImgFlags/PLN-flag-tw.png" alt="" width="25rem"></th>
                        <td>Zlotý</td>
                        <td>1</td>
                        <td>PLN</td>
                        <td id="PLNTab"></td>
                      </tr>
                      <tr>
                        <th scope="row">Turecko <img src="ImgFlags/TRY-flag-tw.png" alt="" width="25rem"></th>
                        <td>Lira</td>
                        <td>1</td>
                        <td>TRY</td>
                        <td id="TRYTab"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
           </div>

                  <!-- THIRD PAGE - DATABASE OF SAVED CONVERSIONS -->
          <div class="tab-pane fade " id="storedRecords" role="tabpanel" >
                    <!--FAILED ALERT -->

                    <div class="d-block justify-content-center mt-4">
                      <div class="databaseAlert alert alert-secondary text-center fw-bold" role="alert">
                       Zatím nejsou vloženy žádné převody kurzů.
                      </div>
                    </div>


                    <div class="records recordsClass">
                    </div>
          </div>
                      <!-- FOURTH PAGE - ABOUT APP -->
          <div class="tab-pane fade" id="aboutApp" role="tabpanel" >
              <div class="AboutAppText mt-4">
                        <!--TEXT ABOUT APP-->
                  <h3 class=" text-center ">O aplikaci</h3>
                      <p class=" fs-5 text-justify">
                         Převodník měn slouží k rychlému a přehlednému přepočtu částky z jedné měny do měny jiné. K výsledku se dostanete bez zbytečného klikání a načítání. Převod si můžete vložit do databáze, kde vám zůstane i po znovunačtení stránky. Přehled současných, ale i dávno minulých kurzů, naleznete v kurzovním listu, kde se pomocí kalendáře velmi rychle zorientujete. Informace o jednotlivých kurzech aplikace získává pomocí REST API z <a class="text-info" href="https://exchangerate.host/#/">exchangerate.host</a>. K posílání zpráv v kontaktech je používána API od <a class="text-info" href="https://www.emailjs.com/">emailjs.com</a>.</p> 
                      </p>

                       <!--SECTION ABOUT USED TECHNOLOGIES-->
                  <h3 class="text-center mb-3">Použité technologie</h3>

                       <!--IMGS OF USED TECHNOLOGIES-->
                  <div class="group-of-cards mb-4">
                    <div class="card-group">
                      <div class="card d-flex pb-4">
                        <div class="d-flex justify-content-center " >
                          <img style="width: 90px; padding-top: 1rem;" src="languages/html.png" class="cardImg cardResponsive" alt="..."> 
                        </div>
                      </div>
                            
                        <div class="card d-flex">
                              <div class="d-flex justify-content-center cardResponsive" >
                                <img style="width: 90px; padding-top: 1rem;" src="languages/css.png" class="cardImg cardResponsive" alt="..."> 
                              </div>
                        </div>

                        <div class="card d-flex">
                              <div class="d-flex justify-content-center cardResponsive" >
                                <img style="width: 105px; padding-top: 1rem;" src="languages/js.png" class="cardImg cardResponsive" alt="..."> 
                              </div>
                        </div>

                        <div class="card d-flex">
                              <div class="d-flex justify-content-center cardResponsive" >
                                <img style="width: 90px; padding-top: 1.8rem;" src="languages/jquery.png" class="cardImg cardResponsive" alt="..."> 
                              </div>
                        </div>

                            <div class="card d-flex">
                              <div class="d-flex justify-content-center cardResponsive" >
                                <img style="width: 110px; padding-top: 2.5rem;" src="languages/Bootstrap.png" class="cardImg cardResponsive" alt="..."> </div>
                            </div>
                    </div>
                  </div>
             </div>
          </div>
                      <!-- FIFTH PAGE - CONTACT-->
            <div class="tab-pane fade" id="contact" role="tabpanel" > 
              <div class="contact-text mt-4 mb-4">
    
                 <div class="container">
                   <div class="row">
                      <div class="col-md-6">
                        <div class="ContactFirstEl">
                            <h3 class=" text-center">
                               O mně
                           </h3>
                            <p class="text-justify"> Jmenuji se <span class="text-primary">Martin Pakandl</span>  a jsem začínající programátor webových aplikací. Při jejich tvorbě používám <span class="text-primary">HTML, CSS, JavaScript, JQuery a Bootstrap</span>.
                            </p>

                            <p class="text-justify"> V současné době se učím pracovat s frameworkem <span class="text-primary">React.js</span> a tvorbou backendových aplikací v prostředí <span class="text-primary">Node.js</span>. V budoucnu bych se rád věnoval spíše vývoji backendu.  
                            </p>
                              <img src="img/webDevPicture.png" class="img-fluid" alt="">
                        </div>
                      </div>
                        <!-- CONTACT FORM -->
                      <div class="col-md-6">
                        <div class="row d-flex ContactFirstEl">
                                <h3 class=" text-center">
                                    Pokud Vás něco zajímá, napište!
                                </h3>
                                <p class=" text-justify ">Budu vděčný za konstruktivní i nekonstruktivní kritiku. Pokusím se Vám odpovědět, jak jen to bude možné.</p>
                           <div class="col-12">

                                    <div class="form-group mb-3">
                                      <label  for="fromName">Jméno:</label>
                                      <textarea id="fromName" placeholder="Vaše jméno" class="form-control"  rows="1"></textarea>
                                  </div>

                                  <div class="form-group mb-3">
                                    <label for="fromMail">Email:</label>
                                    <textarea id="fromMail" placeholder="Vaše emailová adresa" class="form-control" rows="1"></textarea>
                                  </div>

                                  <div class="form-group formNext">
                                      <label for="msg">Zpráva:</label>
                                      <textarea id="msg" placeholder="Napište zprávu!" class="form-control"  rows="4"></textarea>
                                  </div>
                                        <!--FAILED ALERT -->
                                  <div class="d-flex justify-content-center mt-4">
                                    <div class="emptyMsgNotice alert alert-danger text-center fw-bold" role="alert">
                                     CHYBA: Pokoušíte se poslat prázdnou zprávu!
                                    </div>
                                  </div>
                                        <!--FAILED ALERT -->
                                  <div class="d-flex justify-content-center mt-2">
                                    <div class="wrongMailNotice alert alert-danger text-center fw-bold" role="alert">
                                     CHYBA: Není uvedena emailová adresa!
                                    </div>
                                  </div>

                                  <div class="d-flex justify-content-center ">
                                     <button type="button" id="btnSendMessage" class=" btn btn-light">Poslat</button>
                                </div>

                                
                                      <!-- SUCCESS ALERT -->
                                  <div class="d-flex justify-content-center">
                                    <div class="successMailNotice alert alert-success text-center fw-bold " role="alert">
                                    Zpráva byla úspěšně poslána.
                                    </div>
                                  </div>
                           </div>
                      </div>
                    </div>
                 </div>
               </div> 
            </div>
         </div>
       </div>                                                                                 
    </section>  
  </div>  
 </div>
                                                  <!-- FOOTER -->
        <footer>
          <div class="text-center p-2 footerMy" style="background-color: rgba(129, 126, 186, 0.181);">
                © 2022 Vytvořil Martin Pakandl 
             <a href="https://www.facebook.com/martin.pakandl" class=" ms-2 fa fa-facebook"></a>
             <a href="https://twitter.com/MPakandl" class="fa fa-twitter"></a>
             <a href="https://www.instagram.com/pakandlmartin/?hl=cs" class="fa fa-instagram"></a>
          </div>
        </footer>

</body>
</html>



