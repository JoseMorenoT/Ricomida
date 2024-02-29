// ACTIVAR TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// ACTIVAR POPOVERS
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



$(function() {
    
    $("#btn-principal").on("click", function(){
        alert("Gracias por darme clic!");
        $(this).text("Gracias por darme clic!");
    });



    $("#elemento1").on("dblclick", function(){
        $(this).css("color", "red");
    });


    $("#foto-elemento1").on("click", function(){
        $(".descripcion").toggle("slow");
    })


    $("#formulario").on("submit", function(event){
        event.preventDefault();
        alert("Se ha inscrito correctamente al concurso.");
        $("#tituloFormulario").css("color", "red");
    });

    $("#linkReclamo").on("click", function(event){
        event.preventDefault();
        console.log(event);
    })
    
    $(".card-title").on("click", function(){
        $(".card-text").toggle("slow");
    })
});
