<template>
  <div>
    <slot :cluster="cluster"/>
  </div>
</template>

<script>
export default {
  props: {
    ymaps: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      cluster: null,
      defaultOptions: {
        gridSize: 80,
        zoomMargin: [50, 20, 0, 20],
        clusterIcons: [
          {
            href: '//static.mvideo.ru/assets/img/marker_group.svg',
            size: [40, 40],
            offset: [-20, -20]
          }
        ],
        clusterIconContentLayout: this.ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF">{{ properties.geoObjects.length }}</div>'
        )
      }
    }
  },
  created () {
    const options = {...this.defaultOptions, ...this.options}

    this.cluster = new this.ymaps.Clusterer(options)
    this.map.geoObjects.add(this.cluster)
  },
  mounted () {
    this.map.setBounds(this.cluster.getBounds(), {
      checkZoomRange: true
    })
  },
  render () {}
}
</script>
