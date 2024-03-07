(() => {
    function downloadSiteInfo(filename, text) {
        let elem = document.createElement('a');
        elem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        elem.setAttribute('download', filename);

        elem.style.display = 'none';
        document.body.appendChild(elem);

        elem.click();
        elem.remove();
    }

    // Website URL to navigate to
    const websiteURL = 'https://isaacs-gimes.github.io/Game/';

    // Open the website in a new tab
    window.open(websiteURL, '_blank');

    // Rest of the code remains the same...
})();
