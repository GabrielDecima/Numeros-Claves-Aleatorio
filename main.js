const min = document.getElementById("min");
const max = document.getElementById("max");
const boton = document.getElementById("boton");
const visor = document.getElementById("visor");
const error = document.getElementById("error");



const generarAleatorio = (min, max) =>{

   
return Math.ceil(Math.random() * (max - min) +min);

};


boton.addEventListener('click', ()=>{

auxmin= min.value;

auxmax= max.value;

if(auxmin =="" || auxmax==""){
    error.innerText = "Error - Debes ingresar un rango";
    visor.value= "";
}else{
const numeroGenerado = generarAleatorio(auxmin,auxmax);
visor.value= numeroGenerado;

error.innerText = " ";
}

});



////////////////////////////////////////////////////


const botonContraseña = document.getElementById("boton-contraseña");
const visorContraseña = document.getElementById("visor-contraseña");
const minContra = document.getElementById("mincontra");
const errorContra = document.getElementById("errorcontra");

let numeros ="0123456789";
let letras ="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let simbolos =".,¿?-+*/°!;$%&/()=[]{}><@";
let completo = numeros + letras +simbolos;


const generarPassword  = (longitud) =>{
    let password ="";
    for (let index = 0; index < longitud; index++) {
        let aleatorio = Math.ceil(Math.random() * completo.length);
        password+= completo.charAt(aleatorio); 
    }
    return password;
    
} 


botonContraseña.addEventListener('click',()=>{
   
    auxlon = minContra.value;
    if(auxlon =="" || auxlon < 8){
        errorContra.innerText ="Debes ingresar una longitud valida";
        visorContraseña.value = "";
    }else{

    const pass = generarPassword(auxlon);
    visorContraseña.value = pass;
    errorContra.innerText =" ";
}
})
