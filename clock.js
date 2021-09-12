setInterval( () => {

    date = new Date();
    htime = date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();

    hrot= 30*htime + mtime/2;
    mrot=6*mtime;
    srot=6*stime;

    Hour.style.transform =`rotate(${hrot}deg)`;
    Min.style.transform =`rotate(${mrot}deg)`;
    Sec.style.transform =`rotate(${srot}deg)`;

},1000);