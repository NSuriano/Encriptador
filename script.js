
const code = [
    ['e', 'enter'],//indice o
    ['i', 'imes'],// 1
    ['a', 'ai'],  // 2
    ['o', 'ober'],// 3
    ['u', 'ufat'] // 4
];

let textEncriptado="";
let desencriptado="";
let ingreso="";
const textoPermitido = /^[a-z0-9-" "]+$/;
copia.disabled = true;



function validar(ingreso) {
    ingreso = document.getElementById('ingreso').value;
    let prueba = textoPermitido.test(ingreso);
    
    if (prueba === true){
        condicion.style.color = 'green';
    }else {
        condicion.style.color = 'red';
        mensaje.disabled= true;
        window.location.reload();
    }
   
    return;
}

    
function mostrarTexto(texto){
    let area = document.getElementById('mostrarResultado');
    return area.innerHTML= texto;
   
}


function encriptar(){
    ingreso = document.getElementById('ingreso').value;
   
     validar(ingreso);
   
    for(let i=0; i< code.length; i++){
            if(ingreso.includes(code[i][0])){
                ingreso = ingreso.replaceAll(code[i][0],code[i][1]);
                textEncriptado= ingreso;
            }
    }
         
       mostrarTexto(textEncriptado);
       copia.disabled = false;
       
       return;
}


function desencriptar(){
    let ingreso = document.getElementById('ingreso').value;
    for(let i=0; i< code.length; i++){
        if(ingreso.includes(code[i][1])){
            ingreso = ingreso.replaceAll(code[i][1],code[i][0]);
            desencriptado = ingreso;
        }
    }

   return mostrarTexto(desencriptado);
   
    
}


function copiar(){
    let textoDesencriptado = document.getElementById('mostrarResultado').textContent;
    navigator.clipboard.writeText(textoDesencriptado);//el método writeText para copiar el texto en el portapapeles
    alert('texto copiado');
    window.location.reload();
    return;
}
