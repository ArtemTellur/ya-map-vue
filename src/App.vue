<template>
  <div id="app">
    <ya-map-loader
      id="my-map"
      api-key="d578b980-3c82-4c22-9019-655b82880c34"
      :mapConfig="mapConfig"
      @mapLoaded="onCreate"
    >
      <template slot-scope="{ ymaps, map }">
        <ya-map-controls :ymaps="ymaps" :map="map"/>
        <ya-map-cluster :ymaps="ymaps" :map="map">
          <template slot-scope="{ cluster }">
            <ya-map-placemark
              :ymaps="ymaps"
              :map="map"
              :cluster="cluster"
              v-for="(placemark, index) in placemarkList"
              :key="index"
              v-bind="{ ...placemark }"
            />
          </template>
        </ya-map-cluster>
      </template>
    </ya-map-loader>
  </div>
</template>

<script>
import YaMapLoader from './components/YaMapLoader';
import YaMapPlacemark from './components/YaMapPlacemark';
import YaMapCluster from './components/YaMapCluster'
import YaMapControls from './components/YaMapControls'
import placemarkList from './placemarkList';

export default {
  name: 'app',
  data() {
    return {
      mapConfig: {
        center: [55.87, 37.66],
        zoom: 10,
        controls: []
      },
      placemarkList: placemarkList,
      mapInstance: null
    }
  },
  methods: {
    onCreate (ymaps, mapInstance) {
      this.mapInstance = mapInstance
      this.ymaps = ymaps
    }
  },
  components: {
    YaMapLoader,
    YaMapPlacemark,
    YaMapCluster,
    YaMapControls
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
