//botones
var pantallaOp = document.getElementById("panatallaOp");

var b0 = document.querySelector(".b0");
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
var b4 = document.querySelector(".b4");
var b5 = document.querySelector(".b5");
var b6 = document.querySelector(".b6");
var b7 = document.querySelector(".b7");
var b8 = document.querySelector(".b8");
var b9 = document.querySelector(".b9");

var bAc = document.querySelector('.bAc');
var bmas = document.querySelector('.bmas');
var bres = document.querySelector('.bres');
var bpor = document.querySelector('.bpor');
var bdiv = document.querySelector('.bdiv');
var bporc = document.querySelector('.bporc');

var bigua = document.querySelector(".bigua");
var histo = document.querySelector(".histo");

//EventListeners
listeners()
function listeners(){
    var operacion = []
    b0.addEventListener('click',()=>{
        pantallaOp.innerText += 0 
        operacion += 0;
    })
    b1.addEventListener('click',()=>{
       pantallaOp.innerText += 1
       operacion += 1;
    })
    b2.addEventListener('click',()=>{
        pantallaOp.innerText += 2 
        operacion += 2;
    })
    b3.addEventListener('click',()=>{
        pantallaOp.innerText += 3
        operacion += 3;
     })
    b4.addEventListener('click',()=>{
         pantallaOp.innerText += 4 
         operacion += 4;
    })
    b5.addEventListener('click',()=>{
        pantallaOp.innerText += 5 
        operacion += 5;
    })
    b6.addEventListener('click',()=>{
        pantallaOp.innerText += 6 
        operacion += 6;
    })
    b7.addEventListener('click',()=>{
        pantallaOp.innerText += 7 
        operacion += 7;
    })
    b8.addEventListener('click',()=>{
        pantallaOp.innerText += 8 
        operacion += 8;
    })
    b9.addEventListener('click',()=>{
        pantallaOp.innerText += 9 
        operacion += 9;
    })
    bAc.addEventListener('click',()=>{
        limpiar();
    })
    bmas.addEventListener('click',()=>{
        pantallaOp.innerText += '+';
        operacion+= '+';
        operacionesApagar();
    })
    bres.addEventListener('click',()=>{
        pantallaOp.innerText += '-';
        operacion+= '-';
        operacionesApagar();
    })
    bpor.addEventListener('click',()=>{
        pantallaOp.innerText += '*';
        operacion+= '*';
        operacionesApagar();
        
    })
    bdiv.addEventListener('click',()=>{
        pantallaOp.innerText += '/';
        operacion+= '/';
        operacionesApagar();
    })
    bporc.addEventListener('click',()=>{
        pantallaOp.innerText += '%';
        operacion+= '%';
        operacionesApagar();
    })
    bigua.addEventListener('click',()=>{
        for(let i = 0; i<= operacion.length;i++){
            if(operacion[i] == "+" || operacion[i] == "-" || operacion[i] == "*" || operacion[i] == "/" || operacion[i] == "%"){
                operando(operacion);
                operacion = []
            }
        }
    })
    
}  

