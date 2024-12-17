      // Knockout ViewModel
      var vm = function() {
        this.nome = ko.observable("Joao Silva");
        this.idade = ko.observable("42 Anos");
        this.nu = ko.observable("14253");
        this.medico = ko.observable("Kendrick Lamar Lionel");
        this.hospital = ko.observable("Hospital da Luz");

        this.editar = () => {
            $("input").prop("readonly", false);
        };
    }

    document.addEventListener("DOMContentLoaded", function () {
        const overlay = document.getElementById("overlay");
        const closeOverlayButton = document.getElementById("voltar");
        const overlay2 = document.getElementById("overlay2");
        const closeOverlayButton2 = document.getElementById("voltar2");
        const overlay3 = document.getElementById("overlay3");
        const closeOverlayButton3 = document.getElementById("voltar3");

        // Mostrar o overlay
        document.getElementById('Grafico').addEventListener("click", function () {
            overlay.classList.remove("d-none");
        });
        document.getElementById('Grafico2').addEventListener("click", function () {
            overlay2.classList.remove("d-none");
        });
        document.getElementById('Grafico3').addEventListener("click", function () {
            overlay3.classList.remove("d-none");
        });

        // Ocultar o overlay
        closeOverlayButton.addEventListener("click", function () {
            overlay.classList.add("d-none");
        });
        closeOverlayButton2.addEventListener("click", function () {
            overlay2.classList.add("d-none");
        });
        closeOverlayButton3.addEventListener("click", function () {
            overlay3.classList.add("d-none");
        });
    });

    // Apply Knockout bindings
    $(document).ready(function () {
        console.log("ready!");
        VM = new vm() 
        ko.applyBindings(VM);
    });

    
    