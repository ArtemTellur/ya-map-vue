// import Vue from 'vue'
import MapBalloon from './YaMapBalloon'
import { buildLayout } from '../../utils/getBalloonLayout'

// const getOffset = (el) => {
//   let left = 0
//   let top = 0
//   while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
//     left += el.offsetLeft - el.scrollLeft
//     top += el.offsetTop - el.scrollTop
//     el = el.offsetParent
//   }
//   return { top, left }
// }

export const getBalloonLayout = buildLayout(MapBalloon)














// export const getBalloonLayout = (ymaps) => {
//   return ymaps.templateLayoutFactory.createClass(`
//     <div id="for-mount"></div>
//   `, {
//     build () {
//       const Balloon = Vue.extend(YaMapBalloon)
//       this.constructor.superclass.build.call(this)

//       new Balloon({
//         propsData: {
//           context: this
//         }
//       }).$mount(`#for-mount`)

//       this._$element = document.querySelector('.balloon')
//     },
//     clear () {
//       this.constructor.superclass.clear.call(this)
//     },
//     getShape () {
//       const element = this._$element
//       if (!this._isElement(element)) {
//         return this.superclass.getShape.call(this)
//       }
//       const position = getOffset(element)

//       return new ymaps.shape.Rectangle(
//         new ymaps.geometry.pixel.Rectangle([
//           [element.offsetLeft, element.offsetTop],
//           [element.offsetLeft + element.offsetWidth, position.offsetTop + element.offsetHeight + 10]
//         ]))
//     },
//     _isElement (element) {
//       return element !== null
//     }
//   })
// }
