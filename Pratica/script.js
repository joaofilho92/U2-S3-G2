const nameInput = document.getElementById('name');
const showSavedName = document.querySelector('p');
const saveButton = document.querySelector('#save');



const saveName = () => {
    const name = nameInput.value;
    localStorage.setItem('name', name);
};

document.getElementById('save').addEventListener('click', saveName);


const cancellaNome = () => {
    localStorage.removeItem('name');
    nameInput.value = '';
    showSavedName.textContent = '';
};

document.getElementById('remove').addEventListener('click', cancellaNome);


//Funzione che recupera il valore inserito nel campo "nome" e lo memorizza in una costante.
//Viene applicata una condizione per verificare se il valore esiste e, in caso affermativo, viene aggiunto al tag <p></p> sopra il campo "name".

const SAVED_NAME = () => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        nameInput.value = savedName;
        showSavedName.textContent = savedName;
    }
};

SAVED_NAME();


//Quando si fa clic sul pulsante "salva", il valore precedentemente inserito nella memoria locale viene scritto nel tag <p></p>.

saveButton.addEventListener('click', () => {
    showSavedName.textContent = nameInput.value;

});

