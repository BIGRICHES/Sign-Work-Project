ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9627375.760974, 3796071.071719, -9577212.029916, 3822424.082473]);
var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SignWork_2 = new ol.format.GeoJSON();
var features_SignWork_2 = format_SignWork_2.readFeatures(json_SignWork_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignWork_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignWork_2.addFeatures(features_SignWork_2);
cluster_SignWork_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SignWork_2
});
var lyr_SignWork_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SignWork_2, 
                style: style_SignWork_2,
                popuplayertitle: 'Sign Work',
                interactive: true,
                title: '<img src="styles/legend/SignWork_2.png" /> Sign Work'
            });

lyr_Satellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SignWork_2.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_OSMStandard_1,lyr_SignWork_2];
lyr_SignWork_2.set('fieldAliases', {'Date': 'Date', 'Location': 'Location', 'State': 'State', 'City': 'City', 'Work Code': 'Work Code', 'Sign': 'Sign', 'Quantity': 'Quantity', 'Posts': 'Posts', 'SNA Hrdwr.': 'SNA Hrdwr.', 'Blank Used': 'Blank Used', 'Work Performed': 'Work Performed', 'Sign Code': 'Sign Code', 'Crew': 'Crew', 'Geocodio Latitude': 'Geocodio Latitude', 'Geocodio Longitude': 'Geocodio Longitude', 'Geocodio Accuracy Score': 'Geocodio Accuracy Score', 'Geocodio Accuracy Type': 'Geocodio Accuracy Type', 'Geocodio Address Line 1': 'Geocodio Address Line 1', 'Geocodio Address Line 2': 'Geocodio Address Line 2', 'Geocodio Address Line 3': 'Geocodio Address Line 3', 'Geocodio House Number': 'Geocodio House Number', 'Geocodio Street': 'Geocodio Street', 'Geocodio Unit Type': 'Geocodio Unit Type', 'Geocodio Unit Number': 'Geocodio Unit Number', 'Geocodio City': 'Geocodio City', 'Geocodio State': 'Geocodio State', 'Geocodio County': 'Geocodio County', 'Geocodio Postal Code': 'Geocodio Postal Code', 'Geocodio Country': 'Geocodio Country', 'Geocodio Source': 'Geocodio Source', });
lyr_SignWork_2.set('fieldImages', {'Date': 'TextEdit', 'Location': 'TextEdit', 'State': 'TextEdit', 'City': 'TextEdit', 'Work Code': 'TextEdit', 'Sign': 'TextEdit', 'Quantity': 'Range', 'Posts': 'TextEdit', 'SNA Hrdwr.': 'TextEdit', 'Blank Used': 'TextEdit', 'Work Performed': 'TextEdit', 'Sign Code': 'TextEdit', 'Crew': 'TextEdit', 'Geocodio Latitude': 'TextEdit', 'Geocodio Longitude': 'TextEdit', 'Geocodio Accuracy Score': 'TextEdit', 'Geocodio Accuracy Type': 'TextEdit', 'Geocodio Address Line 1': 'TextEdit', 'Geocodio Address Line 2': 'TextEdit', 'Geocodio Address Line 3': 'TextEdit', 'Geocodio House Number': 'TextEdit', 'Geocodio Street': 'TextEdit', 'Geocodio Unit Type': 'TextEdit', 'Geocodio Unit Number': 'TextEdit', 'Geocodio City': 'TextEdit', 'Geocodio State': 'TextEdit', 'Geocodio County': 'TextEdit', 'Geocodio Postal Code': 'Range', 'Geocodio Country': 'TextEdit', 'Geocodio Source': 'TextEdit', });
lyr_SignWork_2.set('fieldLabels', {'Date': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'State': 'hidden field', 'City': 'hidden field', 'Work Code': 'inline label - visible with data', 'Sign': 'inline label - visible with data', 'Quantity': 'inline label - visible with data', 'Posts': 'hidden field', 'SNA Hrdwr.': 'hidden field', 'Blank Used': 'hidden field', 'Work Performed': 'hidden field', 'Sign Code': 'hidden field', 'Crew': 'inline label - visible with data', 'Geocodio Latitude': 'hidden field', 'Geocodio Longitude': 'hidden field', 'Geocodio Accuracy Score': 'hidden field', 'Geocodio Accuracy Type': 'hidden field', 'Geocodio Address Line 1': 'hidden field', 'Geocodio Address Line 2': 'hidden field', 'Geocodio Address Line 3': 'hidden field', 'Geocodio House Number': 'hidden field', 'Geocodio Street': 'hidden field', 'Geocodio Unit Type': 'hidden field', 'Geocodio Unit Number': 'hidden field', 'Geocodio City': 'hidden field', 'Geocodio State': 'hidden field', 'Geocodio County': 'hidden field', 'Geocodio Postal Code': 'hidden field', 'Geocodio Country': 'hidden field', 'Geocodio Source': 'hidden field', });
lyr_SignWork_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});