"use strict";
{
    const calculateAverageGrade = (student) => {
        const totalGrades = student.grades.reduce((sum, grades) => {
            return sum + grades;
        });
        const averageGrade = totalGrades / student.grades.length;
        return averageGrade;
    };
    const student1 = {
        name: "John",
        age: 21,
        grades: [92, 87, 80, 86]
    };
    const aGOfStudent1 = calculateAverageGrade(student1);
    console.log(aGOfStudent1);
}
