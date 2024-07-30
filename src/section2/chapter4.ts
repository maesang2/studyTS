// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: "아무개",
    nickname : "winterlood",
    birth : "1997.01.07",
    bio : "안녕하세요",
    location : "부천시",
}

let user2: User = {
    id: 1,
    name: "아무개",
    nickname : "winterlood",
    birth : "1997.01.07",
    bio : "안녕하세요",
    location : "부천시",
}

// 인덱스 시그니처
// 키와 밸류의 규칙을 기준으로 객체의type을 정의할 수 있는 문법
type CountryCodes = {
    [key : string]: string;
}

let countryCodes: CountryCodes = {
    Korea : "ko",
    UnitedState : "us",
    UnitedKingdom: "uk"
}

type CountryNumberCodes = {
    [key: string]: number,
    // Korea: string;  //추가하려는 프로퍼티의 value타입이 인덱스 시그니처의 value타입과 일치하거나 호환되어야 한다.
}
//아무런 프로퍼티가 없어서 규칙을 위반할 프로퍼티도 없다.
let countryNumberCodes: CountryNumberCodes = {};