const inputTexto=document.querySelector(".textarea-right")
const mensaje=document.querySelector(".textarea-container-left")

function encriptar(stringEncriptado){
  var matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u","ufat"]];
  stringEncriptado=stringEncriptado.toLowerCase();

  for(var i=0; i<matrizCodigo.length;i++){
    if (stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
  }
  return stringEncriptado;    
}

function btnEncriptar(){
  
  const textoEncriptado = encriptar(inputTexto.value)
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage="none";
  inputTexto.value="";
  const diveliminar = document.getElementsByClassName("info")[0]
  diveliminar.style.display="none";
  // diveliminar.style.fontsize="20px";
  document.getElementsByClassName("button-copiar")[0].style.display="block";
}

function desencriptar(stringEncriptado){
  var matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u","ufat"]];
  stringEncriptado=stringEncriptado.toLowerCase();

  for(var i=0; i<matrizCodigo.length; i++){
    if (stringEncriptado.includes(matrizCodigo[i][1])){
      stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
  }
  return stringEncriptado;
}

function btnDesencriptar(){
  const textoDesencriptado=desencriptar(inputTexto.value);
  mensaje.value = textoDesencriptado;
  mensaje.style.backgroundImage="none";
  inputTexto.value="";
}
function copiar(){
  mensaje.select()
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = ""
  mensaje.style.backgroundImage = "none";
}