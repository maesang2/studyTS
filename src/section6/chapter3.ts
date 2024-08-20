/**
 * 접근 제어자
 */
class Employee {
    // 필드

    // 생성자
    constructor(
        private name: string,
        protected age: number,
        public position: string
    ) {}

    // 메서드
    work() {
        console.log("일함")
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string,
                age: number,
                position: string,
                officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee("이정환", 27, "개발자");
