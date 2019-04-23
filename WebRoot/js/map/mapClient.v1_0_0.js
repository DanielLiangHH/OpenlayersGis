// var mapServerUrl = 【地图服务：localhost:8080/EzServer】
var mapServerUrl = 'http://localhost:8080/EzServer7';

// var mapUrl = mapServerUrl + '/Maps/' + 【地图名称】 + '/EzMap'
var mapUrl = mapServerUrl + '/Maps/dg_sl/EzMap';

(function (w) {
	w.LayerMap = function (id) {
		var map = new ol.Map({
			view: new ol.View({
				center: [113.84623427412063, 22.969015441771873],
				extent: void 0,
				maxZoom: 19,
				minZoom: 10,
				projection: "EPSG:4326",
				zoom: 12,
			}),
			layers: [
				new ol.layer.Tile({
					source: new ol.source.XYZ({
						url: mapUrl + '?Service=getImage&Type=RGB&ZoomOffset=0&Col={x}&Row={y}&Zoom={z}&V=0.3',
						projection: "EPSG:4326"
					})
				})
			],
			target: id
		});
	};

	w.BaseMapView = function (o) {
		var opt = $.extend(true, {
				center: [113.84623427412063, 22.969015441771873],
				extent: void 0,
				maxZoom: 19,
				minZoom: 10,
				projection: "EPSG:4326",
				zoom: 12,
			}, $.extend(true, {}, o)),
			v = new ol.View(opt);
		this._opt = opt;
	}
})(this);


new LayerMap('map');
