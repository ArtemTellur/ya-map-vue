<script>
import { getZoomLayout } from './YaMapZoom'
import { getFullScreenLayout } from './YaMapFullScreen'
export default {
  props: {
    ymaps: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.createZoom()
    this.createFullScreen()
  },
  methods: {
    createZoom () {
      const zoomControl = new this.ymaps.control.ZoomControl({
        options: {
          layout: getZoomLayout(this.ymaps, {
            events: [
              {
                name: 'map-zoom-in',
                listener: () => {
                  const currentZoom = this.map.getZoom()

                  this.map.setZoom(currentZoom + 1)
                }
              },
              {
                name: 'map-zoom-out',
                listener: () => {
                  const currentZoom = this.map.getZoom()

                  this.map.setZoom(currentZoom - 1)
                }
              }
            ]
          })
        }
      })

      this.map.controls.add(zoomControl, {
        position: {
          top: 0,
          right: 0
        }
      })
    },
    setControlPaneStyles () {
      const controlPane = this.map.controls.getContainer()
      const controls = controlPane.querySelectorAll('[class$="-controls__control"]')

      controlPane.style.width = '0'
      controlPane.style.left = '100%'
      controlPane.style.bottom = '0'

      controls.forEach(control => {
        control.style.height = '100%'
      })
    },
    createFullScreen () {
      const fullScreen = new this.ymaps.control.Button({
        options: {
          layout: getFullScreenLayout(this.ymaps, {
            events: [
              {
                name: 'full-screen',
                listener: () => {
                  if (this.map.container.isFullscreen()) {
                    this.map.container.exitFullscreen()
                  } else {
                    this.setControlPaneStyles()
                    this.map.container.enterFullscreen()
                  }
                }
              }
            ]
          })
        }
      })

      this.map.controls.add(fullScreen, {
        position: {
          top: 0,
          right: 0
        }
      })
    }
  },
  render () {}
}
</script>

