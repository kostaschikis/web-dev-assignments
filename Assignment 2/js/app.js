$(function () {
  // Change Navbar Background & Transperancy on scroll 
  $(document).scroll(function () {
    var nav = $(".navbar");
    nav.toggleClass('scrolled', $(this).scrollTop() < nav.height());
  });

  // Change Active Navbar Link
  $('.navbar a').on('click', function() {
      $('.navbar').find('li.active').removeClass('active');
      $(this).parent('li').addClass('active');
  })
});