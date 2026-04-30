export {findAll, findById, deleteById, save, update, create}
import {Beer} from './models.js';

const API = "http://localhost:8080/api/v1/beers";


async function findAll() {
    console.log('find all');
    return await fetch(API)
        .then(result => result.json())
        .then(jsonData => {
            return jsonData.map(function (item) {
                return new Beer(item);
            })
        });
}

async function findById(id) {
    console.log('find by id=' + id);
    return await fetch(`${API}/${id}`)
                .then(result => result.json())
                .then(json => new Beer(json));
    // let json = await fetch(API + '/' + id)
    //     .then((r) => r.json())
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // console.log(json);
    // return new Beer(json);
}


async function save(beer) {
    console.log("save beer= " + JSON.stringify( beer ));
    if (beer && beer.id) {
        return update( beer.id, beer );
    } else {
        return create(beer);
    }
}

async function create(beer) {
    console.log('create beer=' + JSON.stringify( beer ));
    return await fetch(API, {
        method: 'POST',
        body: JSON.stringify(beer),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
}

async function update(id, beer) {
    console.log('update id=' + id + ' beer=' + JSON.stringify( beer ));
    return await fetch(API + '/' + id, {
        method: 'PUT',
        body: JSON.stringify( beer ),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
}


async function deleteById(id) {
    console.log('delete id=' + id);
    return await fetch(API + '/' + id, {method: 'DELETE'});
}