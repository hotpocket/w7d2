// --- jest issues ---
// https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export
// THIS DOESN'T WORK
// import calculateAverageGrade from './calculateAverageGrade';
// BUT THIS DOES
const calculateAverageGrade = require('./calculateAverageGrade').default;

describe('calculateAverageGrade', function() {

    it('should calculate average grade for positive grades', function() {
        let someGrades = [1,2,3,4,5];
        let result = calculateAverageGrade(someGrades);
        let expected = 3;
        expect(result).toBe(expected);
    });

    it('should calculate average grade for negative grades', function() {
        let someGrades = [-1,-2,-3,-4,-5];
        let result = calculateAverageGrade(someGrades);
        let expected = -3;
        expect(result).toBe(expected);
    });

    it('should return 0 for empty list of grades', function() {
        let someGrades = [];
        let result = calculateAverageGrade(someGrades);
        let expected = 0;
        expect(result).toBe(expected);
    });

});
