var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        var lyr_Satellite_1 = new ol.layer.Tile({
            'title': 'Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });var format_road_2 = new ol.format.GeoJSON();
var features_road_2 = format_road_2.readFeatures(json_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_road_2.addFeatures(features_road_2);var lyr_road_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_2, 
                style: style_road_2,
                title: '<img src="styles/legend/road_2.png" /> road'
            });var format_Lots_3 = new ol.format.GeoJSON();
var features_Lots_3 = format_Lots_3.readFeatures(json_Lots_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lots_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Lots_3.addFeatures(features_Lots_3);var lyr_Lots_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lots_3, 
                style: style_Lots_3,
                title: '<img src="styles/legend/Lots_3.png" /> Lots'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satellite_1.setVisible(true);lyr_road_2.setVisible(true);lyr_Lots_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satellite_1,lyr_road_2,lyr_Lots_3];
lyr_road_2.set('fieldAliases', {'id': 'id', });
lyr_Lots_3.set('fieldAliases', {'id': 'id', });
lyr_road_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Lots_3.set('fieldImages', {'id': 'TextEdit', });
lyr_road_2.set('fieldLabels', {'id': 'no label', });
lyr_Lots_3.set('fieldLabels', {'id': 'no label', });
lyr_Lots_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});