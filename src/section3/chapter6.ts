/**
 * 타입 단언
 */

type Person = {
    name: string,
    age: number
}

let person = {} as Person
person.name = ""
person.age

type Dog = {
    name: string,
    color: string
}

let dog= {
    name : "돌돌",
    color: "brown",
    breed: "진도"
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 한다
 */

let num1 = 10 as never
let num2 = 10 as unknown
/**
 * 10 (A) never (B)
 * A가 B의 슈퍼타입이다.
 */

// let num3 = 10 as string
/**
 * number를 string으로 변환 할 수 없다.
 * 교집합이 없는 타입
 */

let num4 = 10 as unknown as string
//다중 단언 쓰는거 추천x

/**
 * const 단언
 */

let num5 = 10 as const;

let cat = {
    name: "야옹",
    color: "yellow"
} as const
//readonly 프로퍼티로 만들 수 있다.

/**
 * Non null 단언
 */

type Post = {
    title: string,
    author?: string
}

let post: Post = {
    title: "게시글1",
    author: "홍길동"
}

const len: number = post.author!.length

