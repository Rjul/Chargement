class ChargeeAnim{
    constructor(){
        var conteneurElt = document.getElementById('conteneur')
        var boxCercleElt = document.getElementById( 'clockCharge' )
        var vueImgElt = document.getElementById( 'logo' )
        var boxElt = document.getElementById( 'clock' )
        document.getElementById( 'chargerButton' ).addEventListener( "mouseover" , () => {
            document.getElementById('chargerButton').style.display = 'none'
            console.log( "ok" )
            conteneurElt.style.animation = 'both 1s chargeeStart linear'
            setTimeout(chargerBody(),1000)

        })
        boxCercleElt.style.animation = 'infinite 2s rotate linear'
        vueImgElt.style.animation = 'infinite 2s rotateReverse linear'
    }
}

