window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#005f9e';
    } else {
        navbar.style.backgroundColor = '#0288d1';
    }
});