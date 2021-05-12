var para = document.getElementsByTagName("p");

var str = para[0];

var button = document.getElementById("btn");

button.addEventListener("click", () => {
    str.style.fontFamily = "Times New Roman";
    str.style.fontStyle = "italic";
    str.style.fontSize = "40px";
})
