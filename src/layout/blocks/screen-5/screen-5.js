buttonSEO = document.getElementsByClassName("open-full")[0];
buttonSEO.addEventListener("click", function() {
        buttonSEO.style.display = "none";
        SEO_hidden = document.getElementsByClassName("seo-text-p-hidden")[0];
        SEO_hidden.style.display = "block";
});