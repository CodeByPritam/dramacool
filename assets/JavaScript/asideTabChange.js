// Aside Tab Change
function asideTabChange(tabname) {
    let i;
    let x = document.getElementsByClassName("openasidetab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(tabname).style.display = "block"; 
} 

// ASIDE TAB AVTIVE SHIFT
var asidetabChange = document.getElementById("asidetab-switch");
var asideTab_btns = asidetabChange.getElementsByClassName("tab-title");
for (var i = 0; i < asideTab_btns.length; i++) {
    asideTab_btns[i].addEventListener("click", function() {
        var current_asideTab = document.getElementsByClassName(" activetab-aside");
        current_asideTab[0].className = current_asideTab[0].className.replace(" activetab-aside", "");
        this.className += " activetab-aside";
    });
}