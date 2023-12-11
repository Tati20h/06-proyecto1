
//Guardar ene le almacenamiento local  
export const GuardarEnStorage = (clave, elemento) => {

  //Conseguir los elementos que ya tenemos en el localStorage
  let elementos = JSON.parse(localStorage.getItem(clave));


  //Comprobar si es un arrey 
  if (Array.isArray(elementos)) {
    //añadir elemento nuevo dentro del array
    elementos.push(elemento);
  } else {
    //crear un array con el elemento nuevo
    elementos = [elemento];
  };

  // Guardar en el localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));
  //Devolver Objeto guardado 
  return elemento;

}