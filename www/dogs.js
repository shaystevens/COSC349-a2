/**
 * Dogs function for Doge Rentals.
 *
 * Created by: Shay Stevens
 */

/**
 * Module pattern
 */
let dogs = (function(){
    "use strict";

    // Public interface
    let pub = {};

    /**
     * Function that rotates dog card by toggling the is flipped class.
     */
    function rotate(){
        let card;
        if($(this).hasClass('card-back')){
            card = $(this).parent()[0];
        }else{
            card = $(this).parent().parent()[0];
        }
        card.classList.toggle('is-flipped');
    }

    /**
     * Function that adds dog description to the back of the card.
     *
     * @param data The data from the json file
     */
    function dogDescription(data){
        let dogArray = data.animals.dogs;
        let x;
        let i;
        let newTag;
        let newText;
        for(x=0; x < dogArray.length; x+=1){
            let tag = $('.card-back')[x];
            for(i=0; i < dogArray.length-1; i+=1){
                newTag = document.createElement("p");

                if(i === 0){
                    newText = document.createTextNode("Name: " + dogArray[x].dogName);
                }

                if(i === 1){
                    newText = document.createTextNode("Breed: " + dogArray[x].dogType);
                }

                if(i === 2){
                    newText = document.createTextNode("Size: " + dogArray[x].dogSize);
                }

                if(i === 3){
                    newText = document.createTextNode(dogArray[x].description);
                }
                if(i === 4){
                    newText = document.createTextNode("Price: $" + dogArray[x].pricePerHour + " (per hour)");
                }
                newTag.appendChild(newText);
                tag.append(newTag);
            }
       }
    }

    /**
     * Setup function for dogs.
     *
     * Finds each img in dogs main and each tag with card-back class and adds a click event listener to it.
     * Loads the data from the json file and passes it through dogDescription function.
     */
    pub.setup = function(){
        let jsonFile = "animals.json";
        let dogArray = $("#dogs").find("img");
        let array = $(".card-back");
        let i;
        for(i = 0; i < dogArray.length; i+=1){
            dogArray[i].style.cursor = "pointer";
            array[i].style.cursor = "pointer";
            dogArray[i].addEventListener("click", rotate);
            array[i].addEventListener("click", rotate);
        }

        $.ajax({
            type: "GET",
            url: jsonFile,
            cache: false,
            success: function(data) {
                dogDescription(data);
            }
        });

    };

    // Expose public interface
    return pub;

}());
// onload event for dogs.
$(document).ready(dogs.setup);