// const API_KEY = 'AIzaSyAiNzIpV0wO8OFnC_oUi7vzNThwOG888H4';

// window.gapi.client.init({
//     apiKey: API_KEY, 
//     discoveryDocs: 'https://forms.googleapis.com/$discovery/rest?version=v1',
//     scope: ["https://www.googleapis.com/auth/forms.body"],
// }).then(() => {
//     window.gapi.client.request({path:''})
// })


// Filter Js
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        console.log("Filter Value: ", value); // Debugging line to check filter value

        if (value == "all") {
            // Show all items if "all" is selected
            $(".post-box").show();
        } else {
            // Hide items that don't match the filter
            $(".post-box")
                .not("." + value)
                .hide();

            // Show items that match the filter
            $(".post-box")
                .filter("." + value)
                .show();
        }
    });
});

// Add active Btn
$(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });


    
// Header BackGround Change On Scroll
// let header = document.querySelector("header");
// window.addEventListener("scroll", () => {
// header.classList.toggle("shadow", window.scrolly > 0);
// });