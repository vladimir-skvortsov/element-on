type Selector = string | Element
type Result = {
  element: Element
  event: Event
}


declare function elementOn(selector: Selector, eventName: string): Promise<Result>


declare namespace elementOn {
  export function elementOnLoad(selector: Selector): Promise<Result>
  export function elementOnDOMContentLoaded(selector: Selector): Promise<Result>
}


export = elementOn