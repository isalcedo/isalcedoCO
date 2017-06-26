$( document ).ready(function() {
    $('.show-tltr').click(function(){
        $('.isal-tltr').slideToggle();
        $(this).text(function(i, text){
          return text === "Leer más..." ? "Ocultar" : "Leer más...";
      })
    });
});