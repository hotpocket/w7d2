function calculateAverageGrade(grades) {
    return grades.length === 0 ?
        0 : grades.reduce((accum, curVal) => accum + curVal) / grades.length;
}
