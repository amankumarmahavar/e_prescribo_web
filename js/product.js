window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    var logo = document.getElementById("nav-img");
    if (scrollPercentage > 20) { // Change 10 to the desired percentage
           logo.style.display="flex";
    } else {
        logo.style.display="none";
    }
});