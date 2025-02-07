const scriptURL = 'https://script.google.com/macros/s/AKfycbxOVd5LsDW1o4CtjD_ikGFjMx4RKrbrp0n5QF6rrgNak2BNmsMZFNTxobhGt8Z209e4/exec';
const form = document.querySelector('form'); // Or use document.forms[0] if it's the first form

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thank you for reaching to us.");
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message));
});
