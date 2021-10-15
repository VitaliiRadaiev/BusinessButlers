let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// 1) когда выбираешь мультиплай все ок, добавляется еще поле,
//  но когда возвращаешься снова на сингл то надо это поле убирать,
//   ну и чистить у него атрибут data-place_name

// 2) Количество адресов также не меняется, меняется только 
// когда переключил на мултипл. Ну и надо запретить ввод 
// больше 6. Когда убираем адреса то также чистим атрибут data-place_name

window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 1000)
				window.addEventListener('resize', setPedding);
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	function addPopup() {
		document.body.insertAdjacentHTML('beforeend',
			`<div class="popup" id="alertPopup">
				<div class="popup_body">
					<div class="popup_content">
						<div class="popup-close close-popup"><span></span></div>
						<h2 class="popup-title title-2"></h2>
						<div class="popup-text"></div>
						<div class="btn-default btn-default_dark close-popup"> OK</div>
					</div>
				</div>
			</div>`
		)
	}

	addPopup()

	@@include('_function.js');

	@@include('forms.js');
	@@include('../common/header/header.js');
	@@include('../common/rating/rating.js');
	@@include('../common/testimonials/testimonials.js');
	@@include('../common/questions/questions.js');
	@@include('../common/file-block/file-block.js');
	@@include('../common/booking-tabs/booking-tabs.js');

	@@include('../common/popup/popup.js');


	@@include('pages/home.js');
	@@include('pages/about.js');
	@@include('pages/booking.js');


	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			var $svg = $(data).find('svg');
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

	let bookingOptions = document.querySelector('.b-form__options');
	if (bookingOptions) {
		let textItems = bookingOptions.querySelectorAll('.b-form__text');
		setSameHeight(textItems)
	}
	inputOnlyNum();


	let infoDeliveringSizesTimaframes = document.querySelectorAll('.info-delivering-sizes__timaframes');
	if(infoDeliveringSizesTimaframes.length) {
		infoDeliveringSizesTimaframes.forEach(item => {
			if(item.children.length > 1) {
				item.classList.add('multiple');
			}
		})
	}


	let servicesDeliverItem = document.querySelectorAll('.services-deliver__item');
	if(servicesDeliverItem.length) {
		let allArray = [];
		for(let i = 0; i <= Math.ceil(servicesDeliverItem.length / 2); i = i + 2) {
			allArray.push([servicesDeliverItem[i], servicesDeliverItem[i + 1]])
		}
		allArray.forEach(arr => {
			let items = [];
			arr.forEach(item => {
				let text = item.querySelector('.services-deliver__item-text');
				items.push(text);
			})

			setSameHeight(items);
		})
	}
});

window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

	@@include('files/dynamic_adapt.js');

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

});

@@include('blocks/map.js');


