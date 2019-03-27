'use strict'


const elementOn = (target, eventName) =>
  new Promise((resolve, reject) => {
    const element =
      typeof target === 'string' ? document.querySelector(target) : target

    if (!element) reject('Element wasn\'t found')

    const eventHandler = event => {
      element.removeEventListener(eventName, eventHandler)
      resolve({ element, event })
    }

    element.addEventListener(eventName, eventHandler)
  })

const elementOnLoad = target => elementOn(target, 'load')
const elementOnDOMContentLoaded = target => elementOn(target, 'DOMContentLoaded')


module.exports = elementOn
module.exports.default = elementOn
module.exports.elementOnLoad = elementOnLoad
module.exports.elementOnDOMContentLoaded = elementOnDOMContentLoaded