import fs from 'node:fs'

let userName: string

userName = 'Max'

console.log(userName)

function add(a: number, b: number): number {
  return a + b
}

const result = add(1, 2)

console.log(result)