//functions
function operando(operacion){
    var numero1 = [];
    var numero2 = [];
    let p = 0;
    for(let i = 0; i <= operacion.length; i++){
        
        if(operacion[i] == "+" || operacion[i] == "-" || operacion[i] == "*" || operacion[i] == "/" || operacion[i] == "%"){
            var u = p + 1
            if(operacion[u] != "+" || operacion[u] != "-" || operacion[u] != "*" || operacion[i] != "/" || operacion[i] != "%"){
                for(let i = u; i <= operacion.length;i++){
                    if(operacion[i] != "+" || operacion[i] != "-" || operacion[i] != "*" || operacion[i] != "/" || operacion[i] != "%"){
                        numero2 += operacion[i];
                    }
                }
                break
            }
        }
        if(operacion[i] != "+" || operacion[i] != "-" || operacion[i] != "*" || operacion[i] != "/" || operacion[i] != "%"){
            numero1 += operacion[i];
        }
        p++ 
    }
    var resultado = 0;
    for(let i = 0; i <= operacion.length; i++){
        if(operacion[i] == "+"){
            resultado = parseInt(numero1) + parseInt(numero2);
            var mensaje =  `${numero1} + ${numero2} = ${resultado}`;
            if(isNaN(resultado)){
                invalido();
                apagar();
            }else{
                pantallaOp.innerHTML = resultado;
                apagar();
                historial(mensaje);
            }

        }else if(operacion[i] == "-"){
            resultado = parseInt(numero1) - parseInt(numero2);
            var mensaje =  `${numero1} - ${numero2} = ${resultado}`;
            if(isNaN(resultado)){
                invalido()
                apagar();
            }else{
                pantallaOp.innerHTML = resultado;
                apagar();
                historial(mensaje);
            }
        }else if(operacion[i] == "*"){
            resultado = parseInt(numero1) * parseInt(numero2);
            var mensaje =  `${numero1} * ${numero2} = ${resultado}`;
            if(isNaN(resultado)){
                invalido();
                apagar();
            }else{
                pantallaOp.innerHTML = resultado;
                apagar();
                historial(mensaje);
            }
        }else if(operacion[i] == "/"){
           resultado = parseInt(numero1) / parseInt(numero2);
           var mensaje =  `${numero1} / ${numero2} = ${resultado}`;
           if(isNaN(resultado)){
            invalido()
            apagar();
        }else{
            pantallaOp.innerHTML = resultado;
            apagar();
            historial(mensaje);
        }
        }else if(operacion[i] == "%"){
            resultado = (parseInt(numero1) * parseInt(numero2)) / 100;
            var mensaje =  `${numero1} % ${numero2} = ${resultado}`
            if(isNaN(resultado)){
                invalido()
                apagar();
            }else{
                pantallaOp.innerHTML = resultado;
                apagar();
                historial(mensaje);
            }
         }
    }
}

function limpiar(){
    pantallaOp.innerHTML = '';
    prender();  
}
function apagar(){
    b0.disabled = true;
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    bmas.disabled = true;
    bres.disabled = true;
    bpor.disabled = true;
    bdiv.disabled = true;
    bres.disabled = true;
    bporc.disabled = true;
    bigua.disabled = true;
}
function prender(){
    b0.disabled = false;
    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;

    bmas.disabled = false;
    bres.disabled = false;
    bpor.disabled = false;
    bdiv.disabled = false;
    bres.disabled = false;
    bporc.disabled = false;
    bigua.disabled = false;
}
function operacionesApagar(){
    bmas.disabled = true;
    bres.disabled = true;
    bpor.disabled = true;
    bdiv.disabled = true;
    bres.disabled = true;
    bporc.disabled = true;
   
}
function invalido(){
    pantallaOp.innerHTML = "invalido";
}
var finalhisto = []
function historial(mensaje){
    finalhisto.push(mensaje);
    localStorage.setItem('resultado', finalhisto);
}
histo.addEventListener(('click'),()=>{
    console.log(localStorage.getItem("resultado"));
})
   

//aplicacion 2
var pantalla = document.querySelector('.pantalla');
var entrada = document.querySelector('.entrada');
var mayuscula = document.querySelector('.mayuscula');
var minuscula = document.querySelector('.minuscula');
var cantidadC = document.querySelector('.cantidadC');
var otroTexto = document.querySelector('.otroTexto');
mayuscula.addEventListener('click',()=>{
    var dato = entrada.value;
    entrada.value = dato.toUpperCase();
    pantalla.innerHTML = entrada.value;
    activar()
    validar()
});
minuscula.addEventListener('click',()=>{
    var dato = entrada.value;
    entrada.value = dato.toLowerCase();
    pantalla.innerHTML = entrada.value;
    activar()
    validar()
})
cantidadC.addEventListener('click',()=>{
    var dato = entrada.value;
    pantalla.innerHTML = entrada.value.length;
    activar()
    validar()
})
otroTexto.addEventListener(('click'), ()=>{
    desactivar();
    pantalla.innerHTML = ''
    limpiarTexto()
})
function limpiarTexto(){
    entrada.value = '';
}
function activar(){
    entrada.disabled = true;
}
function desactivar(){
    entrada.disabled = false;
}
function validar(){
    if(entrada.value == ''){
        pantalla.innerHTML = 'Dato erroneo';
        desactivar();
    }
}