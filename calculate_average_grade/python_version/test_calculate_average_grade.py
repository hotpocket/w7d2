import unittest
from calculate_average_grade import calculate_average_grade

class TestCalculateAverageGrade(unittest.TestCase):

    def test_positive_grades(self):
        self.assertEqual(calculate_average_grade([1, 2, 3, 4, 5]), 3.0)

    def test_negative_grades(self):
        self.assertEqual(calculate_average_grade([-1, -2, -3, -4, -5]), -3.0)

    def test_empty_list(self):
        self.assertEqual(calculate_average_grade([]), 0.0)

if __name__ == '__main__':
    unittest.main()
