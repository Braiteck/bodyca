$(() => {
	// Первый блок на главной
	if ($('.first_section .swiper-container').length) {
		let sliders = []

		$('.first_section .swiper-container').each(function (i) {
			let this_ID = $(this).attr('id'),
				options = {
					loop: true,
					speed: 500,
					spaceBetween: 0,
					slidesPerView: 1,
					simulateTouch: false,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					pagination: {
						el: '.first_section_swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					},
					navigation: {
						nextEl: '.first_section_swiper-button-next',
						prevEl: '.first_section_swiper-button-prev'
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if ($(window).width() < 1279) {
				sliders[0].on('slideChange', swiper => {
					sliders[1].slideToLoop(swiper.realIndex)
					sliders[2].slideToLoop(swiper.realIndex)
				})
			}
		})
	}


	// Блогеры в bodyca
	if ($('.bloggers .swiper-container').length) {
		new Swiper('.bloggers .swiper-container', {
			loop: false,
			speed: 500,
			spaceBetween: 15,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				1280: {
					slidesPerView: 2
				}
			}
		})
	}


	// Карусель категорий
	if ($('.categories:not(.categories2) .swiper-container').length) {
		new Swiper('.categories:not(.categories2) .swiper-container', {
			loop: false,
			speed: 500,
			spaceBetween: 10,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				},
				1440: {
					slidesPerView: 5
				},
				1600: {
					slidesPerView: 6
				}
			}
		})
	}

	if ($('.categories2 .swiper-container').length) {
		new Swiper('.categories2 .swiper-container', {
			loop: false,
			speed: 500,
			spaceBetween: 15,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			}
		})
	}


	// Карусель товаров
	if ($('.products .swiper-container').length) {
		new Swiper('.products .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 10,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 10,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 16,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
						$(swiper.$el).find('.bg_line').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
						$(swiper.$el).find('.bg_line').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Страница товара - Моб. слайдер
	if ($('.product_info .images .mob_slider .swiper-container').length) {
		new Swiper('.product_info .images .mob_slider .swiper-container', {
			loop: true,
			speed: 500,
			spaceBetween: 0,
			slidesPerView: 1,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Ваши луки
	$('.your_looks .wheelSlider-container').wheelSlider({
		controls: true,
		dots: false,
		items: 5
	})


	// Моб. меню
	$('header .mob_menu_btn, .mob_menu .head .close').click((e) => {
		e.preventDefault()

		if (!$('header .mob_menu_btn').hasClass('active')) {
			$('header .mob_menu_btn').addClass('active')
			$('body').addClass('menu_open')

			$('.mob_menu').fadeIn(200)
		} else {
			$('header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')

			$('.mob_menu').fadeOut(100, () => {
				$('.mob_menu .menu_data').hide()
				$('.mob_menu .data').show()
			})
		}
	})

	$('.mob_menu .data .menu a.sub_link').click(function (e) {
		e.preventDefault()

		let content = $(this).data('content')

		$('.mob_menu .data').hide()
		$('.mob_menu .menu_data' + content).fadeIn(200)
	})

	$('.mob_menu .menu_data .back .btn').click(function (e) {
		e.preventDefault()

		$('.mob_menu .menu_data').hide()
		$('.mob_menu .data').fadeIn(200)
	})


	// Товар в корзину
	$('.product .buy_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в избранное
	$('.product .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Город доставки
	$('.delivery_city form .change_btn').click(function (e) {
		e.preventDefault()

		$('.delivery_city form .tips').addClass('show')
	})

	$(document).click((e) => {
		if ($(e.target).closest('.delivery_city').length === 0) {
			$('.delivery_city form .tips').removeClass('show')
		}
	})


	// Способо доставки
	$('.delivery_methods .method').click(function () {
		let content = $(this).data('content')

		$('.delivery_methods .method_info').hide()
		$('.delivery_methods ' + content).fadeIn(300)
	})


	// Фильтр товароы
	$('.products .head .mini_modal label').click(function () {
		let parent = $(this).closest('.modal_cont')

		let html = ''

		setTimeout(() => {
			parent.find('.mini_modal input:checked').each(function () {
				html = html + ', ' + $(this).next().text()
			})

			parent.find('.btn .vals').text(html.substr(2))
		})
	})


	// Оформление заказа
	$('.checkout_info .form .delivery_methods label').click(function () {
		let content = $(this).data('content'),
			parent = $(this).closest('.section')

		parent.find('.method_info').hide()
		parent.find(content).fadeIn(300)
	})

	$('.checkout_info .form .payment_methods label').click(function () {
		let methodIndex = $(this).data('index')

		$('aside .pay_btn, aside .checkout_btn').removeClass('show')

		if (methodIndex == 1) { $('aside .pay_btn').addClass('show') }
		if (methodIndex == 2) { $('aside .checkout_btn').addClass('show') }
	})


	// Страница товара - Галерея
	$('.product_info .images .link').click(function (e) {
		e.preventDefault()

		let startSlide = $(this).data('start-slide')

		$.fancybox.open({
			src: '#product_gallery_modal',
			type: 'inline',
			touch: false,
			afterShow: () => {
				const productSlider = new Swiper('.fancybox-container #product_gallery_modal .swiper-container', {
					loop: false,
					speed: 500,
					spaceBetween: 0,
					slidesPerView: 1,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					initialSlide: startSlide,
					on: {
						slideChange: swiper => {
							setTimeout(() => {
								$('#product_gallery_modal .thumbs button').removeClass('active')
								$('#product_gallery_modal .thumbs button').eq(swiper.activeIndex).addClass('active')
							})
						}
					}
				})

				$('#product_gallery_modal .thumbs button').click(function (e) {
					e.preventDefault()

					productSlider.slideTo($(this).data('slide-index'), 500)
				})
			}
		})
	})


	// Страница товара - Выбор цвета
	$('.product_info .color .vals label').click(function () {
		let parent = $(this).closest('.color'),
			colorName = $(this).data('name')

		parent.find('.name span').text(colorName)
	})


	// Подписка
	$('.subscribe form .input').keydown(function () {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? $('.subscribe form').addClass('success')
				: $('.subscribe form').removeClass('success')
		})
	})


	// Фиксация элемента при прокрутке
	if ($(window).width() > 1024) {
		$('.sticky').stick_in_parent()
	}
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	aboutAdvantagesHeight($('.about_advantages .item'), $('.about_advantages .item').length)
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	aboutAdvantagesHeight($('.about_advantages .item'), $('.about_advantages .item').length)
})



// Выравнивание преимуществ
function aboutAdvantagesHeight(context, step) {
	let start = 0,
		finish = step,
		$items = context

	$items.find('.desc').height('auto')

	$items.each(function () {
		setHeight($items.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}



// Карта гугла
function initMap() {
	let coordinates = { lat: 55.75225359400512, lng: 37.62446151048577 },

		styles = [
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			}
		],

		map = new google.maps.Map(document.getElementById('map'), {
			center: coordinates,
			zoom: 12,
			disableDefaultUI: false
		}),

		marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			icon: {
				url: '/images/ic_map_marler.svg',
				size: new google.maps.Size(160, 160),
				anchor: new google.maps.Point(80, 80)
			}
		})

	map.setOptions({ styles: styles })
}