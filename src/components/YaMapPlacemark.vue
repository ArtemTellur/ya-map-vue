<script>
import { getBalloonLayout } from './YaMapBalloon'

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
    cluster: {
      type: Object,
      required: true
    },
    coordinates: {
      type: Array,
      required: true
    },
    balloon: {
      type: Object,
      default: () => ({})
    },
    icon: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    const placemark = new this.ymaps.Placemark(
      this.coordinates,
      {},
      {
        ...this.icon,
        balloonLayout: getBalloonLayout(this.ymaps, this.map)
      }
    )
    this.cluster.add(placemark)
  },
  render() { }
}
</script>
