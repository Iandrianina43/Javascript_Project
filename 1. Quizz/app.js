
const tableau = document.querySelector('.form');
const valinyhtml = document.querySelector('.question .resultat');
let contenu = [];
const valiny = ['a', 'a', 'a', 'a', 'a']; 
let note = [];
const toutesLesQuestions = document.querySelectorAll('.question');

tableau.addEventListener('submit', (e) => {
    e.preventDefault();
    for (let i = 1; i < 6; i++) {
        const radioInput = document.querySelector(`input[name="q${i}"]:checked`);
        if (radioInput) {
            contenu.push(radioInput.value);
        }
    }
    // console.log(contenu);
    mijeryValiny(contenu);

    contenu = [];
});

// Validation des réponses par rapport aux bonnes valeurs de la variable "valiny"
function mijeryValiny(contenu) {
    for (let a = 0; a < 5; a++) {
        if (contenu[a] === valiny[a]) {
            note.push(true);
        } else {
            note.push(false);
        }
    }
    // console.log(note); // Remplacez 'verifTableau' par 'note'
    mampiseho(note);
    couleursFonction(note);
    note = [];
}

function mampiseho(tableau) {
    const nbrfaute = tableau.filter((e) => e !== true).length

    switch (nbrfaute) {
        case 0:
            valinyhtml.innerText = "Mahay be"
            break;
        case 1:
            valinyhtml.innerText = "Kely sisa"
            break;
        case 2:
            valinyhtml.innerText = "Alefa pr"
            break;
        case 3:
            valinyhtml.innerText = "Aiza kosa eh"
            break;
        case 4:
            valinyhtml.innerText = "Andrekako "
            break;
        case 5:
            valinyhtml.innerText = "Vendrana be"
            break;
    }

}

function couleursFonction(tabValBool) {

    for (let j = 0; j < tabValBool.length; j++) {

        if (tabValBool[j] == true) {
            toutesLesQuestions[j].style.background = '#17AC6E';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }

    }

}
toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})