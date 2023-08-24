const menuIcon = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".left-sidebar");
const pageOverlay = document.querySelector(".overlay");

const subscriptions = document.getElementsByClassName("subscript");
const showSubscriptionsBtn = document.getElementById("show-subscript");
const subscriptionList = document.getElementById("subscriptions");

const playlists = document.getElementsByClassName("playl");
const showPlaylistsBtn = document.getElementById("show-playlists");
const playlistList = document.getElementById("playlists");

const showDescriptionBtn = document.getElementById("showDescriptionBtn");
const moreText = document.getElementById("more-text");

const content = document.querySelector(".content");
const rightSidebar = document.querySelector(".right-sidebar");
const commentSection = document.querySelector(".comment-section");
const main = document.querySelector(".main");


//
//toggle visibility of side navigation
//
const toggleSideNav = () => {
    //place black overlay over page when side navigation opens
    //pageOverlay.classList.toggle("hidden");
    
    if (sideNav.style.left === "0px") {
        sideNav.style.left = "-250px";
        pageOverlay.classList.add("hidden");
    } else {
        sideNav.style.left = "0px";
        pageOverlay.classList.remove("hidden");
        //any click page (without side nav) closes side nav
        pageOverlay.addEventListener('click', toggleSideNav);
    }
}


//
//functionality for "show more" btn in side navigation
//
const showMore = (elements, btn, list) => {
    //toggle visibility for the extra elements
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i];
        e.classList.toggle("hidden");
    }

    //change text and placement of button
    if (btn.innerHTML.includes("less")) {
        let nr;
        if (elements === subscriptions) {
            nr = subscriptions.length;
        }
        else {
            nr = ""
        }

        btn.innerHTML = '<img src="images/arrow-down.png"/>' + "Show " + nr + " more";
    }
    else {
        btn.innerHTML = '<img src="images/arrow-up.png"/>' + "Show less";
        list.appendChild(btn);
    }
}

const showSubscriptions = () => {
    showMore(subscriptions, showSubscriptionsBtn, subscriptionList);
}

const showPlaylists = () => {
    showMore(playlists, showPlaylistsBtn, playlistList);
}


//
//for video description: toggle button text btw "show more" and "show less"
//
const showDescription = () => {
    moreText.classList.toggle("hidden");
    if (showDescriptionBtn.innerHTML === "Show more") 
    {
        showDescriptionBtn.innerHTML = "Show less";
    }
    else {
        showDescriptionBtn.innerHTML = "Show more"
    }
}

/*const mainContent = document.querySelector(".main-content");
//
//when resizing window in index.html, change display of side navidation
//
const query = window.matchMedia("(min-width: 1312px)");
const showSideNav = e => {
    //if media query is true, change position of right-sidebar
    if (e.matches) {
        sideNav.style.left = "0px";
        mainContent.style.left = "250px";
    }
    //if false, place it back
    else {
        sideNav.style.left = "-250px";
        mainContent.style.left = "0px";
    }
}
//check when conditions change and call function
query.addEventListener('change', showSideNav);
//only call function on pages where it's necessary
if (window.location.href.includes("index.html")) {
    showSideNav(query);
}*/


//
//when resizing window in video.html, change placement of right-sidebar element
//
const mediaQuery = window.matchMedia("(max-width: 1000px)");
const reorderElements = e => {
    //if media query is true, change position of right-sidebar
    if (e.matches) {
      content.insertBefore(rightSidebar, commentSection);
    }
    //if false, place it back
    else {
        main.appendChild(rightSidebar);
    }
}

//check when conditions change and call function
mediaQuery.addEventListener('change', reorderElements);
//only call function on pages where it's necessary
if (window.location.href.includes("video.html")) {
    reorderElements(mediaQuery);
}