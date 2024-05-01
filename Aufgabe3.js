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

// Beispielaufruf
console.log(evaluateTicketPrice(25)); // Ausgabe: Vollpreis
