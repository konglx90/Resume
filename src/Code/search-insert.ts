import { judge } from "./utils"

/**
 * 35. 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 */

const searchInsert = (nums: number[], target: number) => {

  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2)

  if (right === -1) {
    return 0
  }

  while(left < right) {
    if (nums[mid] === target) {
      return mid
    } else if(nums[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }

    mid = Math.floor((left + right) / 2)
  }

  if (nums[left] >= target) {
    return left
  } else {
    return left + 1
  }
}

judge(2, searchInsert, [1,3,5,6], 5)
judge(1, searchInsert, [1], 5)
judge(0, searchInsert, [], 5)
judge(0, searchInsert, [1, 3, 4, 5], 0)
judge(0, searchInsert, [1], 1)


export {
  searchInsert
}