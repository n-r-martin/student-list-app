/** 
 * Event listener for Submit button
 * Get item/set item to store info to local storage
 * Define variable for empty array
 * Update display - console log
*/
const submitButton = document.querySelector("#submit");
const randomizeButton = document.querySelector("#random");
const studentName = document.querySelector("#student-name");
const studentList = document.querySelector("#student-list");
let students = [];

function storeName () {
    // console.log("storeName", studentName.value.trim());
    localStorage.setItem("students", JSON.stringify(students));
}

function readForm (event) {
    event.preventDefault ();
    // console.log("storeName", studentName.value.trim());
    const name = studentName.value;
    if (name) {
        students.push(name);
        storeName();
        renderList();
    }
    else {
        alert("Must include name, dummie.")
    }

}

function randomize() {
    const tempArr = [...students];
    const randomArr = [];
    while (tempArr.length > 0) {
        const index = Math.floor(Math.random() * tempArr.length);
        randomArr.push(tempArr[index]);
        tempArr.splice(index, 1);
    }
    console.log("random", randomArr);
}

function getStudents() {
   const tempStudents = JSON.parse(localStorage.getItem("students"));
   if (tempStudents) {
       students = [...tempStudents];

   }
}

function init() {
    getStudents();
    renderList();
}

function renderList() {
    studentList.textContent = "";
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        //Create List Item with the student name
        const li1 = document.createElement('li');
        li1.textContent = student
        //Append the list item to the student-list ul
        studentList.appendChild(li1);
    }
}


// Get item/set item to store info to local storage
// Get items from local storage - push to empty array

submitButton.addEventListener("click", readForm);
randomizeButton.addEventListener("click", randomize);

init();