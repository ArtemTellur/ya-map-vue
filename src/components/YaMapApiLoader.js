var yaMapApi

const loadScript = (src) => {
  const script = document.createElement('script')

  script.type = 'text/javascript'
  script.src = src

  document.querySelector('head').appendChild(script)
}

export default function ({
  apiKey,
  lang = 'ru_RU'
}) {
  const scriptSrc = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=${lang}&onload=yandexMapsAPILoad`

  if (yaMapApi) {
    return Promise.resolve(yaMapApi)
  }

  return new Promise((resolve, reject) => {
    loadScript(scriptSrc)

    window.yandexMapsAPILoad = (ymaps) => {
      yaMapApi = ymaps

      resolve(yaMapApi)
    }


    setTimeout(() => {
      if (!window.ymaps) {
        reject(new Error('Loading took too long'))
      }
    }, 5000)
  })
}
