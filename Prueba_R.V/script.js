document.getElementById("miFormulario").addEventListener("submit", function(event){
    event.preventDefault(); 

    var Nombre = document.getElementById("Nombre").value;
    var Email = document.getElementById("Email").value;

    fetch('http://localhost:3000/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            Nombre: Nombre,
            Email: Email 
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Datos enviados correctamente.');
            document.getElementById("miFormulario").reset();
        } else {
            alert('Error al enviar los datos.');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
}); 
//acá intente/hice un commit q antes no hice pq me cambie de compu y en el otro no pude hacerlo... por si acaso. 