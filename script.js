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


// ---------------------------------------------------------

// Functionality for Nav Menu Toggle
let menuBtn = document.querySelector('.nav-menu ul .fa-bars');
let navMenu2 = document.querySelector('.nav-menu-2');

menuBtn.addEventListener('click', () => {
    if (navMenu2.style.opacity == '1') {
        navMenu2.style.height = '0';
        navMenu2.style.opacity = '0';
        navMenu2.style.zIndex = '-10';

    } else {
        navMenu2.style.opacity = '1';
        navMenu2.style.zIndex = '10';
        navMenu2.style.height = 'auto';
    }
})


let aboutUs = document.getElementById('about-us');
let aboutUsContent = document.getElementById('about-us-content');

aboutUs.addEventListener('click', () => {
    if (aboutUsContent.style.display == 'block') {
        // aboutUsContent.style.height = '0';
        // aboutUsContent.style.zIndex = '-10';
        // aboutUsContent.style.opacity = '-10';
        aboutUsContent.style.display = 'none';
    } else {
        // aboutUsContent.style.height = 'auto';
        // aboutUsContent.style.zIndex = '10';
        // aboutUsContent.style.opacity = '10';
        aboutUsContent.style.display = 'block';
    }
})

let companies = document.getElementById('companies');
let companiesContent = document.getElementById('companies-content');

companies.addEventListener('click', () => {
    if (companiesContent.style.display == 'block') {
        // companiesContent.style.height = '0';
        // companiesContent.style.zIndex = '-10';
        // companiesContent.style.opacity = '-10';
        companiesContent.style.display = 'none';
    } else {
        // companiesContent.style.height = 'auto';
        // companiesContent.style.zIndex = '10';
        // companiesContent.style.opacity = '10';
        companiesContent.style.display = 'block';
    }
})

let research = document.getElementById('research');
let researchContent = document.getElementById('research-content');

research.addEventListener('click', () => {
    if (researchContent.style.display == 'block') {
        // companiesContent.style.height = '0';
        // companiesContent.style.zIndex = '-10';
        // companiesContent.style.opacity = '-10';
        researchContent.style.display = 'none';
    } else {
        // companiesContent.style.height = 'auto';
        // companiesContent.style.zIndex = '10';
        // companiesContent.style.opacity = '10';
        researchContent.style.display = 'block';
    }
})


// ------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})