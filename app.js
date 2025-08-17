// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombre = inputAmigo.value;
  
  if (nombre) {
    amigos.push(nombre);
    inputAmigo.value = '';
    mostrarAmigos();
    
    // Pone el cursor en el campo de entrada después de agregar un amigo
    inputAmigo.focus(); 
  } else {
    alert('Por favor, ingresa un nombre.');
  }
}

function mostrarAmigos() {
  const lista = document.getElementById('listaAmigos');
  const resultadoDiv = document.getElementById('resultadoSorteo');

  // Limpia el resultado del sorteo si existe
  if (resultadoDiv) {
    resultadoDiv.innerHTML = '';
  }
  
  // Muestra la lista de amigos
  lista.style.display = 'block';
  lista.innerHTML = '';
  
  for (let i = 0; i < amigos.length; i++) {
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigos[i];
    lista.appendChild(nuevoAmigo);
  }
}

function sortearAmigo() {
  const lista = document.getElementById('listaAmigos');
  const resultadoDiv = document.getElementById('resultado');

  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega algunos nombres.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Oculta la lista de amigos y muestra el resultado
  lista.style.display = 'none';
  
  if (resultadoDiv) {
    resultadoDiv.innerHTML = `<p>¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!</p>`;
  } else {
    console.error("No se encontró el elemento con el ID 'resultado'.");
  }
}