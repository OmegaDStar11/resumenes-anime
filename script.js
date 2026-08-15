// Cambio de pestañas desde el Menú Lateral
document.querySelectorAll('.anime-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.anime-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.anime-card').forEach(card => card.classList.remove('active'));

    button.classList.add('active');
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

// Función Toggle para Desplegar / Colapsar Resúmenes
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