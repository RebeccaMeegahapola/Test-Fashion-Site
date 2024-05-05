$(document).ready(function() {

    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('#scrollToTopBtn').fadeIn();
      } else {
        $('#scrollToTopBtn').fadeOut();
      }
    });
  
  
    $('#scrollToTopBtn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
});

//contact page

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});