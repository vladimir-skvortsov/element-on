type Target = string | EventTarget
type Result = {
  element: Element
  event: Event
}


declare function elementOn(target: Target, eventName: string): Promise<Result>


declare namespace elementOn {
  export function elementOnLoad(target: Target): Promise<Result>
  export function elementOnDOMContentLoaded(target: Target): Promise<Result>
}


export = elementOn