// Cambio de pestañas desde la barra lateral
document.querySelectorAll('.anime-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.anime-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.anime-card').forEach(card => card.classList.remove('active'));

    button.classList.add('active');
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

// Función para desplegar y colapsar resúmenes
function toggleSummary(cardId) {
  const card = document.getElementById(cardId);
  const collapsible = card.querySelector('.summary-collapsible');
  const btn = card.querySelector('.toggle-btn');
  const btnText = btn.querySelector('.btn-text');

  collapsible.classList.toggle('open');
  btn.classList.toggle('active');

  if (collapsible.classList.contains('open')) {
    btnText.textContent = 'Ocultar Transcripciones';
  } else {
    btnText.textContent = 'Ver Transcripciones Integrales';
  }
}

// LÓGICA DEL CHATBOT INTERACTIVO
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

// Abrir/Cerrar Ventana
chatToggle.addEventListener('click', () => chatWindow.classList.toggle('hidden'));
chatClose.addEventListener('click', () => chatWindow.classList.add('hidden'));

// Enviar mensaje con clic o tecla Enter
chatSend.addEventListener('click', processMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') processMessage();
});

function processMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  chatInput.value = '';

  setTimeout(() => {
    const response = getBotResponse(text.toLowerCase());
    appendMessage(response, 'bot');
  }, 350);
}

function appendMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Respuestas Inteligentes
function getBotResponse(input) {
  if (input.includes('sao') || input.includes('sword art') || input.includes('kirito')) {
    return 'Sword Art Online es un resumen loquendo/parodia. Kirito queda atrapado en el juego VRMMO Aincrad y debe superar los pisos para salir libre.';
  } 
  else if (input.includes('death note') || input.includes('kira') || input.includes('light')) {
    return 'Death Note relata la batalla táctica entre Light Yagami (Kira) y el detective L tras encontrar la libreta de la muerte de Ryuk.';
  } 
  else if (input.includes('recopilacion') || input.includes('memoria') || input.includes('romance')) {
    return 'La recopilación de 4 animes contiene historias como "Debu to Love" (Yume supera sus miedos al perder la memoria) y "Bukiyou na Senpai" (ansiedad social en la oficina).';
  } 
  else if (input.includes('hola') || input.includes('buenas') || input.includes('hey')) {
    return '¡Saludos! ¿Qué anime o resumen te gustaría consultar hoy?';
  } 
  else if (input.includes('quien eres') || input.includes('creador')) {
    return 'Soy el bot interactivo desarrollado para la plataforma Omega D Star Enterprise.';
  } 
  else {
    return 'No entendí bien tu consulta. Prueba escribiendo: "SAO", "Death Note", "Recopilacion" o "Hola".';
  }
}