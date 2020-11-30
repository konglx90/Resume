import { judge } from "./utils";


/**
 * 十进制转换成任意进制
 */
const tenToOther = (num: number, base: number) => {
  const baseS = '0123456789abcdefghijklmnopqrstuvwxyz';
  let results: string[] = [];
  while(num) {
    const index = (num % base)
    num = Math.floor(num / base)
    results.unshift(baseS[index])
  }
  return results.join('') || '0'
}

judge('1000', tenToOther, 8, 2)
judge('1001', tenToOther, 9, 2)
judge('100', tenToOther, 9, 3)
judge('21', tenToOther, 9, 4)
judge('6fc', tenToOther, 1788, 16)
judge('0', tenToOther, 0, 16)