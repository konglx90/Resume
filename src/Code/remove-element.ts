import { judge } from "./utils";

/**
 * 原地移除元素
 * nums = [0, 1, 2, 2, 3, 0, 4, 2]
 * val = 2
 * 
 * @returns 返回移除2之后的长度
 */
const removeElement = (nums: number[], val: number): number => {

  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    if (nums[left] === val) {
      if (nums[right] === val) {
        right--
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]]
      }
    } else {
      left++
    }
  }

  return left
}

judge(5, removeElement, [0, 1, 2, 2, 3, 0, 4, 2], 2)
judge(6, removeElement, [0, 1, 2, 2, 0, 4, 2, 9, 9], 2)
judge(4, removeElement, [0, 1, 2, 2, 3, 0, 2], 2)
judge(2, removeElement, [3, 3], 5)
judge(1, removeElement, [3], 5)
judge(0, removeElement, [3], 3)

export {
  removeElement
}