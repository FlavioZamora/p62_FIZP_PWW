// Obtener elementos del DOM
const fileInput = document.getElementById('file-input');
const loadBtn = document.getElementById('load-btn');
const deleteBtn = document.getElementById('delete-btn');
const imagePreview = document.getElementById('image-preview');

// Habilitar o deshabilitar botón de eliminación según si hay una imagen cargada
fileInput.addEventListener('change', function() {
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      deleteBtn.disabled = false;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
});

// Eliminar la imagen cargada y deshabilitar el botón de eliminación
deleteBtn.addEventListener('click', function() {
  imagePreview.src = '#';
  fileInput.value = '';
  deleteBtn.disabled = true;
});