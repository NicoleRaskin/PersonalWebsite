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
 
    imagesEl.innerHTML = project.images.map(function (img, index) {
        const layoutClass = layoutClasses[img.layout] || "row-item-full";
        return '<img src="' + img.src + '" alt="' + img.alt + '" class="gallery-img ' + layoutClass + '" data-index="' + index + '" loading="lazy">';
    }).join("");

    setupLightbox(project.images, imagesEl);
}

/* ---------- LIGHTBOX (click an image to view it bigger) ---------- */

function setupLightbox(images, imagesEl) {
    let current = 0;

    // Build the overlay once and add it to the page
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image viewer");
    lightbox.innerHTML =
        '<button class="lightbox-btn lightbox-close" aria-label="Close">&times;</button>' +
        '<button class="lightbox-btn lightbox-prev" aria-label="Previous image">&#8249;</button>' +
        '<img class="lightbox-img" src="" alt="">' +
        '<button class="lightbox-btn lightbox-next" aria-label="Next image">&#8250;</button>' +
        '<div class="lightbox-counter"></div>';
    document.body.appendChild(lightbox);

    const imgEl = lightbox.querySelector(".lightbox-img");
    const counterEl = lightbox.querySelector(".lightbox-counter");
    const prevBtn = lightbox.querySelector(".lightbox-prev");
    const nextBtn = lightbox.querySelector(".lightbox-next");

    function show(index) {
        current = (index + images.length) % images.length; // wraps around
        imgEl.src = images[current].src;
        imgEl.alt = images[current].alt;
        counterEl.textContent = (current + 1) + " / " + images.length;
        // Hide arrows when there is only one image
        const single = images.length < 2;
        prevBtn.style.display = single ? "none" : "";
        nextBtn.style.display = single ? "none" : "";
    }

    function open(index) {
        show(index);
        lightbox.classList.add("open");
        document.body.classList.add("lightbox-open"); // stops page scrolling behind
    }

    function close() {
        lightbox.classList.remove("open");
        document.body.classList.remove("lightbox-open");
        imgEl.src = "";
    }

    // Open when a gallery image is clicked
    imagesEl.addEventListener("click", function (e) {
        const target = e.target.closest(".gallery-img");
        if (target) open(parseInt(target.dataset.index, 10));
    });

    // Buttons
    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    prevBtn.addEventListener("click", function (e) { e.stopPropagation(); show(current - 1); });
    nextBtn.addEventListener("click", function (e) { e.stopPropagation(); show(current + 1); });

    // Click on the dark background (not the image or buttons) closes it
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) close();
    });

    // Keyboard: Esc closes, arrow keys navigate
    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") show(current - 1);
        else if (e.key === "ArrowRight") show(current + 1);
    });

    // Swipe left/right on touch screens
    let touchStartX = null;
    lightbox.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        touchStartX = null;
        if (Math.abs(dx) > 50 && images.length > 1) {
            show(dx < 0 ? current + 1 : current - 1);
        }
    }, { passive: true });
}
 
document.addEventListener("DOMContentLoaded", renderProject);