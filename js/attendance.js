let timeIn = null;

    function updateDateTime() {
        const now = new Date();

        // Date with Day
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        document.getElementById("currentDate").textContent =
            now.toLocaleDateString(undefined, options);

        // Time
        document.getElementById("currentTime").textContent =
            now.toLocaleTimeString();
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    document.getElementById("timeInBtn").onclick = () => {
        timeIn = new Date();
        document.getElementById("timeInBtn").disabled = true;
        document.getElementById("timeOutBtn").disabled = false;
    };

    document.getElementById("timeOutBtn").onclick = () => {
        const timeOut = new Date();
        const diffMs = timeOut - timeIn;

        const mins = Math.floor(diffMs / 60000);
        const hrs = Math.floor(mins / 60);
        const remMins = mins % 60;

        document.getElementById("workedHours").textContent =
            `${hrs} hrs ${remMins} mins`;

        document.getElementById("timeInBtn").disabled = false;
        document.getElementById("timeOutBtn").disabled = true;
    };