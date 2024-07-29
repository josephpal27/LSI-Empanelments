// Functionality for Nav Menu Toggle
let navMenu = document.querySelectorAll('.nav-menu .dropdown-list');
let navMenuContent = document.querySelectorAll('.nav-menu-contents .content-box');

// Add a data-index attribute to each li and content box for easy matching
navMenu.forEach((e, index) => {
    e.setAttribute('data-index', index);
    navMenuContent[index].setAttribute('data-index', index);
    e.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        toggleContentBoxes();
        setTimeout(() => {
            document.querySelector(`.content-box[data-index="${index}"]`).classList.add('show');
        }, 10); // slight delay to trigger transition
        toggleActiveClass(e);
    });
});

function toggleContentBoxes() {
    navMenuContent.forEach(box => {
        box.classList.remove('show');
    });
}

function toggleActiveClass(activeElement) {
    navMenu.forEach(e => {
        e.classList.remove('active');
    });
    activeElement.classList.add('active');
}

// Add event listener to the document to hide active elements when clicking outside
document.addEventListener('click', () => {
    navMenu.forEach(e => {
        e.classList.remove('active');
    });
    toggleContentBoxes();
});

// Initially hide all content boxes
toggleContentBoxes();


// ------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})