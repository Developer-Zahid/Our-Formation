(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		headerHeightFixer();
		activeIndicatorInit();
		isotopeInit();
    });

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').innerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
	$(document).ready(function () {
		$('.header').before('<div class="header-height-fix"></div>');
    });
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('.header').innerHeight() - 2 +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

	/* Navbar item indicator function */
	$('.indicator-nav .indicator-nav__link, .indicator-nav .dropdown .dropdown-menu').on('mouseenter focusin', function(){
		$(this).closest(".indicator-nav").find(".indicator-nav__line").css({
			"left": $(this).closest(".indicator-nav__item").get(0).offsetLeft + "px",
			"width": $(this).closest(".indicator-nav__item").get(0).offsetWidth + "px"
		});
	});

	$('.indicator-nav .indicator-nav__link, .indicator-nav .dropdown .dropdown-menu').on('mouseleave focusout', function(){
		$(this).closest(".indicator-nav").find(".indicator-nav__line").css({
			"left": $(this).closest(".indicator-nav").find(".indicator-nav__link.active").closest(".indicator-nav__item").get(0).offsetLeft + "px",
			"width": $(this).closest(".indicator-nav").find(".indicator-nav__link.active").closest(".indicator-nav__item").get(0).offsetWidth + "px"
		});
	});
	
	function activeIndicatorInit(){
		$('.indicator-nav').each(function(){
			if($(this).find(".indicator-nav__link").hasClass("active")){
				$(this).find(".indicator-nav__line").css({
					"left": $(this).find(".indicator-nav__link.active").closest(".indicator-nav__item").get(0).offsetLeft + "px",
					"width": $(this).find(".indicator-nav__link.active").closest(".indicator-nav__item").get(0).offsetWidth + "px"
				});
			}
		});
	}

    /*  Banner slider */
	if($(".info-slider").length){
		$(".info-slider").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500,
			arrows: true,
			prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="bi bi-chevron-left"></i></button>',
			nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="bi bi-chevron-right"></i></button>',
			dots: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			infinite: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true
					}
				},
			]
		});
	}
	
	/* Isotope Init */
	function isotopeInit() {
		if($(".training-list").length){
			$(".training-list").isotope({
				itemSelector: ".training-list__item",
				layoutMode: "fitRows",
				masonry: {
					isFitWidth: true
				}
			});
	
			// filter items on button click
			$(".filter-list__link").on("click", function () {
				var filterValue = $(this).attr("data-filter");
				$(".training-list").isotope({ filter: filterValue });
	
				// Toggle active class on button click
				$(".filter-list__link").removeClass("active");
				$(this).addClass("active");
			});
		}
	}


    /*  Banner slider */
    // $(".banner__slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     speed: 500,
    //     arrows: true,
    //     prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-left"></i></button>',
	// 	nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-right"></i></button>',
    //     dots: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     infinite: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				dots: true
	// 			}
	// 		},
	// 	]
    // });

})(jQuery);