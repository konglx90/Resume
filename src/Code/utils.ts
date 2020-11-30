// todo array judge
const judge = (assert: any, alg: (...args: any[]) => any, ...args: any[]) => {
  const input = args.join('\n       ')
  const output = alg(...args)
  let result = false

  if (typeof assert === 'function') {
    result = assert(output)
  } else {
    result = assert === output
  }

  console.log(`
judge>>>>>>>>>>>>
input: ${input}
output: ${output}
result: ${result ? '✅' : '❌'}
end=============
  `)
  return ''
}

export {
  judge
}