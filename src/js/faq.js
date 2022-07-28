window.addEventListener('load', function() {
    var faq = document.querySelectorAll(".faq-dropdown");
    var i;
    console.log(faq);
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            // Change active status of the originally active faq to unactive
            var activeFaq = document.querySelector('.faq-dropdown.active');
            if (activeFaq && activeFaq !== this) {
                activeFaq.classList.remove('active');
                activeFaq.querySelector('.faq-dropdown-answer').classList.remove('active');
            }

            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var answer = this.querySelector('.faq-dropdown-answer');
            answer.classList.toggle('active')
        });
    }

});


