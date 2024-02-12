// 1) creation d'un panier vide en session storage

// newCart = {
//     "chaussures": [
//         {
//             "name": "test",
//             "price": 34,
//             "quantity": 2
//         },
//         {
//             "name": "test2",
//             "price": 63,
//             "quantity": 1
//         }
//     ]
// }

// sessionStorage.setItem("cart", "");


// 2) création d'une fonction/ou de la logique qui permet d'ajouter une chaussure dans le panier
// 3) création de l'event qui permet d'executer le code qui va ajouter au panier, on fais une boucle qui vient créer tous les l'event pour tous les bouton
let mesBoutons = document.querySelectorAll(".add-cart")

mesBoutons.forEach(unBouton => {
    addEventListener("click", () => {
        // ma logique
        // var cart = JSON.parse(sessionStorage.getItem("cart"));
        // unBouton.dataset.price
        let cart = JSON.parse(sessionStorage.getItem("cart"));

        if (cart == null) {
            cart = {
                "chaussures": []
            }
        }

        cart.chaussures.push({
            "name": unBouton.dataset.name,
            "price": unBouton.dataset.price,
        })

        sessionStorage.setItem("cart", JSON.stringify(cart));
    })
});

// 4) dans l'event on vérifie si on a déjà un panier et si il existe déjà on vient juste rajouter la nouvelle au panier
addEventListener("")


// 5 pour afficher le panier on recupère le cart en session storage

let cart = JSON.parse(sessionStorage.getItem("cart"));

let htmlFinal = "";

cart.chaussures.forEach(chaussure => {
    htmlFinal = htmlFinal + "<div><p>" + chaussure.name + "</p>" + "<p>" + chaussure.price + "</p></div>";
});

document.querySelector(".cart").insertAdjacentHTML(htmlFinal);

// 7) insert du html à l'emplacement prévue dans le DOM avec insert


// 8) calcule du montant total
montantTotal = 0

cart.chaussures.forEach(chaussure => {
   montantTotal += chaussure.price;
});