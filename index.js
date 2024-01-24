console.log("hello world");

function toggleClass(element) {
    if (element.classList.contains("active-check")) {
        element.classList.remove("active-check");
    } else {
        element.classList.add("active-check");
    }
};