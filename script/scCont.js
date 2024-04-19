function calculoCont(){
    
}
var datos = ["Costa Rica", "Venezuela", "Honduras", "Salvador", "Nicaragua"];

function fill() {
    
    var fil = document.getElementById("fila");

    for (var i = 0; i < datos.length; i++) {
        var nuevIn = document.createElement("input");
        nuevIn.id = "inicio_" + i; // ID único para el inicio
        var nuevIn2 = document.createElement("input");
        nuevIn2.id = "final_" + i; // ID único para el final
        var nuevtd = document.createElement("td");
        var nuevtd2 = document.createElement("td");
        var nuevoTr = document.createElement("tr");

        // set datito
        nuevoTr.innerText = datos[i];
        // Agregar el nuevo <td> 
        fil.appendChild(nuevoTr);
        nuevoTr.appendChild(nuevtd);
        nuevtd.appendChild(nuevIn);
        nuevoTr.appendChild(nuevtd2);
        nuevtd2.appendChild(nuevIn2);
    }
}

function recuperaDato() {
    for (var i = 0; i < datos.length; i++) {
        var inicio = document.getElementById('inicio_' + i);
        var final = document.getElementById('final_' + i);
        localStorage.setItem('inicio_' + i, inicio.value);
        localStorage.setItem('fin_' + i, final.value);
        var num1 =inicio.value;
     var num2 =final.value;
     var anhioI = parseFloat(num1);
     var anhioF = parseFloat(num2);
     
     var iwei= (((anhioI - anhioF) / anhioI) * 100) * -1;
     console.log("iwei"+ iwei);
    }
    
}





fill();











   

