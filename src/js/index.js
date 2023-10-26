// DARK MODE

const buttonChangeTheme = document.getElementById('button-change-theme');
const imageButton = document.getElementById('moon');
const main = document.getElementById('main');
const nav = document.getElementById('nav');
const dashboard = document.getElementById('dashboard');
const notesTitle = document.getElementById('notes-title');
const addNote = document.getElementById('add-note');
const iconsContainer = document.getElementById('icons');

const buttonNotes = document.getElementById('button-notes');
const buttons = document.querySelectorAll('.button-color');
const notesContainer = document.getElementById('notes-container');

buttonChangeTheme.addEventListener("click", () => {

    if (imageButton.classList.contains('sun')) {
        imageButton.src = "./src/images/moon.png";
        imageButton.classList.remove('sun');
        imageButton.classList.add('moon');
        main.classList.add('dark');
        nav.classList.add('dark');
        dashboard.classList.add('dark');
        notesTitle.classList.add('dark');
        addNote.src = "./src/images/plus-symbol-black.png";
    } else {
        imageButton.classList.remove('moon');
        imageButton.classList.add('sun');
        imageButton.src = "./src/images/sun.png"
        main.classList.remove('dark');
        nav.classList.remove('dark');
        dashboard.classList.remove('dark');
        notesTitle.classList.remove('dark');
        addNote.src = "./src/images/plus-symbol-white.png";
    }
});


// DIALOG

buttonNotes.addEventListener("click", () => {
    // console.log('clicked'); 
    iconsContainer.classList.remove('disable');

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {
            // console.log(index);

            try {

                if (index == 0) {
                    notesContainer.classList.remove('yellow');
                    notesContainer.classList.remove('red');
                    notesContainer.classList.add('green');
                    document.getElementById("dialog").open = true;
                } else if (index == 1) {
                    notesContainer.classList.remove('green');
                    notesContainer.classList.remove('red');
                    notesContainer.classList.add('yellow');
                    document.getElementById("dialog").open = true;

                } else if (index == 2) {
                    notesContainer.classList.remove('yellow');
                    notesContainer.classList.remove('green'); 
                    notesContainer.classList.add('red'); 
                    document.getElementById("dialog").open = true;
                }

            } catch (error) {
                
                throw error; 
            }


            // console.log(button[index]); 
        });

    });


}); 