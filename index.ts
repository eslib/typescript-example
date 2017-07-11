import '@eslib/lodash'

let a = [1, 2, 3, 4]
let b = [3, 4, 5, 6]

let c = a.difference(b)
  .chunk()
  .map(([a, b]) => a + b)
  .last()

console.log(c)
