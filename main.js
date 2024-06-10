const donas = [
    {nombre: "Chocolate", precio: 100},
    {nombre: "Crema", precio: 80},
    {nombre: "Con nueces", precio: 120},
    {nombre: "Chocolate blanco", precio: 110},
]

let compras = []
let unidades = 0

let pregunta = prompt("Bienvenido a Udonuts! estaria interesado en probar nuestras donas?").toLowerCase()

while(pregunta !="si" && pregunta != "no"){
    alert("Por favor responder con Si o No, gracias")
    pregunta = prompt("Estaria interesado en probar nuestras donas?").toLowerCase()
}

if(pregunta == "si") {
    alert("Estas son nuestras dondas disponibles")
    console.log(donas)
    let donasdisponibles = donas.map((donas) =>donas.nombre + " " + donas.precio + "$")
    alert(donasdisponibles.join(" - "))
}

else if (pregunta == "no") {
    alert("Gracias por visitarnos, si cambias de opinion, recarga la pagina!")
}

while (pregunta != "no") {
    let carrito = prompt("Selecciona el tipo de dona:").toLowerCase()
    let precio = 0

    if (carrito == "chocolate" || carrito == "crema" || carrito == "con nueces" || carrito == "chocolate blanco"){
        switch(carrito) {
            case "chocolate":
                precio = 100
                break

            case "crema":
                precio = 80
                break

            case "con nueces":
                precio = 120
                break

            case "chocolate blanco":
                precio = 110
                break

            default:
                break
        }
        let unidades = parseInt(prompt("Cuantas unidades?"))

        compras.push({carrito, unidades, precio})
        console.log(compras)
    }

    else{
        alert("No es ninguna de las donas disponibles")
    }

    pregunta = prompt("Quiere seguir seleccionando donas?").toLowerCase()

    while(pregunta !="si" && pregunta != "no"){
        alert("Por favor responder con Si o No, gracias")
        pregunta = prompt("Quiere seguir seleccionando donas?").toLowerCase()}
        
        if (pregunta == "no"){
        compras.forEach((comprasFinal) => {
            console.log(`compras: ${comprasFinal.carrito}, unidades: ${comprasFinal.unidades}, precio total: ${comprasFinal.unidades * comprasFinal.precio}`)
            alert((`compras: ${comprasFinal.carrito}, unidades: ${comprasFinal.unidades}, precio total: ${comprasFinal.unidades * comprasFinal.precio}`))
        })
        
        break
    }
}

const total = compras.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)
alert(`El total a pagar por su compra es: ${total}$, muchas gracias!`)
alert("Gracias por elegirnos, hasta pronto!")
