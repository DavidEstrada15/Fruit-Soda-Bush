const buttonleft= document.getElementById("buttonleft")
const buttonright= document.getElementById("buttonright")
const h1= document.querySelector("h1")
const fruits= document.querySelector(".fruits")
const etiqueta= document.getElementById("etiqueta")
let startx = 0;
let starty= 0;
let endx= 0;
let endy= 0
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
    switch(event.key){
        case "ArrowRight":
        case "ArrowUp":
            if (viewinfo.vistaactual == viewinfo.informacion.length - 1) {
               buttonleft2() 
            }else{
             buttonrightfunction()    
            }
            
        break;    
    case "ArrowLeft":
    case "ArrowDown":
        buttonleftfunction();

    default:
        break;
    }
})

document.body.addEventListener("touchstart", (event)=>{
    startx= event.touches[0].pageX
    starty= event.touches[0].pageY
})

document.body.addEventListener("touchend", (event)=>{
    endy= event.changedTouches[0].clientY
    endx= event.changedTouches[0].clientX
    const walk= startx - endx
    const walky= starty - endy
    startx= endx
    starty= endy
         if (walk < -50 && viewinfo.vistaactual < viewinfo.informacion.length - 1) {
            buttonrightfunction() } else if( walk < 50 && viewinfo.vistaactual == viewinfo.informacion.length - 1){
            buttonleft2()
         } else if (walk > 50 && viewinfo.vistaactual > 0){
            buttonleftfunction()
    }
     else if (walky < -50 && viewinfo.vistaactual < viewinfo.informacion.length - 1) {
            buttonrightfunction() } else if( walky < 50 && viewinfo.vistaactual == viewinfo.informacion.length - 1){
            buttonleft2()
         } else if (walky > 50 && viewinfo.vistaactual > 0){
            buttonleftfunction()
    }
    })

function buttonrightfunction(){
    if (viewinfo.vistaactual < viewinfo.informacion.length -1) {
        viewinfo.vistaactual ++
        

        document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual - 1].name}`)
    .querySelector("h2").classList.add("hide-h2")
    
        document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual - 1].name}`)
    .querySelectorAll(".floatsfruits").forEach( ( fruta)=>{
        fruta.classList.add("hide-fruits")
        fruta.classList.remove("show-fruits")})
        
        updateView(viewinfo.vistaactual)     
    }
   
}

function buttonleftfunction() {
    if (viewinfo.vistaactual > 0) {
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
    
}

function buttonleft2() {
    document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual].name }`)
    .querySelector("h2").classList.add("hide-h2")
    
    document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual].name }`)
    .querySelectorAll(".floatsfruits").forEach( ( fruta)=>{
        fruta.classList.add("hide-fruits")
        fruta.classList.remove("show-fruits")
    })
       viewinfo.vistaactual --
       viewinfo.vistaactual --
    document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual].name }`)
    .querySelector("h2").classList.add("hide-h2")
    
    document.querySelector(`#${viewinfo.informacion[viewinfo.vistaactual].name }`)
    .querySelectorAll(".floatsfruits").forEach( ( fruta)=>{
        fruta.classList.add("hide-fruits")
        fruta.classList.remove("show-fruits")
    })
    updateView(viewinfo.vistaactual) 
    
}