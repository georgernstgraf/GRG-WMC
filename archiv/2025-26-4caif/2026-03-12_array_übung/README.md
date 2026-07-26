# Practice: Arrow Functions with filter, map, reduce

## The Dataset

Give students this array to start with:

```js
const students = [
  { name: "Anna", age: 17, grade: 2 },
  { name: "Ben", age: 16, grade: 4 },
  { name: "Clara", age: 18, grade: 1 },
  { name: "David", age: 17, grade: 5 },
  { name: "Elena", age: 16, grade: 3 },
  { name: "Felix", age: 19, grade: 2 },
  { name: "Gina", age: 17, grade: 1 },
  { name: "Hugo", age: 18, grade: 4 },
];
```

## Tasks (progressive difficulty)

**Task 1 – filter:** Find all students who passed (grade ≤ 4). Store the result in `passed`.

**Task 2 – map:** Create an array of strings in the format `"Anna (17)"` from the original array. Store it in `labels`.

**Task 3 – filter + map:** From only the passed students, extract just their names into an array `passedNames`.

**Task 4 – reduce:** Calculate the average grade of all students. Store it in `averageGrade`.

**Task 5 – chaining (bonus):** In a single chain, find the names of all students aged 17 or older who passed, joined into one comma-separated string.
