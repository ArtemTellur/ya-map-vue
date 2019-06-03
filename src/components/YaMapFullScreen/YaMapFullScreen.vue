<template>
  <div class="map-fullscreen">
    <button @click.prevent="setFullScreen">
      {{ isFullScreen ? 'exit' : 'enter' }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFullScreen: false
    }
  },
  methods: {
    setFullScreen () {
      this.$emit('full-screen')
      this.isFullScreen = !this.isFullScreen
    }
  }
}
</script>
<style scoped>
  .map-fullscreen {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  .map-fullscreen >>> .button {
    border: none;
    padding: 1.2rem;
  }
</style>