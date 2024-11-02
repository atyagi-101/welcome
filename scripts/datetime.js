function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString('en-in', {timeZoneName: 'short' }).toUpperCase();
    document.querySelector('#datetime').textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);


