import pin24 from 'file-loader!../assets/mapPins/pin-24.svg'

// Создаёт iconLayout для балуна
export default function (ymaps) {
  return ymaps.templateLayoutFactory.createClass(pin24)
}
