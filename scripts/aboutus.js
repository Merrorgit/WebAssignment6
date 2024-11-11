//Map
function init() {
	let map = new ymaps.Map('map', {
		center: [51.0905113,71.4186188],
		zoom: 17
	});

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    map.controls.remove('typeSelector');
    map.controls.remove('trafficControl');
}

ymaps.ready(init);