/**
 * Booking function for Doge Rentals.
 *
 * Created by: Shay Stevens
 */

/**
 * Module pattern
 */
let booking = (function(){
    "use strict";

    // Public interface
    let pub = {};

    let jsonFile = "animals.json";
    let dogArray;

    /**
     * Sets the json file's dogs data to a global array.
     *
     * @param data The data from the json file
     */
    function collectData(data){
        dogArray = data.animals.dogs;
    }

    /**
     * Adds dog image and name header to booking form table.
     *
     * @param i Index of the dog.
     */
    function addDogImageToTable(i){
        let dogMain = $('#dogs');
        let dogImage = dogMain.find('img')[i].cloneNode(true);
        let dogTitle = dogMain.find('h4')[i].cloneNode(true);
        let tableTag = document.createElement('td');
        let tableRowTag = $('#imageTable');
        dogTitle.style.margin = '0 0 0 -20px';
        dogTitle.style.textAlign = 'center';
        dogImage.style.cursor = 'auto';
        dogImage.border = '1px solid black';
        tableTag.append(dogTitle);
        tableTag.append(dogImage);
        tableRowTag.append(tableTag);
    }

    /**
     * Cancels the booking by enabling buttons, clearing local storage, and hiding form.
     */
    function cancelBooking(){
        let buttonArray = $('.bookingButton');
        let tableArray = $('#imageTable').find('td');
        let i;

        for(i=0; i < buttonArray.length; i+=1){
            buttonArray[i].value = "Book me!";
            buttonArray[i].disabled = false;
        }

        for(i=0; i < tableArray.length; i+=1){
            tableArray[i].remove();
        }
        localStorage.removeItem('dogId');
        $('#bookingForm')[0].style.display = 'none';
    }

    /**
     * Shows the custom alert by changing alert style from none to block.
     */
    function showCustomAlert(){
        let customAlert = $('#customAlert')[0];
        customAlert.style.display = "block";
    }

    /**
     * Hides the custom alert by changing alert style from block to none.
     */
    function hideAlert(){
        let customAlert = $('#customAlert')[0];
        customAlert.style.display = "none";
    }

    /**
     * Checks local storage if dogId is null or not.
     * If it is not null then it sets up the page by showing the booking form,
     * loading the images to the table and disabling the specific buttons.
     */
    function checkLocalStorage(){
        if(localStorage.getItem("dogId") !== null){
            let i;
            let tagNum;
            let storageArray = JSON.parse(localStorage.getItem("dogId"));
            let buttonArray = $(".bookingButton");

            for(tagNum = 1; tagNum < 7; tagNum+=1){
                for(i=0; i < storageArray.length; i+=1){
                    if(storageArray[i] === 'DW-00' + '' + tagNum + ''){
                        buttonArray[tagNum-1].value = 'Booked!';
                        buttonArray[tagNum-1].disabled = true;
                        $("#bookingForm")[0].style.display = "block";
                        addDogImageToTable(tagNum-1);
                    }
                }
            }
        }
    }

    /**
     * Function that adds specific dogId to local storage.
     */
    function addToBooking(){
        if(localStorage.getItem("dogId") === null || JSON.parse(localStorage.getItem("dogId")).length < 3){
            let i;
            let button = $(this)[0];
            let dogId = $(this).siblings()[1].getElementsByClassName('card-back')[0].id;
            for(i = 0; i < dogArray.length; i+=1){
                if(dogId === dogArray[i].dogName){
                    break;
                }
            }

            if(localStorage.getItem("dogId") !== null){
                let storageArray = JSON.parse(localStorage.getItem("dogId"));
                storageArray.push(dogArray[i].dogId);
                localStorage.setItem('dogId', JSON.stringify(storageArray));
            }else{
                localStorage.setItem('dogId', JSON.stringify([dogArray[i].dogId]));
            }
            button.value = "Booked!";
            button.disabled = true;
            $("#bookingForm")[0].style.display = "block";
            addDogImageToTable(i);
        }else{
            showCustomAlert();
        }
    }

    /**
     * Setup function for booking.
     *
     * Sets up jquery datepicker and adds click events to cancel Button, close button and booking button.
     * Loads the data from the json file and passes it through collectData function.
     * Checks local storage.
     */
    pub.setup = function (){
        $( function() {
            $( "#datepicker" ).datepicker();
        } );
        $('#cancelButton').click(cancelBooking);
        $('#closeButton').click(hideAlert);
        $.ajax({
            type: "GET",
            url: jsonFile,
            cache: false,
            success: function(data) {
                collectData(data);
            }
        });
        checkLocalStorage();
        $(".bookingButton").click(addToBooking);
    };

    // Expose public interface
    return pub;
}());

//on load event for booking
$(document).ready(booking.setup);