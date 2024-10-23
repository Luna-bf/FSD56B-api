//Je suis restée bloquée sur la liste des départements correspondant à la région

const url = 'https://geo.api.gouv.fr';


fetch(`${url}/regions`).then(response => response.json()).then(response => {
    
    //Je sélectionne un élément html qui va accueillir les données en format html
    document.querySelector('#select-region').innerHTML = response.map(region => {
        
    //Et j'indique de quelle façon l'élément doit être affiché
    return `<option>${region.nom}</option>`;
        
    }).join('');
});


fetch(`${url}/regions/[codeRegion]/departements`).then(response => response.json()).then(response => {

    document.querySelector('#select-departement').innerHTML = response.map(regions{code}departements => {

    return `<option>${departements.fields}</option>`;

    }).join('');
});


//récupérer la LISTE DES COMMUNES DU DEPARTEMENT SELECTIONNE et les afficher dans la page web

document.querySelector('#fetch-data').addEventListener('click', () => {
    
fetch(`${url}/departements/[codeDepartement]/communes`).then(response => response.json()).then(response => {
    
        document.querySelector('#display-data').innerHTML = response.map(geojson => {
    
        return `<li>${geojson.code}</li>`;
    
        }).join('');
    });
});
