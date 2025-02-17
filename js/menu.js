const menuStructure = {
    setup: {
        title: "Setup",
        items: [
            { title: "Installing ReMapper", url: "instalace.html" },
            { title: "Setting Maps Up", url: "setting-maps.html" },
            { title: "Workflow", url: "workflow.html" }
        ]
    },
    code: {
        title: "Code",
        items: [
            { title: "Overview", url: "overview.html" },
            { title: "Pipelines", url: "pipelines.html" }
        ]
    },
    // ...další sekce...
};

function generateMenu(inRoot = false) {
    const prefix = inRoot ? "pages/" : "";
    const homeLink = inRoot ? "index.html" : "../index.html";
    
    // Generování menu struktury
    // ... implementace ...
}

function initMenu() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const sectionToggles = document.querySelectorAll('.section-toggle');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
    });

    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            toggle.classList.toggle('active');
            
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            }
        });
    });
}

// Inicializace menu po načtení stránky
document.addEventListener('DOMContentLoaded', initMenu);
