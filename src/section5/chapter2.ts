/**
 * 선언 합침
 */

interface Person {
    name: string
}

interface Person  {
    // name: number
    age: number
}

interface Developer extends  Person {
    name: "hello"
}

const person: Person = {
    name:"",
    age: 0
}

/**
 * 모듈 보강
 */

interface Lib {
    a: number,
    b: number
}
// 모듈 보강
interface Lib {
    c: number
}

const lib = {
    a: 1,
    b: 2,
    c: 3
}