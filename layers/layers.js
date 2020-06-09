var wms_layers = [];

var format_Puntos_0 = new ol.format.GeoJSON();
var features_Puntos_0 = format_Puntos_0.readFeatures(json_Puntos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_0.addFeatures(features_Puntos_0);
var lyr_Puntos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_0, 
                style: style_Puntos_0,
                interactive: true,
                title: '<img src="styles/legend/Puntos_0.png" /> Puntos'
            });

lyr_Puntos_0.setVisible(true);
var layersList = [lyr_Puntos_0];
lyr_Puntos_0.set('fieldAliases', {'id': 'id', });
lyr_Puntos_0.set('fieldImages', {'id': '', });
lyr_Puntos_0.set('fieldLabels', {'id': 'no label', });
lyr_Puntos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});