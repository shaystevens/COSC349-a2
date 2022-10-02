/**
 * Reviews function for Doge Rentals.
 *
 * Created by: Shay Stevens
 */

/**
 * Module pattern
 */
let reviews = (function(){
    "use strict";
    // Public interface
    let pub = {};

    /**
     * Displays all bookings from reviews.json file.
     *
     * @param data The data from the json file
     */
    function displayReviews(data){
        let i;
        let titleTag;
        let authorTag;
        let reviewTag;
        let titleText;
        let authorText;
        let reviewText;
        let tag;
        tag = $("#reviewMain")[0];
        for(i = 0; i < data.length; i+=1){
            titleTag = document.createElement("h3");
            titleText = document.createTextNode(data[i].title);
            authorTag = document.createElement("p");
            authorText = document.createTextNode("Author: " + data[i].author);
            reviewTag = document.createElement("p");
            reviewText = document.createTextNode(data[i].reviewcontent);
            titleTag.appendChild(titleText);
            titleTag.classList.add("review-header");
            authorTag.appendChild(authorText);
            authorTag.classList.add("review-author");
            reviewTag.appendChild(reviewText);
            reviewTag.classList.add("review-description");
            tag.append(titleTag);
            tag.append(authorTag);
            tag.append(reviewTag);
        }
    }

    /**
     * Setup function for reviews.
     *
     * Loads the data from the json file and passes it
     * through displayReviews function.
     */
    pub.setup = function(){
        let jsonFile = "reviews.json";

        $.ajax({
            type: "GET",
            url: jsonFile,
            cache: false,
            success: function(data) {
                displayReviews(data);
            }
        });
    };

    // Expose public interface
    return pub;

}());

// onload event for reviews.
$(document).ready(reviews.setup);