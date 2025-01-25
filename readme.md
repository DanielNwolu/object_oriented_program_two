# School Management System

## Overview
This is a simple school management system designed to model basic functionalities such as enrolling students in subjects, assigning grades, and calculating their average score. The system demonstrates core object-oriented programming concepts such as inheritance, encapsulation, and methods in JavaScript.

## Features
- **Student Management**: Each student has basic information like ID, name, and email.
- **Subject Enrollment**: Students can enroll in multiple subjects.
- **Grade Assignment**: Grades are assigned based on subject enrollment.
- **Average Grade Calculation**: The system calculates the average score and grade for each student.

## Classes

### Person Class
- **Constructor**: Initializes a `Person` object with `id`, `firstName`, `lastName`, and `email`.
- **Methods**:
  - `generateNum()`: Generates a unique ID number for the person.
  - `getPerson()`: Logs the person's email and ID.

### Student Class (Inherits from Person)
- **Constructor**: Initializes a `Student` object with `id`, `firstName`, `lastName`, `email`, `subjects` (array), and `grades` (array).
- **Methods**:
  - `enrollSubject(subjectId)`: Adds a subject to the student's enrolled subjects list.
  - `retrieveStudent()`: Logs the student's ID, email, enrolled subjects, and grades.
  - `assignGrades(subjectId, score)`: Assigns grades to the student for a subject based on the score. If the student is not enrolled in the subject, it will notify the user.
  - `getGrade(score)`: Determines the grade based on the score (A, B, C, D, F).
  - `calculateAverageGrade()`: Calculates and logs the student's average score and the corresponding grade.

## Example Usage

```javascript
// Create a new student
const student = new Student(1, "John", "Doe", "john.doe@example.com");

// Enroll the student in subjects
student.enrollSubject("math");
student.enrollSubject("science");
student.enrollSubject("history");

// Assign grades to the student for enrolled subjects
student.assignGrades("math", 85);
student.assignGrades("science", 78);
student.assignGrades("history", 92);

// Retrieve student information
student.retrieveStudent();

// Calculate the average grade and score
student.calculateAverageGrade();
```

### Sample Output
```
Adding grade
Adding grade
Adding grade
id: 1, email: john.doe@example.com, subjects: math,science,history, grades: [{"subjectId":"math","score":85,"grade":"B"},{"subjectId":"science","score":78,"grade":"C"},{"subjectId":"history","score":92,"grade":"A"}]
the average grade is B
Average score: 85.00
```

## How to Run the Code
1. **Install Quokka on your visual studio code editor**: This will execute the code without the terminal, use the command ctrl kq to activate Quokka.
2. **Create a New JavaScript File**: Copy the code into a file, e.g., `schoolManagementSystem.js`.

or

3. **Run the Script**: Open your terminal/command prompt and run:
   ```bash
   node schoolManagementSystem.js
   ```

## Industry Best Practices
- **Code Structure**: The system is modular with classes and methods that encapsulate logic and responsibilities.
- **Error Handling**: The `assignGrades()` method checks if the student is enrolled in the subject before assigning grades.
- **Logging**: Informative logs are included to help debug and understand the flow of the system.
- **Reusability**: The classes are reusable, and additional functionality can be added without major refactoring.

## Conclusion
This school management system serves as a fundamental example of object-oriented programming using JavaScript. It demonstrates key concepts like classes, inheritance, methods, and encapsulation, making it a useful starting point for more complex systems.