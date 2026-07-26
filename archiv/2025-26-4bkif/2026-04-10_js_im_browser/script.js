import persons from "./persons.json" with { type: "json" };

function renderPersons() {
    // persons in den tbody hineinrendern

    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    for (const person of persons) {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = person.id;
        tr.appendChild(tdId);
        const tdName = document.createElement("td");
        tdName.textContent = person.name;
        tr.appendChild(tdName);
        const tdAge = document.createElement("td");
        tdAge.textContent = person.alter;
        tr.appendChild(tdAge);
        const tdHeight = document.createElement("td");
        tdHeight.textContent = person.groesse;
        tr.appendChild(tdHeight);
        const tdBirthDate = document.createElement("td");
        tdBirthDate.textContent = person.geburtsdatum;
        tr.appendChild(tdBirthDate);
        const tdOrigin = document.createElement("td");
        tdOrigin.textContent = person.herkunft;
        tr.appendChild(tdOrigin);
        const tdWeight = document.createElement("td");
        tdWeight.textContent = person.gewicht;
        tr.appendChild(tdWeight);

        tbody.appendChild(tr);
    }
}

const thage = document.getElementById("thage");
thage.addEventListener("click", () => {
    console.log("thage was clicked");
    persons.sort((a, b) => {
        return a.alter - b.alter;
    });
    renderPersons();
});

// renderPersons();
window.renderPersons = renderPersons;
renderPersons();
