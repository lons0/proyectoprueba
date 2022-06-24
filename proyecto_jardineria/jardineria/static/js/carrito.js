class Carrito{
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto= e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto){
        const infoProducto ={
            imagen : producto.querySelector('img').src,
            titulo : producto.querySelector('h4').textContent,
            precio : producto.querySelector('.precio span').textContent,
            id : producto.querySelector('a').getAtribute('data-id'),
            cantidad: 1
        }
        let productosLS;
        productosLS =this.obtProductosLocalStorage();
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS= productoLS.id;
            }
        });
        if (productosLS=== infoProducto.id) {
            Swal.fire({
                type:'info',title:'Oops...', 
                text:'Este producto ya ha sido agregado', 
                Timer:3000,showConfirmButton:false })
        } 
        else {
            this.insertarCarrito(infoProducto);    
        }
        

    }

    insertarCarrito(producto){
        const row=document.createElement('tr');
        row.innerHTML =`
            <td> <img src="${producto.imagen}" width=100 > </td>
            <td> ${producto.titulo}</td>
            <td> ${producto.precio}</td>
            <td> 
                <a href=# class="borrar-producto fas fa-times-circle" data-id="${producto.id}"> </a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.gProductosLocalStorage(producto);

    }

    eliminarProducto(e){
        e.preventDefault();
        let producto,productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto= e.target.parentElement.parentElement;
            productoID=producto.querySelector('a').getAtribute('data-id')
        }
        this.eliminarProductoLocalStorage(productoID)

    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild)
        }
        this.vacialLocalStorage()

        return false;

    }

    gProductosLocalStorage(producto){
        let productos ;
        productos=this.obtProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    
    obtProductosLocalStorage(){
        let productoLS;
        if (localStorage.getItem('productos')===null) {
          productoLS=[];  
        } 
        else {
            productoLS=JSON.parse(localStorage.getItem('productos'));
        }   
        return productoLS;
    }
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS=this.obtProductosLocalStorage();
        productosLS.forEach(function(productoLS,index){
            if (productosLS.id===productoID){
                productosLS.splice(index,1);
            }
        });

        localStorage.setItem('productos', JSON.stringify(productosLS))
    }

    leerLocalStorage(){
        let productosLS;
        productosLS =  this.obtProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row=document.createElement('tr');
            row.innerHTML =`
            <td> <img src="${producto.imagen}" width=100 > </td>
            <td> ${producto.titulo}</td>
            <td> ${producto.precio}</td>
            <td> 
                <a href=# class="borrar-producto fas fa-times-circle" data-id="${producto.id}"> </a>
            </td>
        `;
        listaProductos.appendChild(row);

        });

    }
    leerLocalStorageCompra(){
        let productosLS;
        productosLS =  this.obtProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row=document.createElement('tr');
            row.innerHTML =`
            <td> <img src="${producto.imagen}" width=100 > </td>
            <td> ${producto.titulo}</td>
            <td> ${producto.precio}</td>
            <td>
                <input type="number" class="from-control cantidad" min="1" value=${precio.cantidad}> 
            </td>
            <td> ${producto.precio*producto.cantidad} </td>
            <td> 
                <a href=# class="borrar-producto fas fa-times-circle" style data-id="${producto.id}"> </a>
            </td>
        `;
        listaCompra.appendChild(row);

        });

    }

    vacialLocalStorage(){
        localStorage.clear();
    }

    procesarPedido(){
        e.preventDefault();
        if (this.obtProductosLocalStorage().length ===0) {
            Swal.fire({
                type:'error',title:'Oops...', 
                text:'El carrito está vacio, debes agregar un producto', 
                Timer:3000,showConfirmButton:false })
        }
        else{
            location.href="compra.html";
        }
    }


    calcularTotal(){
        let productoLS;
        let total = 0, subtotal=0, igv=0;
        productoLS= this.obtenerProductoLocalStorage();
        for(let i=0; i<productoLS.length; i++){
            let element = Number(productoLS[i].precio * productoLS[i].cantidad);
            total=total+element;
        }
        igv =parseFloat(total*0.18).toFixed(2);
        subtotal= parseFloat(total-igv).toFixed(2);

        document.getElementById('subtotal').innerHTML= "S/."+ subtotal;
        
    }

    
}
