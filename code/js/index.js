$(document).ready(function() {
  //alert("hello")
  var isMenuOpen = false;

  function hideMenu() {
    isMenuOpen = false
    $(".desktopNav").fadeOut();
  }

  function showMenu() {
    isMenuOpen = true
    $(".desktopNav").fadeIn();
  }

  function toggleMenu() {
    //alert("toggle")
    if (isMenuOpen) {
      hideMenu();
    } else {
      showMenu();
    }
  }

  $(".mobileMenu").click(toggleMenu)

});


/* action I  want.
(read more to expand "story" section)
icon to inlarge slightly on hover
main nav header to change colors when scrolling and stick at top for whole page
in nav when anchor point in reached within scroll that li item in nav should inlarge
some interested landing page logo exit when scolling  */
