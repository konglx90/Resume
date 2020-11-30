// 对埋点上报逻辑进行封装：
// 已知埋点上报到服务端时你会调用如下的 API：
// function reportLog(logs: string[]): promise {
//   // 上报埋点数组到服务端
// }
// 需求是实现一个 wrapLog 方法，作用是生成一个函数，调用 n 次该函数后批量将这 n 条日志发送到服务端（无需考虑异常情况）：
// function wrapLog(n: number): function {
//   // 代码逻辑
//   return function () {
//     // 代码逻辑
//     // reportLog(list);
//   }
// }
// 调用代码：
// const log = wrapLog(5);
// log('1').then(() => { console.log('log 1 success'); });
// log('2').then(() => { console.log('log 2 success'); });
// log('3').then(() => { console.log('log 3 success'); });
// log('4').then(() => { console.log('log 4 success'); });
// log('5').then(() => { console.log('log 5 success'); });
// 此时将 ['1', '2', '3', '4', '5'] 上报到服务端

// 扩展一：增加一个参数，支持 m 秒内没有打埋点日志时，自动上报一次
// 扩展二：考虑页面关闭再打开时，继续上次暂存的日志进行上报
// 扩展三：log 返回 promise 实例，在服务端处理成功后执行 then 方法

const getMessage = (): string[] => {
  const result = localStorage.getItem('logMessages')
  // 不考虑数组的数据结构
  return result === null || result === '' ? [] : result.split(',')
}
const setMessage = (messages: string[]) => {
  localStorage.setItem('logMessages', messages.toString())
}

const wrapLog = (n: number, m: number = -1) => {
  let resolves: any[] = [];
  let timer: any = null;
  
  const setBackLogTimer = (m: number) => {

    if (timer) {
      clearTimeout(timer)
    }

    if (m <= 0) {
      return
    }

    return setTimeout(() => {
      if (getMessage().length > 0) {
        const messages = getMessage()
        setMessage([])
        resquest(messages)
      }
    }, m * 1000)
  }

  const resquest = (messages: string[]) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`request ${messages.toString()}`)
        resolve('ok')

        resolves.forEach(resolve => resolve())
        resolves = []

      }, 2000)
    })
  }

  return (message: string) => {
    return new Promise((resolve) => {
      setMessage(getMessage().concat(message))

      // 至少有一条消息的时候设置
      if (getMessage().length === 1) {
        setBackLogTimer(m)
      }

      resolves.push(resolve)

      if (getMessage().length === n) {
        const messages = getMessage()
        setMessage([])
        resquest(messages)
      }
    })
  }
}

const log = wrapLog(5);
log('1').then(() => { console.log('log 1 success'); });
log('2').then(() => { console.log('log 2 success'); });
log('3').then(() => { console.log('log 3 success'); });
log('4').then(() => { console.log('log 4 success'); });

// @ts-ignore
window.log = log;
// @ts-ignore
window.wrapLog = wrapLog;

// log('5').then(() => { console.log('log 5 success'); });

// log('3').then(() => { console.log('log 3 success'); });
// log('4').then(() => { console.log('log 4 success'); });
// log('5').then(() => { console.log('log 5 success'); });
// log('4').then(() => { console.log('log 4 success'); });
// log('5').then(() => { console.log('log 5 success'); });

export {
  wrapLog
}