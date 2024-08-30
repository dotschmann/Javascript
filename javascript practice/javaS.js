function displayDate() {
    let numb = 5.0;
    let text = numb.toString();
    document.getElementById("demo").innerHTML = text.padEnd(4, 0);
}