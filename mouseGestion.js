
class mouseGestion{
    constructor(){
        const cursorElt = document.getElementById('cursor');
        const detectableElts = document.getElementsByClassName('detectable');
        console.log(detectableElts.length)
        document.onmousemove = (e) => {    
            let positionY = e.pageY -5;
            let positionX = e.pageX -5;
            cursorElt.style.top = positionY+"px" ;
            cursorElt.style.left = positionX+"px";
        }
    }
    initHover(){
        const detectableElt = document.getElementById('ecoute');
        const cursorElt = document.getElementById('cursor');
            console.log(detectableElt)
            detectableElt.onmouseover = (event) =>{
                event.stopPropagation();                
                console.log(event.target.className)
                if (event.target.className == "detectable"){
                    cursorElt.classList.add('cursor--big')
                    console.log("big")
                }
                else{cursorElt.classList.remove('cursor--big');console.log("small")}
            }
    }
}
