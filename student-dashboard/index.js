const baseUrl = "http://localhost:3001/students"

const form = document.getElementById("student-form");
let editId = null;

form.addEventListener("submit", handleSubmit);
loadStudents();
function loadStudents() {
    axios.get(baseUrl).then(response => {
        const students = response.data;
        const tbody = document.querySelector(".student-table tbody");
        tbody.innerHTML = "";
        
        students.forEach((student) => {
            const row = document.createElement("tr");
            const {marks} = student;
            let total =  +marks.math+ +marks.chem+ +marks.kannada+ +marks.iot+ +marks.electronics+ +marks.mechanical;
            console.log(marks);
            
            let percentage = total / 6;
            let sgpa = Math.round(percentage) / 10;
            row.innerHTML = `
                <td>${student.srn}</td>
                <td>${student.fName} ${student.lName}</td>
                <td>${student.department.toUpperCase()}</td>
                <td>${marks.math}</td>
                <td>${marks.chem}</td>
                <td>${marks.kannada}</td>
                <td>${marks.iot}</td>
                <td>${marks.electronics}</td>
                <td>${marks.mechanical}</td>
                <td>${Math.round(percentage*10)/10}</td>
                <td>${sgpa}</td>
            `;
            tbody.appendChild(row);

        })
    })
}

function handleSubmit(e) {
    e.preventDefault();

    const student = {
        fName: document.getElementById("fName").value,
        lName: document.getElementById("lName").value,
        srn: document.getElementById("srn").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        marks: {
            math: document.getElementById("math").value,
            chem: document.getElementById("chem").value,
            kannada: document.getElementById("kannada").value,
            iot: document.getElementById("iot").value,
            electronics: document.getElementById("electronics").value,
            mechanical: document.getElementById("mechanical").value,
        }
    };

    axios.post(baseUrl, student).then((response) => {
        console.log(response);
        loadStudents();
        
        // window.location.reload();
    })
    

}