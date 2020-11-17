import { judge } from "./utils"

/**
 * 递归法，反转字符串
 */

const reverseString = (strArr: string[]): string[] => {

  const reverse = (strArr: string[], left: number, right: number) => {
    if (left >= right) {
      return strArr
    }

    [strArr[left], strArr[right]] = [strArr[right], strArr[left]]

    reverse(strArr, left + 1, right - 1)
  }

  let left = 0;
  let right = strArr.length - 1;

  reverse(strArr, left, right)

  return strArr
}

judge(
  function(output: string[]) {
    const target = ['o','l', 'l', 'e', 'h']
    return output.every((item, index) => item === target[index])
  },
  reverseString,
  ['h', 'e', 'l', 'l', 'o']
)

export {
  reverseString
}