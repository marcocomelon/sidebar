// Hide loader after page fully loaded
        window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        if (loader) {
            // Delay in milliseconds (1000ms = 1s)
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        }
});