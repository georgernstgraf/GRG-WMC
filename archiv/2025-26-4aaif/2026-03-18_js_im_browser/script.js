
function hin() {
    const heading = document.getElementById("mainheading");
    if (!heading) {
        console.error("Element mit ID 'mainheading' nicht gefunden.");
        return;
    }
    heading.style.color = "yellow";
}
function retour() {
    const heading = document.getElementById("mainheading");
    if (!heading) {
        console.error("Element mit ID 'mainheading' nicht gefunden.");
        return;
    }
    heading.style.color = "blue";
}
