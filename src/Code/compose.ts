import { judge } from "./utils"

/**
 * compose
 */

const compose = (...funcs: any[]) => {
  return (...args: any[]) => {
    let result: any;
    funcs.forEach((func: any, index) => {
      if (result) {
        result = func(result)
      } else {
        result = func(...args)
      }
    })

    return result
  }
}

const square = (a: number) => a ** 2
const add = (a: number) => a * 2

const duck = compose(square, add)

judge(2, duck, 1)

export {
  compose
}