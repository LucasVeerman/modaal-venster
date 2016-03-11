$(document).ready( function() {
    // inhoud van de modale vensters in variabelen gestopt en uit de DOM verwijderd
    var mainstageInhoud = $('#mainstage').detach();
    var luchtfotoInhoud = $('#luchtfoto').detach();
    var dreamvilleInhoud = $('#dreamVille').detach();
    var vroegerInhoud = $('#2005').detach();
    
    
    // modaal venster plaatsen
    $('#mainstage2').on('click', function(){
         modaalVenObject.openen({inhoud: mainstageInhoud, breedte: 600});//breedte van modaal-inhoud
    });
     $('#luchtfoto2').on('click', function(){
         modaalVenObject.openen({inhoud: luchtfotoInhoud, breedte: 600});//breedte van modaal-inhoud
    });
   
     $('#dreamVille2').on('click', function(){
         modaalVenObject.openen({inhoud: dreamvilleInhoud, breedte: 600});//breedte van modaal-inhoud
    });
    
    $('#20052').on('click', function(){
         modaalVenObject.openen({inhoud: vroegerInhoud, breedte: 600});//breedte van modaal-inhoud
    });
    
});