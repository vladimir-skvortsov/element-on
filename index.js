'use strict'


const elementOn = (selector, eventName) =>
  new Promise((resolve, reject) => {
    const element =
      typeof selector === 'string' ? document.querySelector(selector) : selector

    if (!element) reject('Element wasn\'t found')

    const eventHandler = event => {
      element.removeEventListener(eventName, eventHandler)
      resolve({ element, event })
    }

    element.addEventListener(eventName, eventHandler)
  })

const elementOnLoad = selector => elementOn(selector, 'load')
const elementOnDOMContentLoaded = selector => elementOn(selector, 'DOMContentLoaded')


module.exports = elementOn
module.exports.default = elementOn
module.exports.elementOnLoad = elementOnLoad
module.exports.elementOnDOMContentLoaded = elementOnDOMContentLoaded