var anim = new ChargeeAnim 
const mouseGestionObj = new mouseGestion
const pageElt = document.getElementById('page')
var dataSimule = [
    {
        "tittle" : "Hello world!" ,
        "article" : "Bigest transition"
    },
    {
        "tittle" : "Hello world!" ,
        "article" : "Bigest transition"
    },
    {
        "tittle" : "Hello world!" ,
        "article" : "Bigest transition"
    },    
]

function chargerBody(){
    console.log('ok2')
    delPage()
    initHeader()
    mouseGestionObj.initHover(); /* derniere fonction ? */
}
function delPage(){
    pageElt.innerHTML = ''
    console.log('Elt page vider')
}
function initHeader(){
    pageElt.innerHTML = `
    <header>
        <nav>
            <span class= 'detectable' id='accueil'>Accueil</span>
            <span class= 'detectable' id='contact'>Contact</span>
            <span class= 'detectable' id='init'>Init</span>
        </nav>
    <link rel="stylesheet" href="header.css">
    </header>`

}
function initSection(){

}
