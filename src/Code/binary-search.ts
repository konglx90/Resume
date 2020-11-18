import { judge } from "./utils"

/**
 * leetcode: 704
 * 二分查找
 * 
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 */

const binarySearch = (nums: number[], target: number) => {

  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2)

  while(left <= right) {
    if (nums[mid] === target) {
      return mid
    } else if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }

    mid = Math.floor((left + right) / 2)
  }

  return -1
}

judge(4, binarySearch, [-1,0,3,5,9,12], 9)
judge(-1, binarySearch, [0], 9)
judge(-1, binarySearch, [], 9)
judge(1, binarySearch, [0, 2, 9], 2)
judge(1, binarySearch, [0, 2, 9, 10], 2)

export {
  binarySearch
}
