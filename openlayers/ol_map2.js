import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import CanvasImageLayerRenderer from 'ol/renderer/canvas/ImageLayer.js';


var Defaultview = new View({
  center:fromLonLat([-4.72, 41.66]),
  zoom: 2
});

var Mivista = new View({
  center: fromLonLat([-4.72, 41.66]),
  zoom: 7
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view:Mivista,
  renderer:'canvas'

});

Mivista.setZoom(2);
