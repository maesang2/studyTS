// void 공허, 아무것도 없다. 아무것도 없음을 의미하는 타입.

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello")
}

//never 불가능한 타입
// function func3(): never {
    // while(true) {}
// }