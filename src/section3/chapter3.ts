/**
 * 기본 타입간의 호환성
 */

// let num1: number = 19;
let num2: 10 = 10;

// num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string,
    color: string
}

type Dog = {
    name: string,
    color: string,
    breed: string
}

// let animal: Animal = {
//     name: "기린",
//     color: "yellow"
// }

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}

// animal = dog;

// 객체는 프로퍼티로 타입을 정의하는 구조적 타입 시스템이다
//프로퍼티가 적을 수록 super 타입 밑은 서브타입
// dog = animal;

type Book = {
    name: string,
    price: number
}

type ProgrammingBook = {
    name: string,
    price: number,
    skill: string
}

let book : Book;
let programmingBook: ProgrammingBook = {
    name: "ㅇㅇ",
    price: 3300,
    skill: "reactjs"
}

book = programmingBook;
//programmingBook = book;

/**
 *  초과 프로퍼티 검사
 *  객체 타입에 정의된 프로퍼티만 넣을 수 있게 해야함.
 *  초과 프로퍼티를 피하려면
 *  let book3: Book = programmingBook;
 *  이런 식으로 사용
 */
let book2: Book = {
    name: "ㅇㅇ",
    price: 3300,
    // skill: "reactjs"
}

let book3: Book = programmingBook;

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
//에러남
    // skill: "reactjs",
})
//이렇게 넣어줘야함
func(programmingBook)