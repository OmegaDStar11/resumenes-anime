// Cambio de pestañas
document.querySelectorAll('.anime-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.anime-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.anime-card').forEach(card => card.classList.remove('active'));

    button.classList.add('active');
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

// Toggle Desplegable
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

// LÓGICA DEL CHATBOT
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

chatToggle.addEventListener('click', () => chatWindow.classList.toggle('hidden'));
chatClose.addEventListener('click', () => chatWindow.classList.add('hidden'));

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // Renderizar mensaje del usuario
  appendMessage(text, 'user');
  chatInput.value = '';

  // Respuesta simulada del bot
  setTimeout(() => {
    const response = getBotResponse(text.toLowerCase());
    appendMessage(response, 'bot');
  }, 400);
}

function appendMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
  if (input.includes('sao') || input.includes('sword art online')) {
    return 'SAO trata sobre Kirito atrapado en un juego de realidad virtual donde morir en el juego implica morir en la vida real. ¡Revisa la sección "Sword Art Online" en el menú!';
  } else if (input.includes('death note') || input.includes('kira')) {
    return 'Death Note narra el duelo psicológico entre Light Yagami (Kira) y el detective L. Encuentras la transcripción completa en la pestaña "Death Note".';
  } else if (input.includes('recopilacion') || input.includes('romance') || input.includes('comedia')) {
    return 'La recopilación incluye 4 historias interesantes: Debu to Love, Bukiyou na Senpai, Taiyou yori mo Mabushii Hoshi y Kikaijikake no Marie.';
  } else if (input.includes('hola') || input.includes('buenas')) {
    return '¡Hola! ¿En qué puedo ayudarte hoy? Escribe el nombre de un anime o un tema.';
  } else {
    return 'Puedo ayudarte a buscar entre las transcripciones. Prueba preguntando por "SAO", "Death Note" o "Recopilación".';
  }
}