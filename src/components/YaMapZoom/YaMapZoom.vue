<template>
  <div class="map-zoom">
    <button class="map-zoom-button" @click="zoomIn">
      +
    </button>
    <button class="map-zoom-button" @click="zoomOut">
      -
    </button>
  </div>
</template>

<script>

export default {
  name: 'MapZoom',
  data () {
    return {
      styles: {},
      map: null
    }
  },
  props: {
    mapInstance: {
      type: Object,
      required: true
    }
  },
  methods: {
    zoomIn () {
      const currentZoom = this.mapInstance.getZoom()

      this.mapInstance.setZoom(currentZoom + 1)
    },
    zoomOut () {
      const currentZoom = this.mapInstance.getZoom()

      this.mapInstance.setZoom(currentZoom - 1)
    }
  }
}
</script>
<style scoped>
  .map-zoom {
    display: flex;
    flex-direction: column;
  }
  .map-zoom {
    position: absolute;
    top: calc(50% - 7.8rem);
    right: 1.6rem;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    .map-zoom {
      top: calc(50% - 8rem);
    }
  }

  @media (max-width: 767px) {
    .map-zoom {
      top: auto;
      bottom: 8.4rem;
      right: .8rem;
    }
  }
</style>