//객체 리터럴타입
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
};

user.id;

let dog: {
    name: string,
    color: string
} = {
    name: "돌돌이",
    color: "brown",
}

let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
}
// readonly 프로퍼티  값을 수정할 수 없다.
// config.apiKey = "hacked";