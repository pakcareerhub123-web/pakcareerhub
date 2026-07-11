// Live Date & Time

function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    };

    document.getElementById("currentDate").innerHTML =
        now.toLocaleDateString("en-US", options);

    document.getElementById("currentTime").innerHTML =
        now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

}

updateDateTime();

setInterval(updateDateTime, 1000);