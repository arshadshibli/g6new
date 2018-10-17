import 'bootstrap';
import './scss/index.scss';
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
