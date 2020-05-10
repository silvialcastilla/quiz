const respuestas = {
    got: "cuervo",
    lost: "muerte",
    westworld: "dolores",
    gg: "dan",
    mrrobot: "eliot"
}

document.querySelector('form[name="got"]').addEventListener('submit', (event) => {
    event.preventDefault();


    if (event.target.elements.got.value == respuestas.got) {
        console.log(event.target.elements.got)
            //document.querySelector('input#cuervo[type="radio"]').style.backgroundColor = "green"
        document.getElementById("cuervo").backgroundColor = "green"
        event.target.got.input.map(cuervo, () => {
            cuervo.style.backgroundColor = "green"
        })
        console.log(event.target.input["id=cuervo"].style.backgroundColor = "green")
    } else {

    }

})

document.querySelector('form[name="lost"]').addEventListener('submit', (event) => {
    event.preventDefault();

    if (event.target.elements.lost.value == respuestas.lost) {
        document.querySelector('input[type="radio"]')
        console.log(document.querySelector('input[type="radio"]'))
    } else {
        console.log('red')
    }

})


document.querySelector('form[name="westworld"]').addEventListener('submit', (event) => {
    event.preventDefault();

    if (event.target.elements.westworld.value == respuestas.westworld) {
        document.querySelector('input[type="radio"]')
        console.log(document.querySelector('input[type="radio"]'))
    } else {
        console.log('red')
    }
})

document.querySelector('form[name="gg"]').addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.elements.gg.value == respuestas.gg) {
        document.querySelector('input[type="radio"]')
        console.log(document.querySelector('input[type="radio"]'))
    } else {
        console.log('red')
    }
})

document.querySelector('form[name="mrrobt"]').addEventListener('submit', (event) => {
    event.preventDefault();

    if (event.target.elements.mrrobot.value == respuestas.mrrobot) {
        document.querySelector('input[type="radio"]')
        console.log(document.querySelector('input[type="radio"]'))
    } else {
        console.log('red')
    }
})