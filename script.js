const buttonleft= document.getElementById("buttonleft")
const buttonright= document.getElementById("buttonright")
const h1= document.querySelector("h1")
const fruits= document.querySelector(".fruits")
const etiqueta= document.getElementById("etiqueta")
let startx = 0;
let scrollleft;
let viewinfo= {
    vistaactual: 0,
    informacion: [
            {
                name: "Pear",
                backgroundColor: "#c8e78a",
                TitleColor: "#03403f",

            }, {
                name: "Apple",
                backgroundColor: "#ffb2b2",
                TitleColor: "#ec4458",
            }, {
                name: "Exotic",
                backgroundColor: "#c1bff2",
                TitleColor:  "#6464ff",

            }
        
    ]
}

updateView(viewinfo.vistaactual)
function updateView(indice){
if (indice > 0) {
buttonleft.style.visibility= "visible"
buttonleft.style.setProperty("--buttonColor" , viewinfo.informacion[indice -1].backgroundColor);


}else{
  buttonleft.style.visibility= "hidden"
}

if (indice < viewinfo.informacion.length - 1) {
    buttonright.style.visibility= "visible"
    buttonright.style.setProperty("--buttonColor" , viewinfo.informacion[indice +1].backgroundColor);
} else{
    buttonright.style.visibility= "hidden"
}

h1.style.color= viewinfo.informacion[indice].TitleColor
fruits.style.left= `-${indice}00%`
etiqueta.style.left= `-${indice}00%`
document.querySelector(`#${viewinfo.informacion[indice].name}`)
    .querySelector("h2").classList.add("show-h2")

document.querySelector(`#${viewinfo.informacion[indice].name}`)
    .querySelector("h2").classList.remove("hide-h2")

    document.querySelector(`#${viewinfo.informacion[indice].name}`)
    .querySelectorAll(".floatsfruits").forEach( (fruta) =>{
        fruta.classList.remove("hide-fruits")
        fruta.classList.add("show-fruits")
    })
}
buttonleft.addEventListener("click", ()=>{
    buttonleftfunction() 
})

buttonright.addEventListener("click", ()=>{
   buttonrightfunction()
})

function cargarbackgroundcolor(){
    viewinfo.informacion.forEach( infofruta =>{
        document.querySelector(`#${infofruta.name}`)
        .querySelector(".background").style.backgroundColor = infofruta.backgroundColor
    })
}

cargarbackgroundcolor()

document.addEventListener("keydown", (event)=>{
    switch(event.keyCode){
        case 39:
            buttonrightfunction() 
    break; 
            
           
    
    case 37:
        buttonleftfunction() 
    
    }
})

document.body.addEventListener("touchstart", (event)=>{
startx= event.touches[0].pageX
})

    document.body.addEventListener("touchend", (event)=>{
        const x= event.changedTouches[0].pageX
    const walk= startx - x
    const swipe= 50
    startx= x
         if (walk < swipe && viewinfo.vistaactual < 3) {
           buttonrightfunction() } else if (walk > swipe && viewinfo.vistaactual > 0){
            buttonleftfunction()
    }
    })

function buttonrightfunction(){
   viewinfo.vistaactual ++
        

        document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual - 1].name}`)
    .querySelector("h2").classList.add("hide-h2")
    
    document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual - 1].name}`)
    .querySelectorAll(".floatsfruits").forEach( ( fruta)=>{
        fruta.classList.add("hide-fruits")
        fruta.classList.remove("show-fruits")})
        
   updateView(viewinfo.vistaactual)  
}

function buttonleftfunction() {
    viewinfo.vistaactual --
document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual + 1].name}`)
    .querySelector("h2").classList.add("hide-h2")
    
    document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual + 1].name}`)
    .querySelectorAll(".floatsfruits").forEach( ( fruta)=>{
        fruta.classList.add("hide-fruits")
        fruta.classList.remove("show-fruits")
    })
    updateView(viewinfo.vistaactual)
}