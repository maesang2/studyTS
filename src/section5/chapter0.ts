/**
 * 인터페이스
 */

interface Person {
    readonly name: string,
    age?: number,
    sayHi(): void
}

const person: Person = {
    name: "ddd",
    // age: 25
    sayHi: function () {
        console.log("HI")
    }
}

// person.name = "rere"
person.sayHi()
// person.sayHi(1,2)