//This is a simple school management system that allows students to enroll in subjects and receive grades.
//  The system calculates the average grade and score for each student.

// Define the Person class as an abstract class
class Person {
    constructor(id, firstName, lastName, email) {
        this.id = this.generateNum();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        // this prevents the class from being instantiated directly
        if (this.constructor === Person){
            throw new error ("Cannot instantiate an abstract class");
        }
    }

    generateNum() {
        return Math.floor(100 + Math.random() * 900); // Generates a unique identifier
    }

    getPerson() {
        console.log(`User with email: ${this.email} and id: ${this.id} retrieved successfully`);
    }
}

class Student extends Person {
    constructor(id, firstName, lastName, email, subjects, grade) {
        super(id, firstName, lastName, email);
        this.subjects = [];
        this.grade = [];
    }

    enrollSubject(subjectId) {
        this.subjects.push(subjectId);
    }

    retrieveStudent() {
        console.log(`id: ${this.id}, email: ${this.email}, subjects: ${this.subjects}, grades: ${JSON.stringify(this.grade)}`);
    }

    assignGrades(subjectId, score) {
        let isEnrolled = false;

        for (let subject of this.subjects) {
            if (subject === subjectId) {
                isEnrolled = true;
                console.log(`Adding grade`);
                const subjectGrade = {
                    subjectId: subjectId,
                    score: score,
                    grade: this.getGrade(score),
                };
                this.grade.push(subjectGrade);
                break;
            }
        }

        if (!isEnrolled) {
            console.log("Subject not enrolled for student");
        }
    }

    // Helper method to determine grade based on score
    getGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    // Function to calculate the average grade
    calculateAverageGrade() {
        if (this.grade.length === 0) {
            console.log("No grades available for this student.");
            return 0;
        }

        const totalScore = this.grade.reduce((sum, subjectGrade) => sum + subjectGrade.score, 0);
        const average = totalScore / this.grade.length;
        console.log(`the avarage grade is ${this.getGrade(average)}`)
        console.log(`Average score: ${average.toFixed(2)}`);
        return average;
    }
}

// Example Usage
const student = new Student(1, "John", "Doe", "john.doe@example.com");

// Enroll the student in some subjects
student.enrollSubject("math");
student.enrollSubject("science");
student.enrollSubject("history");

// Assign grades to the student
student.assignGrades("math", 85);
student.assignGrades("science", 78);
student.assignGrades("history", 92);

// Retrieve student information
student.retrieveStudent();

// Calculate and display the average grade and score
student.calculateAverageGrade();
