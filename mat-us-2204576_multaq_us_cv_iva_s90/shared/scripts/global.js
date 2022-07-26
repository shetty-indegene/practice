var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1).split('.html')[0];
var SharedResourcesPath = './shared';
function require(jspath) {
    for (i = 0; i < jspath.length; i++) {
        document.write('<script type="text/javascript" src="' + jspath[i] + '"><\/script>');
    }
}
var files = [SharedResourcesPath + '/scripts/veeva-library.js', SharedResourcesPath + '/scripts/underscore-min.js',SharedResourcesPath + '/scripts/responsive.js'];
require(files);
(function ($) {

    $(function () {

        document.addEventListener('touchmove', function(e) {
            if (!$(e.target).is('video')) {
                e.preventDefault();
            }
        }, { passive: false });

        var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);
         var filename = decodeURI(window.location.href.substr(window.location.href.lastIndexOf("/") + 1).split('.html')[0]);
        
        // Slide Navigation

        let slideNavigation = {
           'mat-us-2204576_multaq_us_cv_iva_s10':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s20',
            'prevslide':null,
            },
            'mat-us-2204576_multaq_us_cv_iva_s20':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s30',
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s10',
            },
            'mat-us-2204576_multaq_us_cv_iva_s30':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s40',
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s20',
            },
            'mat-us-2204576_multaq_us_cv_iva_s40':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s50',
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s30',
            },
            'mat-us-2204576_multaq_us_cv_iva_s50':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s60',
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s40',
            },
			'mat-us-2204576_multaq_us_cv_iva_s60':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s70',
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s50',
            },
			'mat-us-2204576_multaq_us_cv_iva_s70':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s80',
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s60',
            },
			'mat-us-2204576_multaq_us_cv_iva_s80':{
            'nextslide':'mat-us-2204576_multaq_us_cv_iva_s90',
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s70',
            },
			'mat-us-2204576_multaq_us_cv_iva_s90':{
            'nextslide':null,
            'prevslide':'mat-us-2204576_multaq_us_cv_iva_s80',
            }
        };

        $('#wrapper').swipeLeft(function (e) {
            if (filename == 'mat-us-2204576_multaq_us_cv_iva_s90') {
                if (!$('body').hasClass('swipe-disabled')) {
                    // Code...
                }
            } else {
                if (!$('body').hasClass('swipe-disabled') && e.target.className != "handler") {
                    console.log(slideNavigation[filename]['nextslide']);
                    //  veeva:gotoSlide(" + slide + ".zip, " + presentation + ")
                    com.veeva.clm.runAPIRequest('veeva:gotoSlide(' + slideNavigation[filename]['nextslide'] + '.zip)');
                }

            }
        });

        $('#wrapper').swipeRight(function (e) {
            if (filename == 'mat-us-2204576_multaq_us_cv_iva_s10') {
                if (!$('body').hasClass('swipe-disabled')) {
                    // Code...
                }
            } else {
                if (!$('body').hasClass('swipe-disabled') && e.target.className != "handler") {
                    console.log(slideNavigation[filename]['prevslide']);
                    //  veeva:gotoSlide(" + slide + ".zip, " + presentation + ")
                    com.veeva.clm.runAPIRequest('veeva:gotoSlide(' + slideNavigation[filename]['prevslide'] + '.zip)');
                }
            }
        });

	
			
            $('.arrow-nav .left').on('click', function() {
                if (!$('body').hasClass('swipe-disabled')) {
                    document.location = "veeva:prevSlide()";
                }
            });
            $('.arrow-nav .right').on('click', function() {
                if (!$('body').hasClass('swipe-disabled')) {
                    document.location = "veeva:nextSlide()";
                }
            });

        $('a[data-segment-num]').on('click', function() {
            var segmentNum = $(this).attr('data-segment-num');
            return setSegment(segmentNum);
        });

  
		
		// Menu modal page 
		


		
		 $(".isi_link1").on("click", function () {
 
		 	trackAction("tracking_element_id94");
        });
		
			
		 $(".isi_link2").on("click", function () {
 
		 	trackAction("tracking_element_id84");
        });
		
		 $(".isi_link1_p").on("click", function () {
 
		 	trackAction("tracking_element_id94");
        });
		
			
		 $(".isi_link2_p").on("click", function () {
 
		 	trackAction("tracking_element_id84");
        });


		
		  $('.adverse_reactions_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s70.zip)";
        });

		
		  $('.home_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s10.zip)";
        });
		
		  $('.introduction_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s20.zip)";
        });
		
		  $('.efficacy_recurrence_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s30.zip)";
        });
		
		  $('.efficacy_hospitalization_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s40.zip)";
        });
		
		  $('.efficacy_afib_cad_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s50.zip)";
        });
		
		  $('.dosing_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s60.zip)";
        });
		
		  $('.safety_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s70.zip)";
        });
		
		  $('.access_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s80.zip)";
        });
		
		  $('.summary_block').on('click', function () {
            document.location = "veeva:gotoSlide(mat-us-2204576_multaq_us_cv_iva_s90.zip)";
        });
	
		
		

        

        $('.btn-popup, .bottom-menu li a:not(.disabled):not(.button):not(.pdf):not(.sitemap)').on('click', function() {
           console.log($(this).index());
            return openPopup($(this).attr('title'));
        });

        $('.popup .btn-close').on('click', function() {
            return closePopup();
        });
		
		$('.popup .btn-close-reference').on('click', function() {
            return closePopup();
        });

        $(window).on('load', function() {
            setTimeout(function() {
                $('#wrapper').addClass('active');
            },40);
        });

        $('.Site_button').on('click', function() {
            var slide = $(this).attr('title');
            return gotoSlide(slide);
        });



        let navigation ={
           
          
        };
  
       
        /*$('.button').on('click', function () {
            var slide = $(this).attr('title');
            if ($(this).parent().parent().attr("id") == "menu") {
                console.log(navigation[$(this).parent().index()]);
                window.location = 'veeva:gotoSlide(' + navigation[$(this).parent().index()] + '.zip, GLB_2020_1_SPL_IND_EN_SPIOLTO-ICS_Id)';
            } else if ($(this).parent().parent().parent().attr("id") == "sub-nav") {
                console.log(patientOucomeNav[$(this).attr("data-segment-num")]);
                window.location = 'veeva:gotoSlide(' + patientOucomeNav[$(this).attr("data-segment-num")] + ')';
            } else if ($(this).hasClass("right")) {
                document.location = "veeva:nextSlide()";
            } else if ($(this).hasClass("left")) {
                document.location = "veeva:prevSlide()";
            }else{
                return gotoSlide(slide);
            }
        });*/
         $("#patient_data").on("click",function(){
            document.location = "veeva:nextSlide()";
        });
    });

})(Zepto);


