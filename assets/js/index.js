$(function() {
    $( "#BotonEnviar" ).tooltip();
  });

  $(function() {
    $( "#BotonFav" ).tooltip();
  });

    // Espera a que el DOM esté listo
    $(document).ready(function() {
        // Agrega un evento de clic al botón con el ID "miBoton"
        $("#BotonEnviar").click(function() {
          // Código a ejecutar cuando se hace clic en el botón
          alert("El correo fue enviado correctamente..!");
        });

        // Agrega un evento de doble clic al título "INGREDIENTES"
        $("#TituloIngrediente").on("dblclick", function() {
          // Agrega la clase 'rojo' al título
          $(this).css({
            'color': 'red'
          });
        });
    
        // Agrega un evento de doble clic al título "PREPARACIÓN"
        $("#TituloPreparacion").on("dblclick", function() {
          // Agrega la clase 'rojo' al título
          $(this).css({
            'color': 'red'
          });
        });

        $(".TituloReceta").on("click", function() {
            // Código a ejecutar cuando se hace clic en el botón
            $(".DescReceta").toggle();
          });

   });
