//배열
let numArr: number[] = [1,2,3];

let strArr: string[] = ["hello", "im", "winterload"];

let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][]= [
    [1,2,3],
    [4,5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1,2];
// tup1 = [1,2,3];
// tup1 = ["1","2"];

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["2",1,true];

//배열 메서드를 사용할 경우 튜플의 길이 제한이 발동하지 않는다.
//자바스크립트의 배열이라 생각하기 때문
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
//오류를 보여주지 않는다.
//튜플을 사용할 수 있는 상황
const users: [string,number][] = [
    ["김아무개", 1],
    ["이아무개", 2],
    ["임아무개", 3],
    ["박아무개", 4],
    // [5,"최아무개"]
]