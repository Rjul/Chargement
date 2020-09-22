
class mouseGestion{
    constructor(){
        const cursorElt = document.getElementById('cursor');
        const detectableElts = document.getElementsByClassName('detectable');
        console.log(detectableElts.length)
        document.onmousemove = (e) => {    
            let positionY = e.pageY - 5;
            let positionX = e.pageX - 5;
            cursorElt.style.top = positionY+"px" ;
            cursorElt.style.left = positionX+"px";
        }
    }
    initHover(){
        const detectableElts = document.getElementsByClassName('detectable');
        const cursorElt = document.getElementById('cursor');
        console.log(detectableElts.length)
        for (let i = 0 ; i < detectableElts.length ; i++ ){
            console.log(detectableElts[i])
            detectableElts[i].onmouseover = (event) =>{
                event.stopPropagation();
                cursorElt.classList.add('big')
                console.log(event.target.id)
            }
            detectableElts[i].addEventListener("mouseout", (event) =>{
                    event.stopPropagation();
                    cursorElt.classList.remove('big')
                    console.log(event)
            })   
            console.log('fin de boucle')
        } 
    }
}
