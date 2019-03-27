'use strict';

var elementOn = function elementOn(target, eventName) {
  return new Promise(function (resolve, reject) {
    var element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) reject('Element wasn\'t found');

    var eventHandler = function eventHandler(event) {
      element.removeEventListener(eventName, eventHandler);
      resolve({
        element: element,
        event: event
      });
    };

    element.addEventListener(eventName, eventHandler);
  });
};

var elementOnLoad = function elementOnLoad(target) {
  return elementOn(target, 'load');
};

var elementOnDOMContentLoaded = function elementOnDOMContentLoaded(target) {
  return elementOn(target, 'DOMContentLoaded');
};

module.exports = elementOn;
module.exports.default = elementOn;
module.exports.elementOnLoad = elementOnLoad;
module.exports.elementOnDOMContentLoaded = elementOnDOMContentLoaded;