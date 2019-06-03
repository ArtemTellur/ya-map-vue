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
        balloonLayout: getBalloonLayout(this.ymaps, {
          events: [
            {
              name: 'balloon-close',
              listener: () => {
                this.map.balloon.close()
              }
            }
          ],
          layoutOptions: {
            getShape (Layout) {
              const element = this.getElement()

              if (!element) {
                return Layout.superclass.getShape.call(this)
              }
              const balloon = element.querySelector('.balloon')

              return new ymaps.shape.Rectangle(
                new ymaps.geometry.pixel.Rectangle([
                  [balloon.offsetLeft, balloon.offsetTop],
                  [balloon.offsetLeft + balloon.offsetWidth, balloon.offsetTop + balloon.offsetHeight + 10]
                ]))
            }
          }
        })
      }
    )
    this.cluster.add(placemark)
  },
  render() { }
}
</script>
