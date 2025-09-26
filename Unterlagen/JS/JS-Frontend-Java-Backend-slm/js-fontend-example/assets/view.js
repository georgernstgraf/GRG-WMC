export {init}
import * as service from './service.js';
import {Beer} from "./models.js";


const dataTable = document.getElementById('data-table');
const dataForm = document.getElementById('data-form');
const dataTableHeader = '<tr><th>Id</th><th>Name</th><th>Hop</th><th>Malt</th><th>Style</th><th>Action</th></tr>';
const errors = document.getElementById('errors');


function init(appTitle, formTitle, tableTitle) {
    document.getElementById('app-title').innerText = appTitle;
    document.getElementById('data-table-title').innerText = tableTitle;
    document.getElementById('data-form-title').innerText = formTitle;
    dataForm.addEventListener("submit", (event) => onFormSubmit(event));
    document.getElementById('btn-cancel').addEventListener('click', (event) => onFormCancel());
    dataTable.getElementsByTagName("thead")[0].innerHTML = dataTableHeader;
    renderTableData();
}


// -- TABLE ------------------------------------------------------------------------------------------------------------

function renderTableData() {
    service.findAll()
        .then(jsonData => {
            render(jsonData);
        }).catch(function (error) {
        handleErrors(error);
    });
}

function handleErrors(msg) {
    console.log(msg);
    errors.innerText = msg;
    errors.style.display = 'block';
}


function render(beers) {
    const tbody = document.createElement('tbody');
    dataTable.replaceChild(tbody, dataTable.tBodies[0]);
    beers.forEach(function (beer) {
        const row = tbody.insertRow();
        row.innerHTML = createTableRow(beer);
        row.insertCell().append(
            createTableActions(beer.id)
        );
    });
}

function createTableRow(beer) {
    return `<td>${beer.id}</td><td>${beer.name}</td><td>${beer.hop}</td><td>${beer.malt}</td><td>${beer.style}</td>`;
}

function createTableActions(id) {
    const div = document.createElement('div');
    div.classList.add('btn-container');
    div.append(
        createButton(() => onDelete(id), 'delete'),
        createButton(() => onEdit(id), 'edit')
    );
    return div;
}

function createButton(listener, icon) {
    const btn = document.createElement('button');
    btn.innerHTML = `<span class="material-symbols-sharp">${icon}</span>`;
    btn.classList.add('btn-icon');
    btn.addEventListener('click', listener);
    return btn;
}


// -- ACTIONS ----------------------------------------------------------------------------------------------------------

function onDelete(id) {
    console.log(`delete row with id=${id}`)
    try {
        service.deleteById(id)
            .then(res => {
                console.log('delete res=' + res);
                renderTableData();
            }).catch((error) => {
            handleErrors(error);
        })
    } catch (error) {
        handleErrors(error);
    }
}

function onFormSubmit(event) {
    try {
        event.preventDefault();
        service.save(new Beer(Object.fromEntries(new FormData(dataForm))))
            .then(res => {
                onFormCancel();
                renderTableData();
            }).catch(error => {
            handleErrors(error);
        });
    } catch (error) {
        handleErrors(error);
    }
}

function onFormCancel() {
    dataForm.querySelector('#input-id').value = '';
    dataForm.reset();
}

function onEdit(id) {
    service.findById(id)
        .then(beer => {
            console.log('fill form ' + beer);
            for (const key in beer) {
                if (dataForm.elements[key]) {
                    dataForm.elements[key].value = beer[key];
                }
            }
        }).catch(error => {
        handleErrors(error);
    });
}