function openTabGlobal(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent-global");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-global");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  
/*  refresh scroll tab  */
if (s4 !== undefined) {
       s4.refresh();
}
/*  refresh scroll end  */

       
 
    
  
    
  
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenGlobal").click();

function setSegment(segmentNum) {
    localStorage.setItem('segmentNum', segmentNum);
    return false;
}
var filename = decodeURI(window.location.href.substr(window.location.href.lastIndexOf("/") + 1).split('.html')[0]);

function openPopup(_popup_id) {

    var _$active_popup = $('#popups .popup.active');

    if (_$active_popup.length > 0 && _$active_popup.attr('id') !== _popup_id) {

        setTimeout(function() {

            _$active_popup.removeClass('active');

        }, 250);

    }

    var _popup = '#' + _popup_id;

    if (_popup.length > 0) {

        if (!$('#popups').hasClass('active')) $('#popups').addClass('active');
        $('body').addClass('swipe-disabled');

        var _$video = $(_popup).find('video');

        if (_$video.length > 0 && !_$video.attr('src')) {

            _$video.attr('src', _$video.attr('data-video'));

        }

        $(_popup).addClass('active');
       

    }

    return false;

}

function closePopup() {

    var _$popup = $('#popups .popup.active');
    var _$video = _$popup.find('video');

    $('#popups').removeClass('active');
    _$popup.removeClass('active');

    if (_$video.length > 0) {

        setTimeout(function () {

            _$video.get(0).pause();
            _$video.get(0).currentTime = 0;

        }, 250);

    }

    $('body').removeClass('swipe-disabled');
    $('body').removeClass('popup-swipe');
    $('.page-2,.page-3,.page-4').css('display','none');
    $('.page-1').css('display','block');
    $('.dot-2,.dot-3,.dot-4').removeClass('active');
    $('.dot-1').addClass('active');

    return false;

}


var s4;
/* scroll touch compatiblity ipad  */
         $(document).ready(function () {
   

/* Footer */
                s1 = new IScroll('#scrolltouchisi', {
           mouseWheel: true,
        scrollbars: true,
        interactiveScrollbars: true,
        bounce: false
                });
				
				   s2 = new IScroll('#scrolltouchglossary', {
           mouseWheel: true,
        scrollbars: true,
        interactiveScrollbars: true,
        bounce: false
                });
				
				 s3 = new IScroll('#scrolltouch_afib_guidelines1', {
           mouseWheel: true,
        scrollbars: true,
        interactiveScrollbars: true,
        bounce: false
                });
         
		 
		   s4 = new IScroll('#scrolltouch_afib_guidelines2', {
           mouseWheel: true,
        scrollbars: true,
        interactiveScrollbars: true,
        bounce: false
                });
         
  /* Footer end*/       
		

     });
	 
	 
/* scroll touch compatiblity ipad  end */


	function change(){

			 var x = document.getElementById("overlay");
	 var y = document.getElementById("open");
	  var z = document.getElementById("close");

		  	if (x.style.display === "block") {
	
     x.style.display = "none";
	 y.style.display = "block";
	  z.style.display = "none";
  } else {

	  x.style.display = "block";
	 y.style.display = "none";
	  z.style.display = "block";
	

  }

  }
