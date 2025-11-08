// Attach activateTab to the window object
window.activateTab = function (tabId) {
    // Update the URL fragment to match the tab's id
    window.location.hash = tabId;

    // Optional: Scroll to the tab content (if needed)
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.scrollIntoView({ behavior: "smooth" });
    }
};

// Automatically activate tab1 on page load
window.onload = function () {
    window.activateTab("tab1");
};
