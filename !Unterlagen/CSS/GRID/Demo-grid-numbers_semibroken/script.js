const par = document.getElementById("size-output");
function logViewPortSize() {
    par.innerHTML = `${window.innerWidth}px * ${window.innerHeight}px`;
}
window.addEventListener("resize", logViewPortSize);
logViewPortSize();
