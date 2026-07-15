 const assignGrades = (students) => {
    const gradedStudents = [];
    for (let i = 0; i <= students.length - 1; i++) {
        const student = students[i];
        let grade;
        if (student.score >= 90) {
            grade = "A";
        } else if (student.score >= 80) {
            grade = "B";
        } else if (student.score >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }
        gradedStudents.push({ name: student.name, score: student.score, grade: grade });
    }
    return gradedStudents;
}

const greet = ()=>{
    console.log("hello world")
}

// export default assignGrades
export {assignGrades, greet}