function evaluateScore(score) {
    if (score > 90) {
        console.log("sehr gut");
    } else if (score >= 80 && score <= 90) {
        console.log("gut");
    } else if (score >= 70 && score < 80) {
        console.log("befriedigend");
    } else if (score >= 60 && score < 70) {
        console.log("ausreichend");
    } else {
        console.log("nicht bestanden");
    }
}

// Beispielaufruf
evaluateScore(85); // Ausgabe: gut
