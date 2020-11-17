const judge = (assert: any, alg: (...args: any[]) => any, ...args: any[]) => {
  const output = alg(...args)
  let result = false

  if (typeof assert === 'function') {
    result = assert(output)
  } else {
    result = assert === output
  }

  console.log(`
judge>>>>>>>>>>>>
input: ${args.join('\n       ')}
output: ${output}
result: ${result ? '✅' : '❌'}
end=============
  `)
  return ''
}

export {
  judge
}