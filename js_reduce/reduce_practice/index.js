let modal = document.getElementById("model");
let buttonAdd = document.getElementById("add");
let subject_std = document.getElementById("subject");
let mark_std = document.getElementById("marks");
let submitBtn = document.getElementById("form-submit");
let addMarks = document.getElementById("add_btn")
let Name = document.getElementById("studentName");
let studentId = document.getElementById("studentId")
let display_sub = document.getElementById("display_sub");
let display = document.getElementById("display_student");

let student = [
    {
        studentName: "Wandera Rogers",
        studentId: 123,
        studentResults: [
            {subject: "Programing", marks: 80, grade: ""},
            {subject: "Information", marks: 83, grade: ""},
            {subject: "Software", marks: 50, grade: ""},
            {subject: "Database", marks: 70, grade: ""}
        ]
    },
    {
        studentName: "Mbajje William",
        studentId: 1234,
        studentResults: [
            {subject: "Programing", marks: 50, grade: ""},
            {subject: "Information", marks: 40, grade: ""},
            {subject: "Software", marks: 70, grade: ""},
            {subject: "Database", marks: 67, grade: ""}
        ]
    }
]


let initial_grade = {
    excellent: "A",
    veryGood: "B",
    Good: "C",
    pass: "D",
    fail: "Retake"
}


function ShowStdAddFrm() {
    buttonAdd.addEventListener("click", () => {
        if(modal.style.display = "none") {
            modal.style.display = "block"
            buttonAdd.style.display = "none"
        }
    })
}
ShowStdAddFrm()

function submitForm() {
    let id = new Date().getTime().toString()
    let object = {}
    let Marks = [];
    let div = document.createElement("div");

    addMarks.addEventListener("click", () => {
        if(mark_std.value && subject_std.value) {
            Marks.push({marks: mark_std.value, subject: subject_std.value})
            mark_std.value =""
            subject_std.value = ""
            // localStorage.setItem("mark_std", JSON.stringify(Marks))
        }

        div.innerHTML = Marks.map((m) => {
            return (
                `<ul class="list">
                    <li>${m.marks}</li>
                    <li>${m.subject}</li>
                </ul>`
            )
        }).join("")
    })
    
    submitBtn.addEventListener("click",() => {
        if(Name.value && Marks.length>0) {
            object = { studentName: Name.value, studentId: id, studentResults: Marks}
            Name.value = ""
            modal.style.display = "none"
            buttonAdd.style.display = "block" 
            student.push(object) 
            localStorage.setItem("student",JSON.stringify(student))
        } else {
            alert("not added")
        }
    })

    display_sub.appendChild(div)
}
submitForm()
// console.log(JSON.parse(localStorage.getItem("student")))

document.addEventListener("DOMContentLoaded", function() {
    let getStudent = JSON.parse(localStorage.getItem("student"))
    let another = document.createElement("div")
    another.innerHTML = getStudent.map((std) => {
        let subject = std.studentResults.map((res) => {
            let grade = res.grade;
            if(res.marks <=49) {
                grade = initial_grade.fail
            } else if(res.marks <=55) {
                grade = initial_grade.pass
            }
            else if(res.marks <= 65) {
                grade = initial_grade.Good
            }
            else if(res.marks <= 75) {
                grade = initial_grade.veryGood
            } else {
                grade = initial_grade.excellent
            }
            return(
                `<div>
                    <table style="border:1px solid black;" border="1">
                        <tr>
                            <th>Subject</th>
                            <th>Marks</th>
                            <th>Grade</th>
                        </tr>
                        <tr>
                            <td>${res.subject}</td>
                            <td>${res.marks}</td>
                            <td>${grade}</td>
                        </tr>
                    </table>
                </div>`
            )
        }).join("")
        return (
            `<div>
                <p>Student Name: ${std.studentName}</p>
                <p>Student id: ${std.studentId}</p>
                ${subject}
            </div>`
        )
    }).join("")
    // localStorage.setItem("student",JSON.stringify(student));

    display.appendChild(another)
})