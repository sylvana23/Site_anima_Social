document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const links = document.querySelectorAll("nav a");

    // Function to load a page
    const loadPage = async (page) => {
        try {
            const response = await fetch(`pages/${page}.html`);
            if (!response.ok) throw new Error("Page not found");
            const html = await response.text();
            app.innerHTML = html;
        } catch (error) {
            app.innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
        }
    };

    // Attach event listeners to navigation links
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(page);
        });
    });

    // Load the default page
    loadPage("home");
});
