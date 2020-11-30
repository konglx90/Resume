import { judge } from "./utils"

const setVersion = (list: string[]) => {

  function sortRule(a: string, b: string) {

    function removeStartZero(arr: string[]) {

      let isEnd = false
      return arr.filter((i) => {
        if (i === '0' && !isEnd) {
          return false
        }

        isEnd = true

        return true
      })

    }

    const aArr = removeStartZero(a.split('.'))
    const bArr = removeStartZero(b.split('.'))

    if (aArr.length > bArr.length) {
      return 1
    } else if (aArr.length < bArr.length) {
      return -1
    }

    aArr.forEach((element, index) => {
      if (Number(element) > Number(bArr[index])) {
        return 1
      } else {
        return -1
      }
    });

    return 0
  }
  
  list.sort(sortRule)

  return list
}

judge(function(result: string[]) {
  const right = ["0.18.1", "1.0.0", "2.12.1", "1.2.3.4.5.6.7"]
  return result.every((item, index) => right[index] === item)
}, setVersion, ['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1'])

export {
  setVersion
}