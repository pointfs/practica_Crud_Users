

//Método GET la R del CRUD

async function getUsers(){  //async para que sea asincrono
  const result = await fetch('http://localhost:3000/users');    //await para que espere a que se ejecute la api
  const data = await result.json()   ////await para que espere a que se ejecute la promesa y se convierta en json, guarda en una variable el resultado de la promesa
  return data
}




let sectionTag = document.getElementById('user-list');  //creo una variable que obtenga el elemento del html ID user-list

async function printUsers(){ //funcion para imprimir los usuarios
  let users = await getUsers();  //esperamos a que se ejecute la funcion getUsers

  console.log(users);  //imprimimos en consola los usuarios

  users.map((user) => {  //iteramos sobre cada usuario
    
    sectionTag.innerHTML += `
    <h3>[${user.name}}</h3>
    <p>${user.email}</p>
    <button onclick="deleteUser(${user.id}">Eliminar</button>`;
  })
}


/*Este código JavaScript define dos funciones asincrónicas, getUsers y printUsers, que interactúan con una API y actualizan el DOM en consecuencia.

La función getUsers hace una solicitud fetch a la URL 'http://localhost:3000/users'. Esta es una operación asincrónica, por lo que se utiliza await para esperar a que se complete antes de continuar. Una vez que la promesa se resuelve, se convierte la respuesta en JSON y se devuelve.

La función printUsers primero llama a getUsers y espera a que se complete con await. Luego, toma la lista de usuarios devuelta y utiliza map para iterar sobre cada usuario. Para cada usuario, se añade un nuevo elemento <h3> al elemento HTML con el id 'user-list', que contiene el nombre del usuario.

Por lo tanto, este código recupera una lista de usuarios de una API y luego actualiza el DOM para mostrar los nombres de los usuarios en elementos <h3>.*/


//MÉTODO POST C (CREATE) DEL CRUD



async function createUser(name, email) {
const newUser = await (name, email) //async para que sea asincrono   //funcion para crear un usuario
 const result = await fetch('http://localhost:3000/users', { 
    method: 'POST', 
    body: JSON.stringify({  //await para que espere a que se ejecute la api
      name: name,
      email: email
    }),
    headers: {
      'Content-Type': 'application/json'
    } 
  })
  const data = await result.json()   ////await para que espere a que se ejecute la promesa y se convierta en json, guarda en una variable el resultado de la promesa
  return data;
}



//MÉTODO DELETE D (DELETE) DEL CRUD

async function deleteUser(id){  //async para que sea asincrono por ID
  const result = await fetch(`http://localhost:3000/users/${id}`,  //await para que espere a que se ejecute la api
  {method: 'DELETE'})   //await para que espere a que se ejecute la promesa y se convierta en json, guarda en una variable el resultado de la promesa
  const data = await result.json()   ////await para que espere a que se ejecute la promesa y se convierta en json, guarda en una variable el resultado de la promesa
  return data;
}


//MÉTODO PUT U (UPDATE) DEL CRUD

async function updateUser(id, name, email){  //async para que sea asincrono por ID  //funcion para actualizar un usuario
  const result = await fetch(`http://localhost:3000/users/${id}`, { 
    method: 'PUT',  //await para que espere a que se ejecute la api
    body: JSON.stringify({ //await para que espere a que se ejecute la promesa y se convierta en json, guarda en una variable el resultado de la promesa
      name: name,
      email: email
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}