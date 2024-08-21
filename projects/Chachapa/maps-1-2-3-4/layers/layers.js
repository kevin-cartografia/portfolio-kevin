var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Chachapa_1 = new ol.format.GeoJSON();
var features_Chachapa_1 = format_Chachapa_1.readFeatures(json_Chachapa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chachapa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chachapa_1.addFeatures(features_Chachapa_1);
var lyr_Chachapa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chachapa_1, 
                style: style_Chachapa_1,
                popuplayertitle: "Chachapa",
                interactive: true,
    title: 'Chachapa<br />\
    <img src="styles/legend/Chachapa_1_0.png" /> 1<br />\
    <img src="styles/legend/Chachapa_1_1.png" /> 2<br />\
    <img src="styles/legend/Chachapa_1_2.png" /> 3<br />\
    <img src="styles/legend/Chachapa_1_3.png" /> 4<br />\
    <img src="styles/legend/Chachapa_1_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Chachapa_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Chachapa_1];
lyr_Chachapa_1.set('fieldAliases', {'Territorio': 'Territorio', 'Manzana': 'Manzana', 'Población total': 'Población total', 'Población masculina': 'Población masculina', 'Población femenina': 'Población femenina', 'Total viviendas': 'Total viviendas', 'Comercio al por menor': 'Comercio al por menor', });
lyr_Chachapa_1.set('fieldImages', {'Territorio': 'Range', 'Manzana': 'TextEdit', 'Población total': 'TextEdit', 'Población masculina': 'TextEdit', 'Población femenina': 'TextEdit', 'Total viviendas': 'TextEdit', 'Comercio al por menor': 'TextEdit', });
lyr_Chachapa_1.set('fieldLabels', {'Territorio': 'inline label - always visible', 'Manzana': 'inline label - always visible', 'Población total': 'inline label - always visible', 'Población masculina': 'hidden field', 'Población femenina': 'hidden field', 'Total viviendas': 'inline label - always visible', 'Comercio al por menor': 'hidden field', });
lyr_Chachapa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});