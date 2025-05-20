let educationDetails = [
    {
        institute: "New Horizon",
        board: "SSLC",
        year: "2018",
        marks: 83.68
    },
    {
        institute: "Jain VV Puram",
        board: "PUC - PCMC",
        year: "2020",
        marks: 83.66
    },
    {
        institute: "Reva University",
        board: "BTech - ECE",
        year: "2024",
        marks: 84.46
    }
]

let educationSection = document.querySelector('.education .details')

educationDetails.forEach((eduObj) => {
    const ul = document.createElement('ul')

    for (let key in eduObj) {
        const li = document.createElement("li")
        li.textContent = eduObj[key]
        ul.appendChild(li)
    }
    
    educationSection.appendChild(ul)

});


