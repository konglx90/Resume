import { judge } from "./utils";

const twoPointer = (a: number[], target: number): [number, number] => {
  if (a.length < 2) {
    return [NaN, NaN]
  }

  let pointer1 = 0;
  let pointer2 = a.length - 1;

  while(pointer1 < a.length - 1 && pointer2 > 0) {
    if (a[pointer1] + a[pointer2] === target) {
      return [a[pointer1], a[pointer2]]
    }

    if (a[pointer1] + a[pointer2] > target) {
      pointer2--
    } else {
      pointer1++
    }
  }
  

  return [NaN, NaN]
}

const a = [1, 2, 4, 6, 9, 10]

judge(function(output: number[]) {
  return output[0] === 1 && output[1] === 9
}, twoPointer, a, 10)

export {
  twoPointer
}
