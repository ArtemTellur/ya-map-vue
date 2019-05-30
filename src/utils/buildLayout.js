import Vue from 'vue'

const mountComponent = (Component, target) => {
  const comp = Vue.extend(Component)

  const vm = new comp()
  vm.$mount(target)

  return vm
}

export const buildLayout = Component => ymaps => {
  const layoutFactory = ymaps.templateLayoutFactory

  const Layout = layoutFactory.createClass('<div></div>', {
    build: function () {
      Layout.superclass.build.call(this)

      Layout.template = mountComponent(Component, this.getElement().querySelector('div'))
      Layout.template.$on('balloon-close', () => console.log('closed'))
    },
    clear: function () {
      Layout.template.$destroy()
      Layout.template = null
      Layout.superclass.clear.call(this)
    }
  })

  return Layout
}
