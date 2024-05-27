const donas = [
    {nombre: "Chocolate", precio: 100},
    {nombre: "Crema", precio: 80},
    {nombre: "Con nueces", precio: 120},
    {nombre: "Chocolate blanco", precio: 110},
]

let compras = []
let unidades = 0

let pregunta = prompt("Bienvenido a Udonuts! estaria interesado en probar nuestras donas?")

//aqui se puede usar el or? (||)(por que cuando el usuario coloca si o no en minuscula no deja continuar)
while(pregunta !="Si" && pregunta != "No"){
    alert("Por favor responder con Si o No, gracias")
    pregunta = prompt("Estaria interesado en probar nuestras donas?")
}

if(pregunta == "Si") {
    alert("Estas son nuestras dondas disponibles")
    console.log(donas)
    let donasdisponibles = donas.map((donas) =>donas.nombre + " " + donas.precio + "$")
    alert(donasdisponibles.join(" - "))
}

else if (pregunta == "No") {
    alert("Gracias por visitarnos, si cambias de opinion, recarga la pagina!")
}

while (pregunta != "No") {
    let carrito = prompt("Selecciona tus donas:")
    let precio = 0

    if (carrito == "Chocolate" || carrito == "Crema" || carrito == "Con nueces" || carrito == "Chocolate blanco"){
        switch(carrito) {
            case "Chocolate":
                precio = 100
                break

            case "Crema":
                precio = 80
                break

            case "Con nueces":
                precio = 120
                break

            case "Chocolate blanco":
                precio = 110
                break

            default:
                break
        }
        let unidades = parseInt(prompt("Cuantas unidades?"))

        //compras.push({donas, unidades, precio})
        //console.log(compras)
    }

    else{
        alert("No es ninguna de las donas disponibles")
    }

    pregunta = prompt("Quiere seguir seleccionando donas?")

    while(pregunta == "No"){
        alert("Gracias por elegirnos!")
        break
    }
}
