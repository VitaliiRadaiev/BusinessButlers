
function initMap() {
	var map;

	var center = {
		lat: 40.68950,
		lng: -74.044683,
	}

	var markerPosition = {
		lat: 40.68950,
		lng: -74.044683,
	}

	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: center.lat, lng: center.lng },

		zoom: 16,

		//styles: 
	});

	var marker = new google.maps.Marker({

		position: { lat: markerPosition.lat, lng: markerPosition.lng },

		map: map,

		title: '',
		label: '',

		// icon: 'img/contact/googlMarker.svg',
	});

}
