 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });


	  if ( $('.owl-4-slider').length > 0 ) {
			var owl4 = $('.owl-4-slider').owlCarousel({
		    loop: true,
		    autoHeight: true,
		    margin: 0,
		    autoplay: true,
		    smartSpeed: 1000,
		    items: 4,
		    nav: false,
		    navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    	}
			});

			$('.js-custom-next-v2').click(function(e) {
				e.preventDefault();
				owl4.trigger('next.owl.carousel');
			})
			$('.js-custom-prev-v2').click(function(e) {
				e.preventDefault();
				owl4.trigger('prev.owl.carousel');
			})
		}

	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {
		
		var timeWithZone = moment.tz("2023-01-23 19:00", "Asia/Calcutta");


		$('#date-countdown, #date-countdown2').countdown(timeWithZone.toDate(), function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  // OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
	siteScroll();
	

	$(function () {
		$("#bgndVideo").YTPlayer();
	});
	
	// Datatable Points Pool A
	
	$.ajax({
  url: "https://sheets.googleapis.com/v4/spreadsheets/1DDcn3l4UGEX-ishExtSqNZq5O_Z_UbS9AGflUjMn-ss/values/Sheet1?key=AIzaSyAetEfYoYAWP3KjCRzvUtdbSaKMlhh9M1U"
}).done(function( data ) {
	
	var values = data.values;
	//remove headers
	values.shift();
	$('#pointsTableA').DataTable((
	{
		responsive : true,
		columns: [
    { "title": "T", responsivePriority : 1 },
    { "title": "M", responsivePriority : 2 },
    { "title": "W", responsivePriority : 4 },
    { "title": "D", responsivePriority : 6 },
    { "title": "L", responsivePriority : 5 },
	{ "title": "GF", responsivePriority : 8 },
	{ "title": "GA", responsivePriority : 9 },
	{ "title": "GD", responsivePriority : 7 },
	{ "title": "P", responsivePriority : 3 }
  ],
		data: values,
		columnDefs: [
   
   { className: "text-white dt-center", targets: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] }
],
		order: [[8, 'desc'],[7, 'desc']],
	searching: false, paging: false, info: false}));

});

	// Datatable Points Pool B
	
	$.ajax({
  url: "https://sheets.googleapis.com/v4/spreadsheets/14pea1Cu1X1ZvzBfhiavAauu0QdyMYgZCi0pj5DANvgA/values/Sheet1?key=AIzaSyAetEfYoYAWP3KjCRzvUtdbSaKMlhh9M1U"
}).done(function( bdata ) {
	
	var bvalues = bdata.values;
	//remove headers
	bvalues.shift();
	$('#pointsTableB').DataTable((
	{
		responsive : true,
		columns: [
    { "title": "T", responsivePriority : 1 },
    { "title": "M", responsivePriority : 2 },
    { "title": "W", responsivePriority : 4 },
    { "title": "D", responsivePriority : 6 },
    { "title": "L", responsivePriority : 5 },
	{ "title": "GF", responsivePriority : 8 },
	{ "title": "GA", responsivePriority : 9 },
	{ "title": "GD", responsivePriority : 7 },
	{ "title": "P", responsivePriority : 3 }
  ],
		data: bvalues,
		columnDefs: [
   
  { className: "text-white dt-center", targets: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] }
],
		order: [[8, 'desc'],[7, 'desc']],
	searching: false, paging: false, info: false}));

});


});
	
	function getMatches() {
	$('#matchDaySelect').prop('disabled', true);
	$.ajax({
  url: "https://sheets.googleapis.com/v4/spreadsheets/1ZV2L8of7yOL0-bR5lX3aSOy8IxB3yuCjxIgJCVW9yTs/values/Sheet1?key=AIzaSyAetEfYoYAWP3KjCRzvUtdbSaKMlhh9M1U"
}).done(function( bdata ) {
	var matchDetails = bdata.values;
	
	//remove headers
	matchDetails.shift();
	
	// iterate matches
	var dateSelectd = $('#matchDaySelect').val();
	var rowDivs='';
	var resultDivs='';
	for (var key in matchDetails) {
	if (matchDetails.hasOwnProperty(key)) {
    var val = matchDetails[key];
	
	if (val[5] == dateSelectd && val[9] == 'y') {
		 var resultDiv = '';
		 		// resultDiv = "<div class='row mt-4'><div class='col-12 title-section'><h2 class='heading'>Result : Match "+val[0]+" - "+val[8]+"</h2></div></div>"+
		resultDiv = "<div class='container'><div class='row mt-4'><div class='col-12 title-section'><h2 class='heading'>Result : Match "+val[0]+" - "+val[8]+"</h2></div></div>"+		
	"<div class='row' style='margin-top:70px;'><div class='col-lg-12'><div class='d-flex team-vs'>"+
	  "<span class='score'>"+val[10]+" - "+val[11]+"</span><div class='team-1 w-50'><div class='team-details w-100 text-left'>"+
	  "<img src="+val[2]+" alt='Image' class='img-fluid'>"+
     "<h3>"+val[1]+"</h3>"+
     "<ul class='list-unstyled'> </ul> </div></div>"+
      "<div class='team-2 w-50'> <div class='team-details w-100 text-right'>"+
      "<img src="+val[4]+" alt='Image' class='img-fluid'>"+
      "<h3>"+val[3]+"</h3>"+
       "<ul class='list-unstyled'></ul> </div></div></div> </div></div></div>";
	   resultDivs=resultDivs+resultDiv;
	}
	 
	
	//show current day only
	if (val[5] == dateSelectd && val[9] == 'n') {
	var rowDiv ='';
	
	
	// rowDiv = "<div class='row mt-4'><div class='col-12 title-section'><h2 class='heading'>Match : "+val[0]+" - "+val[8]+"</h2></div>"+
	// "<div class='col-lg-12 mb-2'><div class='bg-light p-4 rounded'><div class='widget-body'>"+
    // "<div class='widget-body mb-3'><div class='widget-vs'><div class='d-flex align-items-center justify-content-around justify-content-between w-100'>"+
    // "<div class='team-1 text-center'><img src="+val[2]+" alt='Image'>"+
    // "<h3>"+val[1]+"</h3> </div> <div> <span class='vs'><span>VS</span></span>"+
    // "</div> <div class='team-2 text-center'><img src="+val[4]+" alt='Image'>"+
     // "<h3>"+val[3]+"</h3></div></div> </div> </div> <div class='text-center widget-vs-contents mb-4'>"+
     // "<h4>"+val[7]+"</h4><p class='mb-5'>"+
     // "<span class='d-block'>"+$('#matchDaySelect option:selected').text()+", " +val[6]+"</span>"+
     // "<strong class='text-primary'>Meghalaya Football Arena</strong></p>"+
	// "</div> </div></div></div>";
	
	
	rowDiv = "<div class='row mt-5'><div class='col-lg-12'><div class='widget-next-match'>"+
	"<div class='widget-title'><h3>Upcoming Match : "+val[0]+" - "+val[8]+"</h3></div>"+
	"<div class='widget-body mb-3'><div class='widget-vs'>"+
	"<div class='d-flex align-items-center justify-content-around justify-content-between w-100'>"+
	"<div class='team-1 text-center'><img src="+val[2]+" alt='Image'>"+
	"<h3>"+val[1]+"</h3></div><div><span class='vs'><span>VS</span></span></div>"+
	"<div class='team-2 text-center'><img src="+val[4]+" alt='Image'>"+
	"<h3>"+val[3]+"</h3></div></div></div></div>"+
	"<div class='text-center widget-vs-contents mb-4'><h4>"+val[7]+"</h4>"+
	"<p class='mb-5'><span class='d-block'>"+$('#matchDaySelect option:selected').text()+", " +val[6]+"</span>"+
	"<strong class='text-primary'>Meghalaya Football Arena</strong></p></div></div></div></div>";
	rowDivs=rowDivs+rowDiv;
  }
	}
}
	$('#matchesDiv').html(rowDivs);
	$('#resultsDiv').html(resultDivs);
	$('#matchDaySelect').prop('disabled', false);
});

	
	
	}
	

	