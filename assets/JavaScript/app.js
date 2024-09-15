// SideMenu
const sidemenu = document.getElementById("sidemenu");
const bodyScroll = document.body;
let btn = document.querySelector(".toggle-menu");
let icon = btn.querySelector(".bx-menu-alt-left");

btn.onclick = function() {
    if (icon.classList.contains("bx-menu-alt-left")) {
        icon.classList.replace("bx-menu-alt-left", "bx-x");
        sidemenu.style.display = "flex";
        sidemenu.style.right = "-35%";
        bodyScroll.style.overflowY = "hidden";
    } 
    else {
        icon.classList.replace("bx-x", "bx-menu-alt-left");
        sidemenu.style.display = "none";
        sidemenu.style.right = "-100%";
        bodyScroll.style.overflowY = "auto";
    }
}


// Search Container
const searchContainer = document.querySelector(".search-container");
let toggle_search = document.querySelector(".toggle-search");
let iconsearch = toggle_search.querySelector(".bx-search-alt-2");
let iconsearch_xmark = toggle_search.querySelector(".fa-xmark");

toggle_search.onclick = function () {
    if (iconsearch) {
        toggle_search.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        searchContainer.style.display = 'block';
        iconsearch = null;
        iconsearch_xmark = toggle_search.querySelector(".fa-xmark");
    } 
    else if (iconsearch_xmark) {
        toggle_search.innerHTML = `<i class="bx bx-search-alt-2"></i>`;
        searchContainer.style.display = 'none';
        iconsearch_xmark = null;
        iconsearch = toggle_search.querySelector(".bx-search-alt-2");
    }
}
