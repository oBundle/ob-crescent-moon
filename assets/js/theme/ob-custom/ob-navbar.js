export default function (context) {
	console.log("nav script run", context);
  let vw = $(document).width();
  $(window).resize(function() {
    vw = $(document).width()
  });
  //click on hover bind
  $(".has-subMenu.ob-top-level-navlink").on("mouseover", (e) => {
    if(vw > 800) {
      $(e.currentTarget).click();
      $(".ob-dark-overlay").fadeIn();
      $(".header").removeClass("ob-transparent")
    }
  });

  $(".navPage-subMenu").on("mouseleave", (e) => {
    if(vw > 800) {
      $(e.currentTarget).removeClass("is-open");
      $("body").trigger("click");
      if (!$(e.currentTarget).closest('navPage-subMenu').hasClass('is-open')) {
        $(".ob-dark-overlay").fadeOut();

      }
    }

    $(".ob-dark-overlay").fadeOut();
  });

  $(".navPage-subMenu").on("mouseleave", (e) => {
    if ($(".navPages-action.is-open").length < 1) {
      $(".ob-dark-overlay").fadeOut();
    }
  });

  $(".mobileMenu-toggle").on("click", (e) => {
    if (!$(e.currentTarget).hasClass("is-open")) {
      $(".ob-dark-overlay").fadeOut();
    }
  });

  $(".navUser-action--quickSearch").on("click", (e) => {
    $(".header").removeClass("ob-transparent")
    $nav.removeClass("ob-transparent");
  })


	//target DOM nodes
	let $header = $(".header");
	let $nav = $(".navUser");
	let lastScrollTop = 0;

	//if the page type is default (home), add transparent classes
	if ( (context.page_type === "default") && $(window).scrollTop() === 0 ) {
		$header.addClass("ob-transparent");
    $nav.addClass("ob-transparent");
    console.log( 'st', $(window).scrollTop())
  }
  
  if (context.page_type !== "default") {
		$header.addClass("ob-header-shadow");
	}

	$(window).on("scroll", function () {
		//if the page type is default (home), add transparent classes
		if (context.page_type === "default") {
			$header.removeClass("ob-transparent");
			$nav.removeClass("ob-transparent");
		}
		$header.addClass("ob-header-shadow");

		if ($(window).scrollTop() === 0) {
			if (context.page_type === "default") {
				$header.addClass("ob-transparent");
        $nav.addClass("ob-transparent");
        $header.removeClass("ob-header-shadow");
			}
		}

		let st = $(window).scrollTop();
		lastScrollTop = st; // For Mobile or negative scrolling
	});
}
