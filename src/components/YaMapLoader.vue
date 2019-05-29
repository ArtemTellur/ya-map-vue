<template>
  <div>
    <div
      class="yandex-map"
      ref="yandexMap"
    ></div>
    <template v-if="Boolean(ymaps) && Boolean(this.map)">
      <slot
        :ymaps="ymaps"
        :map="map"
      />
    </template>
  </div>
</template>

<script>
import YaMapApiLoader from './YaMapApiLoader';

export default {
  name: 'YaMapLoader',
  props: {
    mapConfig: Object,
    apiKey: String
  },
  data() {
    return {
      ymaps: null,
      map: null
    }
  },
  async mounted() {
    const ymaps = await YaMapApiLoader({
      apiKey: this.apiKey
    })

    this.ymaps = ymaps
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.yandexMap
      this.map = new this.ymaps.Map(mapContainer, this.mapConfig)
      this.$emit('mapLoaded', this.ymaps, this.map)
    }
  }
}
</script>

<style scoped>
.yandex-map {
  width: 900px;
  height: 600px;
  box-sizing: border-box;
}

.yandex-map >>> [class$="-controls-pane"] {
  width: 0 !important;
  left: 100% !important;
  bottom: 0;
}

.yandex-map >>> [class$="-controls__control"] {
  height: 100%;
}

@media (max-width: 1023px) and (min-width: 768px) {
  .yandex-map {
    padding: 0 10px;
    width: 100%;
    height: 500px;
  }
}
@media (max-width: 767px) {
  .yandex-map {
    width: 100%;
    height: 360px;
  }
}
</style>
