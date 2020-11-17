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
const target = 12

console.log(twoPointer(a, target))

console.log(twoPointer(a, 10))
console.log(twoPointer(a, 11))

export {
  twoPointer
}
