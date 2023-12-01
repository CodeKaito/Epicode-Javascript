let commentSent = () => alert("Comment Sent Successfully!");

let changeTitle = () => {
    newTitle = prompt("Inserisci un nuovo titolo");
    if (newTitle !== null) {
        document.getElementById("title").textContent = newTitle;
    }
}

let changeBackground = () => {
    var newBackground = document.getElementsByTagName("body")[0];
    newBackground.style.background = "#0166CC";
}

let changeAddress = (address) => {
    var newAddress = address;
    document.getElementById("address").textContent = newAddress;
}

