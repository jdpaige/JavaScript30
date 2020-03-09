window.onload = function() {
    const seconds = document.getElementById("seconds");
    const minutes = document.getElementById("minutes");
    const hours = document.getElementById("hours");

    setInterval(setTime, 250);

    function setTime() {
        const currentTime = new Date();

        seconds.style.transform = `rotate(${-90 +
            currentTime.getSeconds() * 6}deg)`;

        minutes.style.transform = `rotate(${-90 +
            currentTime.getMinutes() * 6}deg)`;

        hours.style.transform =
            currentTime.getHours() !== 0
                ? `rotate(${-90 + currentTime.getHours() * 30}deg)`
                : `rotate(${-90 + 12 * 30}deg)`;
    }
};
