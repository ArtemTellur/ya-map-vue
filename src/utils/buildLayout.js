import Vue from 'vue'

const mountComponent = (Component, target, options = {}) => {
  const comp = Vue.extend(Component)
  const vm = new comp({...options})
  vm.$mount(target)

  return vm
}

export const buildLayout = Component => (ymaps, params) => {
  const layoutFactory = ymaps.templateLayoutFactory

  const Layout = layoutFactory.createClass('<div></div>', {
    build: function () {
      Layout.superclass.build.call(this)

      Layout.template = mountComponent(Component, this.getElement().querySelector('div'), params.componentOptions)

      if (params.events && params.events.length) {
        params.events.forEach(event => {
          Layout.template.$on(event.name, event.listener)
        })
      }
      if (params.layoutOptions) {
        Object.keys(params.layoutOptions).forEach(item => {
          this[item] = params.layoutOptions[item].bind(this, Layout)
        })
      }
    },
    clear: function () {
      Layout.template.$destroy()
      Layout.template = null
      Layout.superclass.clear.call(this)
    }
  })

  return Layout
}
