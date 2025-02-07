<<<<<<< HEAD
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    for (let tabcontent of tabcontents) {
        tabcontent.style.display = "none";  
    }
    document.getElementById(tabname).style.display = "block";
    event.currentTarget.classList.add("active-link");  
}

fetch('https://script.google.com/macros/s/AKfycbx7fekzQcaHiQQJGrTCvR9TLEHRSJVIbW8U4vbepG0HpxsKlPxM7fDfwo8-trLqn00g/exec', {
    method: 'POST',
    body: formData,
})
.then(response => response.json())
.then(data => {
    alert(data.result);
})
.catch(error => console.error('Error:', error));

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('https://script.google.com/macros/s/AKfycbx7fekzQcaHiQQJGrTCvR9TLEHRSJVIbW8U4vbepG0HpxsKlPxM7fDfwo8-trLqn00g/exec', { // Ensure this URL is correct
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.result);
    })
    .catch(error => console.error('Error:', error));
});
=======
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
>>>>>>> origin/main
