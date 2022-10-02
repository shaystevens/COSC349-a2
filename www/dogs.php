<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Doge Rental Dogs</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="dogs.js"></script>
    <script src="booking.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="formValidate.js"></script>
</head>
<body>
<header class ="header2">
     <ul>
        <li><a href="index.html" class="headerA">Home</a><li>
        <li><a class="headerA">Rent a Doge</a></li>
        <li><a href="reviews.html" class="headerA">Reviews</a></li>
        <li><a href="contact.html" class="headerA">About us</a></li>

    </ul>
</header>
<a href="index.html" class="ah2"> <h2>Doge rentals oo</h2></a>
<main id ="dogs">
    <table>
        <tr>
            <td><h4 class="title" id="dog1">Doge</h4>
                <div class="flip-box">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="images/pexels-anna-shvets-4588001.jpg" alt="Doge">
                        </div>
                        <div class="card-back" id="Doge">
                        </div>
                    </div>
                </div>
                <input type="button" value="Book Me!" class="bookingButton">
            </td>
            <td><h4 class="title" id="dog2">Akira</h4>
                <div class="flip-box">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="images/pexels-antonio-florentini-803766.jpg" alt="Husky">
                        </div>
                        <div class="card-back" id="Akira">
                        </div>
                    </div>
                </div>
                <input type="button" value="Book Me!" class="bookingButton">
            </td>
            <td><h4 class="title" id="dog3">Ronnie</h4>
                <div class="flip-box">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="images/pexels-vova-krasilnikov-4390802.jpg" alt="Rottweiler">
                        </div>
                        <div class="card-back" id="Ronnie">
                        </div>
                    </div>
                </div>
                <input type="button" value="Book Me!" class="bookingButton">
            </td>
        </tr>
        <tr>
            <td><h4 class="title" id="dog4">Daisy</h4>
                <div class="flip-box">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="images/pexels-goochie-poochie-grooming-3299899.jpg" alt="Poodle">
                        </div>
                        <div class="card-back" id="Daisy">
                        </div>
                    </div>
                </div>
                <input type="button" value="Book Me!" class="bookingButton">
            </td>
            <td><h4 class="title" id="dog5">Ava</h4>
                <div class="flip-box">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="images/pexels-suhail-suri-4381409.jpg" alt="Labrador">
                        </div>
                        <div class="card-back" id="Ava">
                        </div>
                    </div>
                </div>
                <input type="button" value="Book Me!" class="bookingButton">
            </td>
            <td><h4 class="title" id="dog6">Snoopy</h4>
                <div class="flip-box">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="images/pexels-anna-shvets-4588435.jpg" alt="Dachshund">
                        </div>
                        <div class="card-back" id="Snoopy">
                        </div>
                    </div>
                </div>
                <input type="button" value="Book Me!" class="bookingButton">
            </td>
        </tr>
    </table>
    <div id="bookingForm" style="display: none">
        <h3 class="review-header" style="text-align: left">You picked:</h3>
        <table id="table2">
            <tr id="imageTable">
            </tr>
        </table>
        <form action='booking.php' id="bookingInfo" method='POST' novalidate>
            <!--Booking info details -->
            <fieldset>
                <legend>Booking Details:</legend>
                <p>
                    <input type="hidden" name ="dogs" id="dogsForm">
                    <label for="name">Please enter your name:</label>
                    <input type="text" name="name" id="name" required>
                </p>
                <p>Date: <input type="text" name="datepicker" id="datepicker" required></p>
                <p>
                    <label for="pickupTime">Time of pickup: </label>
                    <select name="pickupTime" id="pickupTime">
                        <option value="9">9 am</option>
                        <option value="10">10 am</option>
                        <option value="11">11 am</option>
                        <option value="12">12 pm</option>
                        <option value="13">1 pm</option>
                        <option value="14">2 pm</option>
                        <option value="15">3 pm</option>
                        <option value="16">4 pm</option>
                        <option value="17">5 pm</option>
                        <option value="18">6 pm</option>
                        <option value="19">7 pm</option>
                        <option value="20">8 pm</option>
                    </select>
                </p>
                <p>
                    <label for="numHours">Number of hours:</label>
                    <select name="numHours" id="numHours">
                        <option value="1">1 hour</option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="5">5 hours</option>
                        <option value="6">6 hours</option>
                        <option value="7">7 hours</option>
                        <option value="8">8 hours</option>
                        <option value="9">9 hours</option>
                        <option value="10">10 hours</option>
                        <option value="11">11 hours</option>
                        <option value="12">12 hours</option>
                    </select>
                </p>
                <p style="font-size: 16px">Please note: You must return dogs by 9pm the same day.</p>
            </fieldset>

            <!--credit card details -->
            <fieldset>
                <legend>Payment Details:</legend>
                <p>
                    <label for="cardType">Card type:</label>
                    <select name="cardType" id="cardType">
                        <option value="amex">American Express</option>
                        <option value="mcard">Master Card</option>
                        <option value="visa">Visa</option>
                    </select>
                </p>
                <p>
                    <label for="cardNumber">Card number:</label>
                    <input type="text" name="cardNumber" id="cardNumber" maxlength="16" required>
                </p>
                <p>
                    <label for="cardMonth">Expiry date:</label>
                    <select name="cardMonth" id="cardMonth">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select name="cardYear" id="cardYear">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                    </select>
                </p>
                <p>
                    <label for="cardValidation">CVC:</label>
                    <input type="text" class="short" maxlength="4" name="cardValidation" id="cardValidation" required>
                </p>
            </fieldset>
            <input type="button" value="Cancel Booking" id="cancelButton">
            <input type="submit" name="submit" value="Submit">
        </form>
        <ul id="bookingError" style="color: red">
        </ul>
    </div>
</main>
<div id="customAlert" style="display: none">
    <div id="box">
        <div id="heading">A message from Doge Rentals</div>
        <div id="content">
            <p>You can only book a maximum of three dogs at a time.</p>
            <input type="button" id="closeButton" value="Ok">
        </div>
    </div>
</div>
<p id="bookingSuccess" style="color: green; display: none; text-align: center; margin-top: 200px; font-size: 40px">Thank you for booking with us :)</p>
</body>
</html>