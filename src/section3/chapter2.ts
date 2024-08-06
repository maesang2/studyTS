/**
 * Unknown 타입
 */

function unknownExam(){
    // let a: unknown = 1;
    // let b: unknown = "hello";
    // let c: unknown = true;
    // let d: unknown = null;
    // let e: unknown = undefined;
    //
    // let unknownVar: unknown;

    //let num: number = unknonVar  다운 캐스팅은 안된다.
}

/**
 * Never 타입
 */

// function neverExam() {
//     function neverFunc(): never {
//         while (true) {}
//     }
//
//     let num: number = neverFunc();
//     let str: string = neverFunc();
//     let bool: boolean = neverFunc();
// }

/**
 * void 타입
 */
function voidExam() {
    function voidFunc(): void {
        console.log("hi")
    }
}

/**
 *  any 타입
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;

    undefinedVar = anyVar;
}