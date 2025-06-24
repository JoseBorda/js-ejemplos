// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// //console.log(document.documentElement);
// //console.log(document.doctype);
// //console.log(document.charset);
// document.title = 'probando';
// //<>resct</>
// console.log(document.title);

// function prueba() {
//     var parrafo = document.getElementById('parrafo');
//     parrafo.textContent = 'Hola Sofia, como estas';
// }

// function devolver() {
//     var parrafo = document.getElementById('parrafo');
//     parrafo.textContent = 'No critique mi bigote';
// }

// let t = document.getElementById('top');
// let attr = t.getAttributeNode('id');
// console.log(attr);
// alert(attr.value === 'top');

// para manipular una etiqueta y cambiarle la clase y cambiarle el texto

// function cambiarColor() {
//     form = document.getElementById('cambiar');
//     form.className = 'rojo';
//     form.innerText = 'Este es un cambio de color';
// }

// function ocultarElemento() {
//     form = document.getElementById('body');
//     form.className = 'rojo';
//     form.innerText = 'Este es un cambio de color';
// }

// i = 0;
// function aumentar() {
//     documento = document.getElementById('documento');
//     form = document.getElementById('cambiar');
//     ++i;
//     form.innerText = i;

//     if (i >= 0) {
//         form.className = 'normal';
//     }
// }
// boton = document.getElementById('aumentar');
// boton.addEventListener('click', aumentar);

// function disminuir() {
//     form = document.getElementById('cambiar');
//     --i;
//     form.innerText = i;

//     if (i < 0) {
//         form.className = 'rojo'
//     } 
// }

// boton = document.getElementById('disminuir');
// boton.addEventListener('click', disminuir);

// function agregandoNombre() {
//     nombre = document.getElementById('nombre');

//     name = nombre.value;
    

//     if (name != '') {
//         elemento = document.createElement('li');
//         elemento2 = document.createElement('div');
//         elemento2.textContent = 'hola probando div';
//         document.getElementById('lista2').appendChild(elemento2);
//         elemento.textContent = name;
//         document.getElementById('lista').appendChild(elemento);
//         nombre.value = ''
//     }
// }

// function eliminarElemento() {
//     elemento = document.getElementById('lista');
//     elemento.parentNode.removeChild(elemento);
// }
document.getElementById('descripcion').addEventListener('input', function() {
        document.getElementById('contador').textContent = document.getElementById('descripcion').value.length;
});
function formulario() {
    form = document.getElementById('documento'); // obtener todos los elementos del documento html para manipularlo 

    if (form.nombre.value == '') {
        alert('Debes de digitar un titulo');
        return;
    }

    if (form.descripcion.value == '') {
        alert('Debe digitar una descripcion');
        return;
    }
    
    
    document.getElementById('contador').textContent = 

    document.getElementById('tarjeta').className = 'target';
    document.getElementById('contador').className = 'contador';
    document.getElementById('title').textContent = form.nombre.value;
    document.getElementById('description').textContent = form.descripcion.value;

    form.nombre.value = '';
    form.descripcion.value = '';

    

    // name = form.nombre.value;
    
    // creando una lista con elementos li y agregando elementos div de prueba
    // if (name != '') {
    //     elemento = document.createElement('li');
    //     elemento2 = document.createElement('div');
    //     elemento2.textContent = 'hola probando div';
    //     document.getElementById('lista2').appendChild(elemento2);
    //     elemento.textContent = name;
    //     document.getElementById('lista').appendChild(elemento);
    //     nombre.value = ''
    // }
}
