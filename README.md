# element-on

Detect when element got some event


## Install

```
$ npm install element-on
```

or if you use yarn

```
$ yarn add element-on
```


## Usage

```js
const elementOn = require('element-on')


(async () => {
	const { element, event } = await elementOn('#pandaDescription', 'DOMContentLoaded')

	console.log(element.textContent)
  // => Giant pandas have a distinctive black and white coat, ...

  console.log(event.type)
  // => DOMContentLoaded
})()
```


## API

### elementOn(selector, eventName)

Returns a promise for a matching element with targeted event.

### elementOn.elementOnLoad(selector)

Wrapper function of elementOn that pass "load" event as "eventName".

### elementOn.elementOnDOMContentLoaded(selector)

Wrapper function of elementOn that pass "DOMContentLoaded" event as "eventName".

#### selector

Type: `string` | `Element` | `Window`

[CSS selector.](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)

#### eventName

Type: `string`

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

#### element

Type: `Element`

The element that's expected to contain a match.

#### event

Type: `Event`

The event that was got.



## License

MIT © [Vladimir Skvortsov](https://vladimirskvortsov.com)