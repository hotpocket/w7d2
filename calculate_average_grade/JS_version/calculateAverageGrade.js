/**
 * Calculates the average grade from an array of grades.
 *
 * @param {number[]} grades - An array of grades.
 * @returns {number} - The average grade.
 */
function calculateAverageGrade(grades) {
    return grades.length === 0 ?
        0 : grades.reduce((accum, curVal) => accum + curVal) / grades.length;
}


// --- jest issues ---
// https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export
// THIS DOESN'T WORK
//export default calculateAverageGrade
// BUT THIS DOES
module.exports = calculateAverageGrade
