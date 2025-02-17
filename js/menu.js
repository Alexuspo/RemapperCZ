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

// Přidat event listenery pro menu
function initializeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const sectionToggles = document.querySelectorAll('.section-toggle');

    // ... implementace event listenerů ...
}
