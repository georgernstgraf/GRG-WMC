import persons from "./persons.json" with { type: "json" };
console.log(persons);

// "id": 6,
// "name": "Sophie Dubois",
// "groesse": 168,
// "geburtsdatum": "1994-03-10",
// "herkunft": "Frankreich",
// "gewicht": 59.5 -->

function renderPersons() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
    for (const person of persons) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.groesse}</td>
            <td>${person.geburtsdatum}</td>
            <td>${person.herkunft}</td>
            <td>${person.gewicht}</td>
        `;
        tbody.appendChild(tr);
    }
}

const thHeight = document.querySelector("#height");
thHeight.addEventListener("click", () => {
    console.log("height clicked!!");
    persons.sort((a, b) => a.groesse - b.groesse);
    renderPersons();
});
window.renderPersons = renderPersons;

renderPersons();
