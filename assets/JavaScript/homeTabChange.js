// Tab Change
function homeContentTab(tabname) {
    let i;
    let x = document.getElementsByClassName("opentab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(tabname).style.display = "block"; 
} 

// HOME TAB AVTIVE SHIFT
let SwitchWrapper = document.getElementById("homeContent-tabSwitchs");
let switchtab = SwitchWrapper.getElementsByClassName("tab-title");
for (let i = 0; i < switchtab.length; i++) {
    switchtab[i].addEventListener("click", function() {
        let currentbox = document.getElementsByClassName(" activetab-switch");
        currentbox[0].className = currentbox[0].className.replace(" activetab-switch", "");
        this.className += " activetab-switch";
    });
}