/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(arr => {
    if (arr.marks > 50) {
      console.log(arr.name + ' ' + arr.marks);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if (arr.marks > 50) {
      console.log(arr.name + ' ' + arr.marks);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newData = {
    id: 4,
    name: "ross",
    age: 20,
    marks: 55
  };
  arr.push(newData);
  console.log(newData);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    {id: 4, name: "Garry", age: 21, marks: 750},
    {id: 5, name: "Lovelina", age: 22, marks: 60},
    {id: 6, name: "Steve", age: 20, marks: 40}
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
