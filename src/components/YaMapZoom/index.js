import YaMapZoom from './YaMapZoom'
import Vue from 'vue'

export const getZoomLayout = (ymaps, instance) => {
  const zoomTemplate = ymaps.templateLayoutFactory.createClass(`
    <div id="map-zoom"></div>
  `, {
    build () {
      this.constructor.superclass.build.call(this)

      const ZoomMount = Vue.extend(YaMapZoom)

      this.instance = new ZoomMount({
        propsData: {
          mapInstance: instance
        }
      }).$mount('#map-zoom')
    },
    clear () {
      this.constructor.superclass.clear.call(this)

      this.instance.$destroy()
    }
  })
  return zoomTemplate
}