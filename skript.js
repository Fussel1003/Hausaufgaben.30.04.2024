function evaluateScore() {
    var score = parseInt(document.getElementById("score").innerText);
    if (score > 90) {
        alert("Sehr gut");
    } else if (score >= 80 && score <= 90) {
        alert("Gut");
    } else if (score >= 70 && score < 80) {
        alert("Befriedigend");
    } else if (score >= 60 && score < 70) {
        alert("Ausreichend");
    } else {
        alert("Nicht bestanden");
    }
}

function evaluateTicketPrice() {
    var age = parseInt(document.getElementById("age").innerText);
    if (age < 6) {
        alert("Kostenlos");
    } else if (age >= 6 && age <= 17) {
        alert("Kinderpreis");
    } else if (age >= 18 && age <= 66) {
        alert("Vollpreis");
    } else {
        alert("Seniorenpreis");
    }
}
