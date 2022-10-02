/**
 * Map function for Doge Rentals.
 *
 * Created by: Shay Stevens
 */

/**
 * Module pattern
 */
let map = (function(){
    "use strict";
    // Public interface
    let pub ={};

    //json file
    let jsonFile = "POI.geojson";

    // Global array to hold all park markers
    let parkArray = [];

    // Global array to hold all track markers
    let trackArray = [];

    /* Red marker */
    let redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    /* Yellow marker */
    let yellowIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    /* Blue marker */
    let blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    /**
     * Function that shows/hides markers on the map
     * depending on which button is pressed.
     */
    function showHide(){
        let i;
        let parkButton = $('#parkButton')[0];
        let trackButton = $('#trackButton')[0];
        if($(this)[0] === parkButton){
            let parkLocations = $(".park-locations");
            for (i = 0; i < parkLocations.length; i+=1) {
                if (parkLocations[i].style.display === "none") {
                    parkLocations[i].style.display = "block";
                    parkButton.value = "Hide Parks";
                    $.ajax({
                        type: "GET",
                        url: jsonFile,
                        cache: false,
                        success: function(data) {
                            pub.addParkMarkers(data);
                        }
                    });
                } else {
                    parkLocations[i].style.display = "none";
                    parkButton.value = "Show Parks";
                    pub.removeParkMarkers();
                }
            }
        }else{
            let trackLocations = $(".track-locations");
            for (i = 0; i < trackLocations.length; i+=1) {
                if (trackLocations[i].style.display === "none") {
                    trackLocations[i].style.display = "block";
                    trackButton.value = "Hide Tracks";
                    $.ajax({
                        type: "GET",
                        url: jsonFile,
                        cache: false,
                        success: function(data) {
                            pub.addTrackMarkers(data);
                        }
                    });
                } else {
                    trackLocations[i].style.display = "none";
                    trackButton.value = "Show Tracks";
                    pub.removeTrackMarkers();
                }
            }
        }
    }

    /**
     * Takes the data from the json file (data) and displays all
     * points of interest inside the jsonfile.
     *
     * @param data data from json file.
     */
    function displayPOI(data){
        let i;
        let locationTag;
        let locationText;
        let parentTag;
        let refTag;
        let dataOBJ = JSON.parse(data)
        let dataArray = dataOBJ.features;
        for(i=0; i < dataArray.length; i+=1){
            locationTag = document.createElement("p");
            locationText = document.createTextNode(dataArray[i].properties.name);
            locationTag.appendChild(locationText);
            if(i === 0){
                locationTag.classList.add('locations');
            }else if(i > 0 && i < 4){
                locationTag.classList.add('park-locations');
            }else{
                locationTag.classList.add('track-locations');
            }
            parentTag = $("#contactMain")[0];
            refTag = $("#map")[0];
            parentTag.insertBefore(locationTag, refTag);
            locationTag.style.cursor = "pointer";
            locationTag.onclick = pub.centreMap(dataArray[i].geometry.coordinates[1], dataArray[i].geometry.coordinates[0]);
        }
    }

    /**
     *
     * Function that centres the map to a point.
     *
     * @param lat the latitude of the point
     * @param long the longitude of point
     * @returns {(function(): void)|*} returns void function that centres map to location
     */
    pub.centreMap = function(lat, long) {
        return function () {
            let markerBounds;
            markerBounds = L.latLngBounds([{lat: lat, lng: long}]);
            map.fitBounds(markerBounds);
        };
    };

    /**
     * Adds all markers to map from the data in json file.
     *
     * @param data The json file data
     */
    pub.addMarkers = function(data){
        let i;
        let dataOBJ = JSON.parse(data)
        let dataArray = dataOBJ.features;

        for(i=0; i< dataArray.length; i+=1){
            pub.addMarker(dataArray[i].properties.color, dataArray[i].geometry.coordinates);
        }
    };

    /**
     * Adds all the park markers from the data.
     *
     * @param data The json file data
     */
    pub.addParkMarkers = function(data){
        let i;
        let dataOBJ = JSON.parse(data)
        let dataArray = dataOBJ.features;

        for(i=1; i< 4; i+=1){
            pub.addMarker(dataArray[i].properties.color, dataArray[i].geometry.coordinates);
        }
    };

    /**
     * Adds all the track markers from the data.
     *
     * @param data The json file data
     */
    pub.addTrackMarkers = function(data){
        let i;
        let dataOBJ = JSON.parse(data)
        let dataArray = dataOBJ.features;

        for(i=4; i < dataArray.length; i+=1){
            pub.addMarker(dataArray[i].properties.color, dataArray[i].geometry.coordinates);
        }
    };

    /**
     *  Adds a marker to the map and pushes to designated array by using coordinates and the marker color.
     *
     * @param markerColor The color of the marker
     * @param coordinates The coordinates of the marker
     */
    pub.addMarker = function(markerColor, coordinates){
        if(markerColor === "#CB2B3E"){
            L.marker([coordinates[1], coordinates[0]], {icon: redIcon}).addTo(map);
        }

        if(markerColor === "#FFD326"){
            parkArray.push(L.marker([coordinates[1], coordinates[0]], {icon: yellowIcon}).addTo(map));

        }

        if(markerColor === "#2A81CB"){
            trackArray.push(L.marker([coordinates[1], coordinates[0]], {icon: blueIcon}).addTo(map));
        }
    };

    /**
     *  Removes all the park markers from the map.
     */
    pub.removeParkMarkers = function(){
        let i;
        for(i=0; i < parkArray.length; i+=1){
            map.removeLayer(parkArray[i]);
        }
    };

    /**
     *  Removes all the track markers from the map.
     */
    pub.removeTrackMarkers = function(){
        let i;
        for(i=0; i < trackArray.length; i+=1){
            map.removeLayer(trackArray[i]);
        }
    };

    /**
     * Setup function for map.
     *
     * Initializes map and sets the view location to Office location.
     * Gets the data from the json file and passes it to displayPOI and addMarkers functions.
     * Adds click even to each contact button.
     */
    pub.setup = function(){
        let i;
        let buttons;

        map = L.map('map').setView([-45.881741, 170.534486], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            { maxZoom: 18, attribution: 'Map data &copy; ' +
                    '<a href="http://www.openstreetmap.org/copyright">' + 'OpenStreetMap contributors</a> CC-BY-SA'
            }).addTo(map);

        $.ajax({
            type: "GET",
            url: jsonFile,
            cache: false,
            success: function(data) {
                displayPOI(data);
                pub.addMarkers(data);
            }
        });

        buttons = $(".contact-button");
        for(i=0; i < buttons.length; i+=1){
            buttons[i].onclick = showHide;
        }
    };

    // Expose public interface
    return pub;

}());

// onload event for map.
$(document).ready(map.setup);