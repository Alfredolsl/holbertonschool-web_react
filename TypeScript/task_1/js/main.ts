interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
    fullTimeEmployee: false,
	contract: false,
  };
console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);


function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
console.log(printTeacher("John", "Doe"));


interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClass;
  }

class StudentClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
      }
}

const student1 = new StudentClass("Molly", "Dog");
console.log(student1.displayName()); // Output: Molly
console.log(student1.workOnHomework()); // Output: Currently working