$(document).ready(function() {
  //alert("hello")
  var isMenuOpen = false;

  function hideMenu() {
    isMenuOpen = false
    $("#desktopNav").fadeOut();
  }

  function showMenu() {
    isMenuOpen = true
    $("#desktopNav").fadeIn();
  }

  function toggleMenu() {
    //alert("toggle")
    if (isMenuOpen) {
      hideMenu();
    } else {
      showMenu();
    }
  }


  /*function storyScroll() {
    $("#story").velocity({scrollTop:500}, {
    easing: easeInQuint;
    duration: 800,
    delay: 500
    }
    });
  }*/

var isBoxOpen = false
  function expandWindow() {
    //alert("lightbox");
    event.preventDefault()
    $("#black_overlay_product").show();
    isBoxOpen = true;
    console.log(isBoxOpen);
  }

function closeWindow() {
  console.log("yay")
  if (isBoxOpen = true) {
    $("#black_overlay_product").hide();
  }
  isBoxOpen=false
}

var isBoxOpen = false
  function expandSignUp() {
    //alert("lightbox");
    event.preventDefault()
    $("#black_overlay_signup").show();
    isBoxOpen = true;
    console.log(isBoxOpen);
  }

  function closeSignUp() {
    console.log("yay")
    if (isBoxOpen = true) {
      $("#black_overlay_signup").hide();
    }
    isBoxOpen=false
  }



var dn = $("#desktopNav");
    dns = "desktopNav-scrolled";
    hdr = $('header').outerHeight(true);

function pageScroll() {
  if ($(this).scrollTop() > hdr) {
    dn.addClass(dns);
    document.getElementById('sub-logo').style.display= "block";
  } else {
    dn.removeClass(dns);
    {document.getElementById('sub-logo').style.display = "none"};
  }
}


function scrollStory() {
  $("#story").velocity("scroll", {
    easing:[400,30]
  });
}


function scrollPage () {
    $($(this).attr("href")).velocity("scroll", {
      easing:[400,60]
    })
}


function toTopPage () {
  //alert("hey hey hey")
  $("header").velocity("scroll", {
    easing:[400,60]
  });
}


  $(window).scroll(pageScroll)
  $(window).scroll();
  $(".mobileMenu").click(toggleMenu)
//  $(".the-story").click(storyScroll)
  $(".expand-window").click(expandWindow);
  $(".button-exit").click(closeWindow);
  $(".quarter-container").click(expandSignUp);
  $(".button-exit").click(closeSignUp);
  $(".navLinks a").click(scrollPage);
  $(".top-arrow").click(toTopPage);
  $("#sub-logo").click(toTopPage);


});

/* someone elses sample for full scrren div on click $('div').click(function() {
  $(this).css({
      position:'absolute', //or fixed depending on needs
      top: $(window).scrollTop(), // top pos based on scoll pos
      left: 0,
      height: '100%',
      width: '100%'
  } */


/* action I  want.
(read more to expand "story" section)
icon to inlarge slightly on hover
main nav header to change colors when scrolling and stick at top for whole page
in nav when anchor point in reached within scroll that li item in nav should inlarge
some interested landing page logo exit when scolling  */
