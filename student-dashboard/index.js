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
                <td></td>   
            `;

            // <td class="actions-column">
            //         <button class="action-btn edit-btn" onclick="editStudent(${student.id})" title="Edit Record">
            //             <i class="fas fa-edit"></i>
            //         </button>
            //         <button class="action-btn delete-btn" onclick="deleteStudent(${student.id})" title="Delete Record">
            //             <i class="fas fa-trash"></i>
            //         </button>
            //     </td>
            const editBtn = document.createElement("button");
            editBtn.className = "action-btn edit-btn";
            // editBtn.textContent = "Edit";
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            editBtn.addEventListener("click", () => editStudent(student.id));

            const deleteBtn = document.createElement("button");
            // deleteBtn.textContent = "Delete";
            deleteBtn.className = "action-btn delete-btn";
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.addEventListener("click", () => deleteStudent(student.id));

                  row.lastElementChild.appendChild(editBtn);
      row.lastElementChild.appendChild(deleteBtn);
      
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

    const request = editId ?
    axios.put(`${baseUrl}/${editId}`, student):
    axios.post(baseUrl, student);


    request.then((response) => {
        editId = null;
        form.reset();
        document.querySelector("button[type='submit']").textContent = "Add Student";
        document.querySelector(".form-heading").textContent = "Add New Student";
        console.log(response);
        loadStudents();
        
        // window.location.reload();
    })
    

}

function editStudent(id) {
    axios.get(`${baseUrl}/${id}`).then(res => {
        const student = res.data;
        document.getElementById("lName").value = student.fName;
        document.getElementById("fName").value = student.lName;
        document.getElementById("srn").value = student.srn;
        document.getElementById("email").value = student.email;
        document.getElementById("department").value = student.department;
        document.getElementById("math").value = student.marks.math;
        document.getElementById("chem").value = student.marks.chem;
        document.getElementById("kannada").value = student.marks.kannada;
        document.getElementById("iot").value = student.marks.iot;
        document.getElementById("electronics").value = student.marks.electronics;
        document.getElementById("mechanical").value = student.marks.mechanical;

        document.querySelector("button[type='submit']").textContent = "Update";
        document.querySelector(".form-heading").textContent = "Update Student Details";
        editId = id;
        
        document.querySelector(".form-container").scrollIntoView({ behavior: "smooth" });
    });
}

function deleteStudent(id) {
  axios.delete(`${baseUrl}/${id}`).then(() => loadStudents());
}