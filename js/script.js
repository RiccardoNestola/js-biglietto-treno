/* Descrizione:
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    
    L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


    */

    const kmNumber = parseInt (prompt ("Quanti Km bisogna percorrere?"));
    console.log(kmNumber + "Km");

    const yearNumber = parseInt (prompt ("Quanti anni hai?"));
    console.log(yearNumber + "Anni");

    const priceTicket = 0.21 * kmNumber;
    console.log("Prezzo Biglietto " + priceTicket +"€");

    const discount20 = ((priceTicket * 20) / 100);
    console.log(discount20 + "€");

    const discount40 = ((priceTicket * 40) / 100);
    console.log(discount40 + "€");



        if (yearNumber < 18) {
            console.log(priceTicket - discount20 + " Under 18");
            document.getElementById("output").innerHTML = "Il prezzo del biglietto è di " + (priceTicket.toFixed(2) - discount20 + "€");
            

            
        } else if (yearNumber >= 65){
            console.log(priceTicket - discount40 + " over 65");
            document.getElementById("output").innerHTML = "Il prezzo del biglietto è di " + (priceTicket.toFixed(2) - discount40 + "€");

        }

        else {
            priceTicket;
            console.log(priceTicket + " prezzo normale");
            document.getElementById("output").innerHTML = "Il prezzo del biglietto è di " + (priceTicket.toFixed(2) + "€");

        };



        

