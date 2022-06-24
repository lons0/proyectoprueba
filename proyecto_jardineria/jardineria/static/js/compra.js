const compra= new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarComrpraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');
 cargarEventos();

 function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorage());
    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});
    compra.calcularTotal();
    procesarComrpraBtn.addEventListener('click', procesarCompra);
 }

 function procesarCompra(e) {
    e.preventDefaut();
    if(compra.obtProductosLocalStorage().length===0){
        Swal.fire({
            type:'error',title :'ops',text:'no hay productos ',timer:2000, showConfirmButton: false
        }).then(function(){
            window.location="indexgaleria.html";
        })
    }
    else if(cliente.value==='' || correo.value===''){
        Swal.fire({
            type:'error',title :'ops',text:'Ingresa campos ',timer:2000, showConfirmButton: false
        })
        
    }
    else {
        const cargargif =document.querySelector('#cargar');
        cargargif.style.display= 'block';
        
        const enviar =document.createElement('img');
        enviado.src= 'img/mail.gif';
        enviado.style.display='block';
        enviado.width ='150'
        setTimeout(()=> {
            cargarGif.style.display='none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(()=> { 
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location="indexgaleria.html"
            },2000);
        },3000 );
    }

    function generarTabla(productosLS) {
        let div = document.createElement("div");
    
        let tabla = document.createElement("table");
        
        tabla.innerHTML += `<table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Sub total</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>`;
    
        const body = tabla.childNodes[3];
    
        // productosLS = compra.obtenerProductosLocalStorage();
        productosLS.forEach(producto => {
            const row = document.createElement("tr");
            row.innerHTML += `
                                <td>${producto.titulo}</td>
                                <td>${producto.precio}</td>
                                <td>${producto.cantidad}</td>
                                <td>${producto.precio * producto.cantidad}</td>
                            `;
            body.appendChild(row);
        });
    
        tabla.appendChild(body);
        div.appendChild(tabla);
        return div;
    }

}