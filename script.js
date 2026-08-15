const datosResumenes = [
  {
    titulo: "Death Note - Resumen en 5 minutos",
    texto: `[00:00] Un tipo consigue un cuadernito que tiene el poder de matar a cualquiera y con ese poder decide matar a todos los malos para crear un mundo mejor...
    
[01:06] Pero como ya dije, Light solo la usa para matar criminales, que ya hasta le han dado el apodo de Kira por asesino...

[03:17] Misa Amane, una chica que también tiene una Death Note y con ella un nuevo shinigami, Rem...

[07:42] Y así es como termina esta increíble y épica historia. Al final se murió L, se murió Light, se murió Mello y la Misa se terminó suicidando.`
  },
  {
    titulo: "Resumen Variado (Historias Cortas & Romcoms)",
    texto: `[00:00] Yume Kokoda es una gordita que harta de su vida decide autodesvivirse para iniciar de nuevo...

[09:49] Y bueno, no es el único cuate que lo lo estaba pasando mal. La historia comienza con esta mujer, Kanagawa...

[20:27] Más adelante en un reino vecino conocemos a este cuate...

[31:43] Mientras tanto, en el otro mundo, el anime comienza enfocándonos a esta preciosura, que resulta ser una roboguai fu sirvienta...`
  },
  {
    titulo: "Sword Art Online (SAO) - Resumen",
    texto: `[00:00] Bienvenido a Sword Art Online, es el mejor juego del mundo. Valió madres, están atrapados hasta que hayan completado los 100 pisos...

[01:09] Soy el espadachín negro. ¿Por qué demonios es tan poderoso?

[02:24] Eres Kayaba Akihiko, ¿no? Obviamente, nadie puede ganarme en este juego.

[04:23] Y así terminó. Salvé a mi chica, derroté al malo y escapé del juego después de dos años de vida tortuosa en ella. ¡A jugar SAO de nuevo!`
  }
];

function cargarResumen(indice) {
  const item = datosResumenes[indice];
  document.getElementById('titulo-anime').innerText = item.titulo;
  document.getElementById('texto-transcripcion').innerText = item.texto;
}