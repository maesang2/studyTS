/**
 * 인터페이스의 확장
 */

interface Animal {
    name: string,
    age: number
}

interface Dog extends Animal {
    // name: "hello" 다시 정의 가능
    // 다시 정의한 타입이 부모 타입의 서브 타입이어야 한다.
    isBark: boolean
}

const dog: Dog = {
    name: "",
    age: 0,
    isBark: true
}

interface Cat extends Animal{
    isScratch: boolean
}

interface Chicken extends Animal{
    isFly: boolean
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "",
    age: 0,
    isBark: true,
    isScratch: true
}