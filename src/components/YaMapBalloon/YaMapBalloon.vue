<template>
  <div class="balloon">
    <div class="balloon-content">
      Много балунов
    </div>
    <span class="balloon-close" @click="closeBalloon">&#10006;</span>
  </div>
</template>
<script>
export default {
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeBalloon () {
      this.context.events.fire('userclose')
    }
  }
}
</script>
<style scoped>
  .balloon {
    position: absolute;
    left: -140px;
    bottom: 100%;
    width: 280px;
    background-color: white;
  }
  .balloon-content {
    padding: 20px;
  }
  .balloon-close {
    cursor: pointer;
    position: absolute;
    padding: 12px 12px 0 0;
    top: 0;
    right: 0;
    height: 20px;
    width: 20px;
  }
</style>


