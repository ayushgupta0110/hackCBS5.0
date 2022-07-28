// Making Navbar solid on scroll and added shadow
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          $('#top_navbar').addClass('shadow p-2 rounded');
        } else {
          $('#top_navbar').removeClass('shadow p-2 rounded');
        } 
    });
  }); 