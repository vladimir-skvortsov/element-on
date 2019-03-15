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


module.exports = elementOn
module.exports.default = elementOn