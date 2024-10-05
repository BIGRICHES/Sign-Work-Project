ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-86.384672, 32.274814, -86.050439, 32.450400]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SignWork_1 = new ol.format.GeoJSON();
var features_SignWork_1 = format_SignWork_1.readFeatures(json_SignWork_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SignWork_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignWork_1.addFeatures(features_SignWork_1);
var lyr_SignWork_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SignWork_1, 
                style: style_SignWork_1,
                popuplayertitle: "Sign Work",
                interactive: true,
                title: '<img src="styles/legend/SignWork_1.png" /> Sign Work'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SignWork_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SignWork_1];
lyr_SignWork_1.set('fieldAliases', {'Date': 'Date', 'Location': 'Location', 'Sign': 'Sign', 'Work Type': 'Work Type', 'State': 'State', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Number': 'Unit Number', 'City_1': 'City_1', 'State_1': 'State_1', 'County': 'County', 'Zip': 'Zip', 'Country': 'Country', 'Source': 'Source', });
lyr_SignWork_1.set('fieldImages', {'Date': 'TextEdit', 'Location': 'TextEdit', 'Sign': 'TextEdit', 'Work Type': 'TextEdit', 'State': 'TextEdit', 'City': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy Score': 'TextEdit', 'Accuracy Type': 'TextEdit', 'Number': 'Range', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Number': 'TextEdit', 'City_1': 'TextEdit', 'State_1': 'TextEdit', 'County': 'TextEdit', 'Zip': 'Range', 'Country': 'TextEdit', 'Source': 'TextEdit', });
lyr_SignWork_1.set('fieldLabels', {'Date': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Sign': 'inline label - visible with data', 'Work Type': 'inline label - visible with data', 'State': 'hidden field', 'City': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Accuracy Score': 'hidden field', 'Accuracy Type': 'hidden field', 'Number': 'hidden field', 'Street': 'hidden field', 'Unit Type': 'hidden field', 'Unit Number': 'hidden field', 'City_1': 'hidden field', 'State_1': 'hidden field', 'County': 'hidden field', 'Zip': 'hidden field', 'Country': 'hidden field', 'Source': 'hidden field', });
lyr_SignWork_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});