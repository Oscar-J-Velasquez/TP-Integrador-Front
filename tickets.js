let resumen = document.getElementById("resumen");

resumen.addEventListener("click", function(){
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value;
    let resultado;
    
    if(categoria == "Estudiante")
    {
        resultado = (200 * cantidad) * 0.20;
        divResultado.textContent = "Total a Pagar: $" + resultado;
    }
    else
    {
        if(categoria == "Trainee")
        {
            resultado = (200 * cantidad) * 0.5;
            divResultado.textContent = "Total a Pagar: $" + resultado;
        }
        else
        {
            resultado = (200 * cantidad) * 0.85;
            divResultado.textContent = "Total a Pagar: $" + resultado;
        }
    }
    return resultado;
})

let form = document.getElementById("formulario");
let divResultado = document.getElementById("mostrarResultado");
form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
});

let borrar = document.getElementById("borrar");
borrar.addEventListener("click", function(){
    divResultado.textContent = "";
})


    
