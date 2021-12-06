function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    const day = days[num-1];
    return day? day : null;
}