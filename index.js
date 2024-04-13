window.onload = () => {
    handleDate();
    document.getElementById('image').classList.add('fade-in');
    document.getElementById('info').classList.add('fade-in');
}

handleDate = () =>{
    const dateTimeDiv = document.getElementById('dateTime');
    let showTime = false;

    const updateDateTime = () => {
        const now = new Date();

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[now.getDay()];

        const time = now.toTimeString().split(' ')[0];

        const date = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear().toString().slice(2);

        dateTimeDiv.innerHTML = showTime ? `${dayOfWeek} - ${date}/${month}/${year} | ${time}` : `${dayOfWeek} - ${date}/${month}/${year}`;
    };

    dateTimeDiv.addEventListener('click', () => {
        showTime = !showTime;
        updateDateTime();
    });

    updateDateTime();

    setInterval(updateDateTime, 1000);
}