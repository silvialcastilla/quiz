const respuestas = {
    got: "cuervo",
    lost: "muerte",
    westworld: "dolores",
    gg: "dan",
    mrrobot: "eliot"
}

document.querySelector('form[name="gots"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta1").length; i++) {
        document.getElementsByClassName("respuesta1")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.got.length; i++) {
        document.getElementById(respuestas.got).style.backgroundColor = "green"
    }
    if (event.target.elements.got.value == respuestas.got) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="losts"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta2").length; i++) {
        document.getElementsByClassName("respuesta2")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.lost.length; i++) {
        document.getElementById(respuestas.lost).style.backgroundColor = "green"
    }
    if (event.target.elements.lost.value == respuestas.lost) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})


document.querySelector('form[name="westworlds"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta3").length; i++) {
        document.getElementsByClassName("respuesta3")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.westworld.length; i++) {
        document.getElementById(respuestas.westworld).style.backgroundColor = "green"
    }
    if (event.target.elements.westworld.value == respuestas.westworld) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="ggs"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta4").length; i++) {
        document.getElementsByClassName("respuesta4")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.gg.length; i++) {
        document.getElementById(respuestas.gg).style.backgroundColor = "green"
    }
    if (event.target.elements.gg.value == respuestas.gg) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})

document.querySelector('form[name="mrrobots"]').addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < document.getElementsByClassName("respuesta5").length; i++) {
        document.getElementsByClassName("respuesta5")[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < event.target.elements.mrrobot.length; i++) {
        document.getElementById(respuestas.mrrobot).style.backgroundColor = "green"
    }
    if (event.target.elements.mrrobot.value == respuestas.mrrobot) {
        alert("¡Has acertado!");
    } else {
        alert("¡Te equivocaste!")
    }
})