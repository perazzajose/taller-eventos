document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('div');

    div.addEventListener('click', function(event) {
        if (event.target !== document.getElementById('saludarButton')) {
            alert('Hola soy el div');
        }
    });
});
