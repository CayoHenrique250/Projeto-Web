document.getElementById("toggleButton").addEventListener("click", function () {
    var toolbar = document.getElementById("toolbar");
    if (toolbar.classList.contains("hidden")) {
        toolbar.classList.remove("hidden");
    } else {
        toolbar.classList.add("hidden");
    }
});