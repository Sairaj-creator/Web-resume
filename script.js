/**
 * jQuery Script for Interactivity (Sticky Header)
 */
$(document).ready(function() {

    // --- Sticky Header Implementation ---
    var header = $("header");
    // Get the position of the header when the page first loads
    var stickyPoint = header.offset().top; 

    // Function to handle the sticky effect on scroll
    function handleStickyHeader() {
        // window.pageYOffset is the current vertical scroll position
        if (window.pageYOffset > stickyPoint) {
            // Add the sticky-nav class defined in CSS
            header.addClass("sticky-nav");
        } else {
            // Remove the class if scrolled back up
            header.removeClass("sticky-nav");
        }
    }

    // Attach the function to the window's scroll event
    $(window).scroll(handleStickyHeader);
});