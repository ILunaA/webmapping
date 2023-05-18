import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import CanvasImageLayerRenderer from 'ol/renderer/canvas/ImageLayer.js';
import ImageWMS from 'ol/source/ImageWMS.js';
import {Image} from 'ol/layer';


var Defaultview = new View({
  center:fromLonLat([-4.72, 41.66]),
  zoom: 2
});

var Mivista = new View({
  center: fromLonLat([-4.72, 41.66]),
  zoom: 7
});

var cities = new Image({
  source: new ImageWMS({
url: 'http://localhost:8080/geoserver/wms',
params: {
'LAYERS': 'cities',
'FORMAT': 'image/png'
},
})
});

var countries = new Image({
  source: new ImageWMS({
url: 'http://localhost:8080/geoserver/wms',
params: {
'LAYERS': 'countries',
'FORMAT': 'image/png'
},
})
});

var osmlayer = new TileLayer({
  source: new OSM()
})
const map = new Map({
  target: 'map',
  layers: [osmlayer,countries,cities],
  view:Mivista,
  renderer:'canvas'

});

Mivista.setZoom(2);
