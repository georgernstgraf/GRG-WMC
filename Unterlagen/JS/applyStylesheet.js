function applyStylesheet(css = 0) {
    // List of known resources
    const sheets = [
        "https://thomasf.github.io/solarized-css/solarized-dark.min.css",
        "https://thomasf.github.io/solarized-css/solarized-light.min.css",
        "https://capp.nicepage.com/eef5851c6a60a800bcae9cceeea3f547dc0330ed/main-libs.css",
        "https://www.youtube.com/s/desktop/a6a78e6c/cssbin/www-main-desktop-home-page-skeleton-2x.css",
    ];
    // sanitize input
    css = Math.floor(css);
    css %= sheets.length;
    // Remove all stylesheets and styles
    document.querySelectorAll('link[rel="stylesheet"], style').forEach((s) => {
        console.log("removing", s.href);
        s.remove();
    });
    // create and apply a new stylesheet
    const ss = document.createElement("link");
    ss.rel = "stylesheet";
    ss.type = "text/css";
    ss.href = sheets[css];
    console.info("Applying stylesheet from", css);
    document.getElementsByTagName("head")[0].appendChild(ss);
}
