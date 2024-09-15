var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    for (let tabcontent of tabcontents) {
        tabcontent.style.display = "none";  
    }
    document.getElementById(tabname).style.display = "block";t
    event.currentTarget.classList.add("active-link");  
}
