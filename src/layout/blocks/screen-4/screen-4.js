all_accordions_panel = document.getElementsByClassName("accordion-panel");
all_accordions_buttons = document.getElementsByClassName("accordion-button");
for (i = 0; i < all_accordions_buttons.length; i++) {
    all_accordions_buttons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.display = "none";
            panel.style.maxHeight = null;
        } else {
            panel.style.display = "block";
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}