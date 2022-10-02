/**
 * Admin function for Doge Rentals.
 *
 * Created by: Shay Stevens
 */

/**
 * Module pattern
 */
let admin = (function(){
    "use strict";

    // Public interface
    let pub = {};
    let jsonFile = "bookings.json";

    /**
     * Displays all bookings from bookings.json file.
     *
     * @param data The data from the json file
     */
    function displayBookings(data){
        let i;
        let tag = $('#adminMain')[0];
        let bookings = data.bookings.booking;
        for(i=0; i < bookings.length; i+=1){
            let bookingTag;
            let bookingText;
            let bookingName;
            let nameText;
            let bookingPickup;
            let pickupText;
            let j;
            let dogIdTag;
            let dogIdText;
            let numHours;
            let numHoursText;

            bookingTag = document.createElement('h3');
            bookingText = document.createTextNode('Booking' + ' ' + (i+1) + '');
            bookingTag.append(bookingText);
            bookingTag.classList.add('review-header');
            tag.append(bookingTag);

            bookingName = document.createElement('p');
            nameText = document.createTextNode(bookings[i].name);
            bookingName.append(nameText);
            bookingName.classList.add('review-header');
            bookingName.style.fontSize = '25px';
            bookingName.style.marginLeft = '40px';
            tag.append(bookingName);

            dogIdTag = document.createElement('p');
            if(bookings[i].dogId.length > 1){
                dogIdTag.append('Dogs: ');
            }else{
                dogIdTag.append('Dog: ');
            }
            for(j=0; j < bookings[i].dogId.length; j+=1){
                dogIdText = document.createTextNode(bookings[i].dogId[j] + " ");
                dogIdTag.append(dogIdText);
            }
            dogIdTag.style.fontSize = '25px';
            dogIdTag.style.marginLeft = '40px';
            tag.append(dogIdTag);

            bookingPickup = document.createElement('p');
            pickupText = document.createTextNode("Pickup date: " + bookings[i].pickup.day + "/"
                + bookings[i].pickup.month + "/" + bookings[i].pickup.year + ' at ' + bookings[i].pickup.time);
            bookingPickup.append(pickupText);
            bookingPickup.style.fontSize = '25px';
            bookingPickup.style.marginLeft = '40px';
            tag.append(bookingPickup);

            numHours = document.createElement('p');
            numHoursText = document.createTextNode('Number of hours: ' + bookings[i].numHours);
            numHours.append(numHoursText);
            numHours.style.fontSize = '25px';
            numHours.style.marginLeft = '40px';
            tag.append(numHours);
        }

    }

    /**
     * Setup function for admin.
     *
     * Loads the data from the json file and passes it through displayBookings function.
     */
    pub.setup = function(){
        $.ajax({
            type: "GET",
            url: jsonFile,
            cache: false,
            success: function(data) {
                displayBookings(data);
            }
        });
    };

    // Expose public interface
    return pub;

}());

//on load event for admin
$(document).ready(admin.setup);