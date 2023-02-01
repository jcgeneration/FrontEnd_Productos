let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='/api/productos/';
function addItems(div_Productos) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
            productos=json;
            Array.from(json).forEach((p, index) => {
                div_Productos.innerHTML += `
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img class="bd-placeholder-img card-img-top" role="img" src="img/${p.imagen}" />
                        <div class="card-body">
                        <p class="card-text"><strong>${p.nombre}</strong></p>
                        <p class="card-text">${p.descripcion}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" id="btnVer_${p.id}" onclick="view(${index});">Ver</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                            </div>
                            <small class="text-muted">$ ${p.precio} MXN</small>
                        </div>
                        </div>
                    </div>
                    </div>
                `;
            }); // foreach
        });//then
    }).catch(function(err) {
        console.log(err);
    });
    console.log(document.getElementById("div_Productos"));
   
}// addItems

window.addEventListener("load", function (){
    let div = document.getElementById("div_Productos");
    addItems(div);
   
});

function view(index) {
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=productos[index].nombre;
    document.getElementById("productBodyModal").innerHTML=`${productos[index].descripcion}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${productos[index].imagen}" />
    <strong>$ ${productos[index].precio} MXN<strong>`;
    $("#productModal").modal("show");
}// view

/////// El siguiente código agrega un nuevo producto mediante un POST
// const data =     {nombre: "Cuaderno doble raya",
//     descripcion: "Cuaderno doble raya Norma",
//     price: 56.0,
//     url_Imagen: "cuadernodobleraya.jpg"
// };

// fetch(URL_MAIN, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });