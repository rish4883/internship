const baseUrl = "http://localhost:3001/students"

const form = document.getElementById("student-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    // e.preventDefault();

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
        window.location.reload();
    })
    

}