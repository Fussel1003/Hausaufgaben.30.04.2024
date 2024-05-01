function evaluateTicketPrice(age) {
    if (age < 6) {
        return "Kostenlos";
    } else if (age >= 6 && age <= 17) {
        return "Kinderpreis";
    } else if (age >= 18 && age <= 66) {
        return "Vollpreis";
    } else {
        return "Seniorenpreis";
    }
}

function runTicketEvaluation(age) {
    console.log(evaluateTicketPrice(age));
}

// Beispielaufruf
runTicketEvaluation(70); // Ausgabe: Seniorenpreis
