/**
 * 타입 추론
 */

let a = 10;
let b = "hello"
let c = {
    id: 1,
    name: "ㅇㅇ",
    profile: {
        nickname: "witer"
    },
    urls: "https://"
}

let { id, name, profile } = c;

function func(message = "hello") {
    return "hello";
}

// 암묵적 any 타입23
// 진화가 된다. number넣으면 number, 다음에 string 넣으면 string으로 진화한다.
let d;
d = 10;
d.toFixed();
// d.toUpperCase()

d = "hello";
// d.toUpperCase()

const num = 10;
const str = "hello";

let arr = [1, "string"];