function calculoCont(){
    
}

function fill(){

     // vect
     var datos = ["Costa Rica", "Venezuela", "Honduras", "Salvador", "Nicaragua"];

     var fil = document.getElementById("fila");
 
     for (var i = 0; i < datos.length; i++) {
         var nuevIn = document.createElement("input");
         nuevIn.id="inicio";
         var nuevIn2 = document.createElement("input");
         nuevIn2.id="final";
         var nuevtd = document.createElement("td");
         var nuevtd2 = document.createElement("td");

         var nuevoTr = document.createElement("tr");
         var nuevoTr2 = document.createElement("tr");
        
         // set datito
         nuevoTr.innerText = datos[i];
         // Agregar el nuevo <td> 
         fil.appendChild(nuevoTr);
         nuevoTr.appendChild(nuevtd);
         nuevtd.appendChild(nuevIn);
         fil.appendChild(nuevtd2);
         
         nuevtd2.appendChild(nuevIn2);  
         
        }


}


function recuperaDato(){
    
     var inicio= document.getElementById('inicio');
     var final= document.getElementById('final');
     localStorage.setItem('inicio', inicio.value);
     localStorage.setItem('fin', final.value);

     var num1 =inicio.value;
     var num2 =final.value;
     var anhioI = parseFloat(num1);
     var anhioF = parseFloat(num2);
     
     var iwei= (((anhioI - anhioF) / anhioI) * 100) * -1;
     console.log("iwei"+ iwei);
     
     
    }

fill();











   

