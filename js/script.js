document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});

document.querySelectorAll(".submenu-parent > a").forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle("active");
        const isExpanded = parent.getAttribute("aria-expanded") === "true";
        parent.setAttribute("aria-expanded", !isExpanded);
    });
});

document.addEventListener("click", function(e) {
    if (!e.target.matches('.submenu-parent > a')) {
        document.querySelectorAll('.submenu-parent').forEach(item => {
            item.classList.remove('active');
            item.setAttribute("aria-expanded", "false");
        });
    }
});