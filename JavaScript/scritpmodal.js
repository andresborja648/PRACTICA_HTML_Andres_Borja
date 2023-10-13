document.getElementById("openModalBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const ciudad = document.getElementById("ciudad").value;
    const edad = document.getElementById("edad").value;
    
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `Nombre: ${nombre}<br>Dirección: ${direccion}<br>Teléfono: ${telefono}<br>Correo: ${correo}<br>Ciudad: ${ciudad}<br>Edad: ${edad}`;

    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    document.getElementById("closeModalBtn").addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});