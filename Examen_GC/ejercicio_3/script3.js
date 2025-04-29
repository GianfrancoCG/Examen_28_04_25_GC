/* DOMContentLoaded es un comando que sirve para ejecutar JS cuando todo el html ha sido cargado sin esperar carga de imagenes, css u otros  */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm"); // Obtenemos el formulario por su ID
  
    // El boton de enviar el formulario valida que los valores de los campos sean correctos
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Obtenemos los valores de los campos
      const nameInput = document.getElementById("name");
      const ageInput = document.getElementById("age");
    
  
      // Variable para controlar si el formulario es válido o no
      let isValid = true;
  
      // Validación de los campos
      // Nombre
      if (nameInput.value.trim() === "") {
        setError(nameInput, "El nombre es obligatorio.");
        isValid = false;
      } else {
        clearError(nameInput);
      }
      if (ageInput.value.trim() === "") {
        setError(ageInput, "La edad es obligatoria.");
        isValid = false;
      } else {
        clearError(ageInput);
      }
  
      // Envio de formulario
      if (isValid) {
        alert("Se guardo con exito"); // Mensaje tras envio de formulario
        form.reset(); // Reinicio de formulario
        [nameInput, emailInput, messageInput].forEach(clearError); // Limpia mensajes de error
      } else {
        alert("Error, debe llenar todos los campos")
      }
    });
  

    function setError(input, message) {
      input.classList.add("is-invalid");
      const errorContainer = document.getElementById(`${input.id}Error`);
      errorContainer.textContent = message;
    }
  

    function clearError(input) {
      input.classList.remove("is-invalid");
      const errorContainer = document.getElementById(`${input.id}Error`);
      errorContainer.textContent = "";
    }
  });
  