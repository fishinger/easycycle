$(document).ready(function(){
	$('.bxslider').bxSlider({
	  mode: 'fade',
	  controls: false,
	  captions: false,
	  pager: false,
	  auto: true,
	  pause: 4000
	});
})
$(document).ready(function(){
	var navBtn = $(".top-menu ul li"),
		body = $('body'),
		section = $('section');
	section.waypoint(function(direction) {
	  	var hass = $(this).attr("id");  	
	  	navBtn.each(function(e){
	  		var hasNav = $(this).find('a').attr('href').slice(1)
	  		if(hass == hasNav){
	  			navBtn.removeClass('active');
	  			$(this).addClass("active");			
	  		}
	  	});
	},{
		offset: '0px'
	})
	navBtn.on('click', function(){
		var 
			$this = $(this),
			elemId = $this.find('a').attr('href').slice(1);
			section.map(function(e){
				var sectionId = $(this).attr('id');
				if(sectionId === elemId){
					body.animate({scrollTop: ($(this).offset().top - 90)}, 800);
				}
			})
			setTimeout(function(){
				$this.siblings().removeClass('active');
				$this.addClass("active");
			}, 830)	
	})
	var btnSubmit = $('.btn-submit');
	// $('#btn-submit').submit(function(){
	// 	var userName = $('#user-name');
	// 	var userEmail = $('#user-email');
	// 	$.ajax({
	// 	  type: "POST",		  
	// 	  url: "email.php",
	// 	  data: {
	// 	  	name: userName,
	// 	  	email: userEmail
	// 	  },  
	// 	  //dataType: "json",
	// 	  success: function(data)
	// 	  {
	// 		alert('ok');
	// 	  }	
	// 	})
	// })
})
$(document).ready(function(){
	$('.form').validate({
	    rules: {
	        emailform: {
	            required: true,
	            email: true
	        },
	        nameform: {
	        	required: true
	        }
	    },
	    messages: {
	        emailform: {
	            required: '',
	            email: ''
	        },
	        nameform: {
	        	required: ''
	        }
	    }
	})
	$('.form-popup').validate({
	    rules: {
	        emailpopup: {
	            required: true,
	            email: true
	        },
	        namepopup: {
	        	required: true
	        }
	    },
	    messages: {
	        emailpopup: {
	            required: 'Перед отправкой необходимо заполнить все поля',
	            email: ''
	        },
	        namepopup: {
	        	required: 'Перед отправкой необходимо заполнить все поля'
	        }
	    }
	})
	$('.form-top').validate({
	    rules: {
	        topEmail: {
	            required: true,
	            email: true
	        },
	        topName: {
	        	required: true
	        }
	    },
	    messages: {
	        topEmail: {
	            required: '',
	            email: ''
	        },
	        topName: {
	        	required: ''
	        }
	    }
	})
	var headBtn = $('.header__btn');
	headBtn.on('click', function(){
		var topPopup = $('.top-popup'),
			popupHeight = topPopup.height(),
			header = $('header');
		if(!topPopup.hasClass('popup-active')){
			topPopup.animate({top: 0}, 300);
			header.animate({top: popupHeight + 65}, 300);
			topPopup.addClass('popup-active');
		} else{
			topPopup.animate({top: -(popupHeight + 65)}, 300);
			header.animate({top: 0}, 300);
			topPopup.removeClass('popup-active');
		}
	})
	$('section').on('click', function(){
		var topPopup = $('.top-popup'),
			popupHeight = topPopup.height(),
			header = $('header');
		if(topPopup.hasClass('popup-active')){
			topPopup.animate({top: -(popupHeight + 65)}, 300);
			header.animate({top: 0}, 300);
			topPopup.removeClass('popup-active');
		}
		
	})
	$(".openpopup").fancybox({
	    	openEffect	: 'elastic',
	    	closeEffect	: 'elastic',
	    	scrolling: 'visible',
	    	padding: 0,
	    	width: 640,

	    	helpers : {
	    		title : {
	    			type : 'inside'
	    		}
	    	}
	    });
	$(".openpopup").on('click', function(){
		$('input').removeClass('error');
		$('label.error').html('');
	})
	$('#btn-submit').submit(function(){
		var userName = $('#popup-user-name').val();
		var userEmail = $('#popup-user-email').val();
		$.ajax({
		  type: "POST",		  
		  url: "email.php",
		  data:{
		  	name: userName,
		  	email: userEmail
		  },  
		  dataType: "json",
		  success: function(data){
		  }
		})
		$('.open-popup').remove();
	})

	$('.nav-top').on('click', function(){
		if($(this).hasClass('active')){
			$('.top-menu').removeClass('openmenu');
			$(this).removeClass('active');
		} else{
			$('.top-menu').addClass('openmenu');
			$(this).addClass('active');
		}
		
	})

	$(".record-tab ul li a").on("click", function(e){
		e.preventDefault();
		var elem = $(this).closest(".record-tab ul li a"),
		elemInd = elem.data("class"),
		cuntent = $(".content-img li"),
		cuntentText = $(".direction-text li");

		cuntent.filter(".content-" + elemInd)
		.addClass("active-img")
		.siblings().removeClass("active-img");

		cuntentText.filter(".content-" + elemInd)
		.addClass("active")
		.siblings().removeClass("active");

		$(this).parent().addClass("active")
		.siblings()
		.removeClass("active");
	})
	$('.app__controls a').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		if($this.hasClass('store')){
			var slider = $('.app__slide1'),
				slide = slider.find('.slide');
			if(slide.hasClass('active-app')){
			} else {

				setTimeout(function(){
					$('.slide16').css('background', 'url(img/app1.png) no-repeat');
					$('.slide16').addClass('active-app');
				}, 10);
				setTimeout(function(){
					$('.slide15').css('background', 'url(img/app1.png) no-repeat');
					$('.slide15').addClass('active-app');
				}, 150);
				setTimeout(function(){
					$('.slide14').css('background', 'url(img/app1.png) no-repeat');
					$('.slide14').addClass('active-app');
				}, 300);
				setTimeout(function(){
					$('.slide13').css('background', 'url(img/app1.png) no-repeat');
					$('.slide13').addClass('active-app');
				}, 450);
				setTimeout(function(){
					$('.slide12').css('background', 'url(img/app1.png) no-repeat');
					$('.slide12').addClass('active-app');
				}, 600);
				setTimeout(function(){
					$('.slide11').css('background', 'url(img/app1.png) no-repeat');
					$('.slide11').addClass('active-app');
				}, 750);
				
					setTimeout(function(){
						slide.removeClass('active-app');
					}, 1100);
			}
			
			
		} else if($this.hasClass('goog')){
			var slider = $('.app__slide1'),
				slide = slider.find('.slide');
			if(slide.hasClass('active-app')){

			} else {

				setTimeout(function(){
					$('.slide16').css('background', 'url(img/app2.png) no-repeat');
					$('.slide16').addClass('active-app');
				}, 10);
				setTimeout(function(){
					$('.slide15').css('background', 'url(img/app2.png) no-repeat');
					$('.slide15').addClass('active-app');
				}, 150);
				setTimeout(function(){
					$('.slide14').css('background', 'url(img/app2.png) no-repeat');
					$('.slide14').addClass('active-app');
				}, 300);
				setTimeout(function(){
					$('.slide13').css('background', 'url(img/app2.png) no-repeat');
					$('.slide13').addClass('active-app');
				}, 450);
				setTimeout(function(){
					$('.slide12').css('background', 'url(img/app2.png) no-repeat');
					$('.slide12').addClass('active-app');
				}, 600);
				setTimeout(function(){
					$('.slide11').css('background', 'url(img/app2.png) no-repeat');
					$('.slide11').addClass('active-app');
				}, 750);
				
					setTimeout(function(){
						slide.removeClass('active-app');
					}, 1100);
			}
		}
	})

	$('#btn-submit').submit(function(){
		var userName = $('#popup-user-name').val();
		var userEmail = $('#popup-user-email').val();
		$.ajax({
		  type: "POST",		  
		  url: "email.php",
		  data:{
		  	name: userName,
		  	email: userEmail
		  },  
		  dataType: "json",
		  success: function(data){
			// alert(data)
		  }
		});
		$.ajax({
		  type: "POST",		  
		  url: "saveUser.php",
		  data:{
		  	name: userName,
		  	email: userEmail
		  },  
		  dataType: "json",
		  success: function(data){
			// alert(data)
		  }
		})
	})
	$('#reg-submit').submit(function(){
		var userName = $('#user-name').val();
		var userEmail = $('#user-email').val();
		$.ajax({
		  type: "POST",		  
		  url: "email.php",
		  data:{
		  	name: userName,
		  	email: userEmail
		  },  
		  dataType: "json",
		  success: function(data){
			// alert(data)
		  }
		});
		$.ajax({
		  type: "POST",		  
		  url: "saveUser.php",
		  data:{
		  	name: userName,
		  	email: userEmail
		  },  
		  dataType: "json",
		  success: function(data){
			// alert(data)
		  }
		})
	})

})