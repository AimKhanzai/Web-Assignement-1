const searchBox = document.getElementById("frm");

searchBox.addEventListener("focus", function() {
    searchBox.classList.add("focus");
});

searchBox.addEventListener("blur", function() {
    searchBox.classList.remove("focus");
});
