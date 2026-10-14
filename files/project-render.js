function renderProject() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const project = projectsData[id];
 
    const titleEl = document.getElementById("project-title");
    const imagesEl = document.getElementById("project-images");
 
    if (!project) {
        titleEl.textContent = "Project Not Found";
        imagesEl.innerHTML = "<p>Sorry, this page doesn't exist.</p>";
        return;
    }
 
    document.title = project.title + " | Nicole Raskin";
    titleEl.textContent = project.title;

    // Check if this project has custom HTML content (like About or Contact)
    if (project.content) {
        imagesEl.innerHTML = project.content;
        return; // Exit early so it doesn't try to render images
    }
 
    // Otherwise, render the standard image gallery layout
    const layoutClasses = {
        half: "row-item-half",
        quarter: "row-item-quarter"
    };
 
    imagesEl.innerHTML = project.images.map(function (img) {
        const layoutClass = layoutClasses[img.layout] || "row-item-full";
        return '<img src="' + img.src + '" alt="' + img.alt + '" class="' + layoutClass + '">';
    }).join("");
}
 
document.addEventListener("DOMContentLoaded", renderProject);