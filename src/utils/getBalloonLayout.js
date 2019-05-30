import Vue from 'vue'

const mountComponent = Component => {
  const comp = Vue.extend(Component)

  const elem = new comp().$mount().$el

  const wrapper = document.createElement("div");
  wrapper.appendChild(elem);
  const str = wrapper.innerHTML;

  return str
}

export const buildLayout = Component => (ymaps, mapInstance) => {
  return ymaps.templateLayoutFactory.createClass(mountComponent(Component), {
    clear () {
      this.constructor.superclass.clear.call(this)
    }
  })
}
