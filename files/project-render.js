// Reads ?id=<n> from the page URL, looks up that project in projectsData
// (from projects-data.js), and fills in the title + images on project.html.
 
function renderProject() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const project = projectsData[id];
 
    const titleEl = document.getElementById("project-title");
    const imagesEl = document.getElementById("project-images");
 
    if (!project) {
        titleEl.textContent = "Project Not Found";
        imagesEl.innerHTML = "<p>Sorry, this project doesn't exist.</p>";
        return;
    }
 
    document.title = project.title + " | Nicole Raskin";
    titleEl.textContent = project.title;
 
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
 