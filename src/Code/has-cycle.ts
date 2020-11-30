import { judge } from "./utils"

/**
 * 单项链表是否存在环
 */

interface Node {
  next?: Node
  data?: any
}

const hasCycle = (head: Node) => {

  let temp: Node | undefined = head
  const map = new Map()
  while(temp) {
    if (map.has(temp)) {
      return true
    }
    map.set(temp, true)
    temp = temp.next
  }

  return false
}

let node1: Node = {}
let node2: Node = {}
let node3: Node = {}
node1.next = node2
node2.next = node3
node3.next = node1

let node4: Node = {}
node4.next = {}

judge(true, hasCycle, node1)
judge(false, hasCycle, node4)