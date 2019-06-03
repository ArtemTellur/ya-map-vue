import Vue from 'vue'

const mountComponent = (Component, target) => {
  const comp = Vue.extend(Component)

  const vm = new comp()
  vm.$mount(target)

  return vm
}

export const buildLayout = Component => (ymaps, options) => {
  const layoutFactory = ymaps.templateLayoutFactory

  const Layout = layoutFactory.createClass('<div></div>', {
    build: function () {
      Layout.superclass.build.call(this)

      Layout.template = mountComponent(Component, this.getElement().querySelector('div'))

      if (options.events && options.events.length) {
        options.events.forEach(event => {
          Layout.template.$on(event.name, event.listener)
        })
      }
      if (options.layoutOptions) {
        Object.keys(options.layoutOptions).forEach(item => {
          this[item] = options.layoutOptions[item].bind(this, Layout)
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
