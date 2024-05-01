function evaluateScore(score) {
    if (score > 90) {
        return "sehr gut";
    } else if (score >= 80 && score <= 90) {
        return "gut";
    } else if (score >= 70 && score < 80) {
        return "befriedigend";
    } else if (score >= 60 && score < 70) {
        return "ausreichend";
    } else {
        return "nicht bestanden";
    }
}

function runEvaluation(score) {
    console.log(evaluateScore(score));
}

// Beispielaufruf
runEvaluation(75); // Ausgabe: befriedigend
