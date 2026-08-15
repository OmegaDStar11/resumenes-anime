const datosAnimes = [
  {
    id: 0,
    titulo: "Death Note - Resumen Completo",
    categoria: "Shonen / Suspenso",
    duracion: "08:15",
    autor: "Resumen de Anime",
    videoUrl: "https://www.youtube.com/results?search_query=death+note+resumen+en+5+minutos",
    texto: `[00:00] INTRODUCCIÓN Y EL HALLAZGO
Un estudiante de secundaria sobresaliente llamado Light Yagami encuentra una libreta sobrenatural llamada 'Death Note', tirada en el patio de su escuela por el shinigami Ryuk. La libreta contiene reglas muy precisas: cualquier persona cuyo nombre sea escrito en sus páginas morirá de un ataque al corazón a menos que se especifique otra causa.

[01:06] EL NACIMIENTO DE KIRA Y LA INTERVENCIÓN DE L
Light decide usar la libreta para purgar el mundo de criminales y crear una utopía sin maldad donde él sea venerado como un dios. La repentina e inexplicable oleada de muertes de reos llama la atención de las autoridades internacionales y del misterioso detective conocido únicamente como 'L'. Mediante una ingeniosa trampa televisada en directo, L deduce que Kira opera desde la región de Kanto en Japón.

[03:17] MISA AMANE Y EL SEGUNDO SHINIGAMI
La situación se complica con la aparición de Misa Amane, una popular idol poseedora de una segunda Death Note y acompañada por el shinigami Rem. Misa realiza el 'trato de los ojos de shinigami', lo que le permite ver el nombre verdadero de cualquier persona con solo mirarla. Ella se alía incondicionalmente con Light por devoción.

[05:40] EL ENFRENTAMIENTO FINAL Y RESOLUCIÓN
Tras intensos juegos mentales, renuncias temporales a la libreta y la trágica caída de L, Light toma el control de las investigaciones. Sin embargo, los sucesores de L (Near y Mello) logran arrinconar a Light al descubrir el patrón de sustitución de páginas ejecutado por su colaborador Teru Mikami. Al verse acorralado e irrumpiendo en la locura, Ryuk escribe finalmente el nombre de Light en su propia libreta, terminando la historia.`
  },
  {
    id: 1,
    titulo: "Compilación: Historias Cortas & Romcoms",
    categoria: "Comedia / Romance / Isekai",
    duracion: "35:10",
    autor: "Resúmenes Variados",
    videoUrl: "https://www.youtube.com/results?search_query=resumen+anime+romance+comedia",
    texto: `[00:00] HISTORIA 1: YUME KOKODA Y LA REINVENCIÓN
Yume Kokoda es una chica joven frustrada con su aspecto y estilo de vida actual. Abrumada por la presión social y el acoso escolar, decide dar un giro drástico a su vida. Tras un intento desesperado de empezar de cero en una nueva ciudad, descubre una vocación inesperada que la ayuda a recuperar su autoestima y construir amistades genuinas.

[09:49] HISTORIA 2: EL ENCUENTRO INESPERADO DE KANAGAWA
La historia se traslada a Kanagawa, una mujer trabajadora que enfrenta un ambiente laboral sofocante. Un día, tras quedarse atrapada en la oficina durante una tormenta, conoce a un compañero de otro departamento con quien empieza a compartir sus inquietudes nocturnas, dando pie a una reconfortante relación de apoyo mutuo.

[20:27] HISTORIA 3: CONFLICTOS EN EL REINO VECINO
En una ambientación de fantasía medieval, seguimos los pasos de un príncipe heredero repudiado que decide unir fuerzas con un gremio de mercenarios locales. Juntos deberán desentrañar la conspiración de la corte real antes de que se desate la guerra comercial.

[31:43] HISTORIA 4: LA SIRVIENTA ANDROIDE DEL OTRO MUNDO
Un joven común despierta en una mansión futurista atendido por una androide con inteligencia artificial avanzada. A pesar de su programación estricta, la sirvienta empieza a desarrollar hábitos y emociones impredecibles debido a los desatinados deseos de su nuevo amo.`
  },
  {
    id: 2,
    titulo: "Sword Art Online (SAO) - Arco Aincrad",
    categoria: "Isekai / Acción / Ciencia Ficción",
    duracion: "05:45",
    autor: "Resúmenes Exprés",
    videoUrl: "https://www.youtube.com/results?search_query=sword+art+online+resumen+en+5+minutos",
    texto: `[00:00] EL ATRAPAMIENTO EN AINCRAD
En el año 2022, diez mil jugadores se conectan el día de lanzamiento de Sword Art Online, un VRMMORPG impulsado por el casco de realidad virtual NerveGear. Akihiko Kayaba, el creador del juego, revela que los jugadores no pueden desconectarse y que si mueren en el juego, el casco destruirá sus cerebros en la vida real. La única salida es completar los 100 pisos del castillo flotante Aincrad.

[01:09] KIRITO: EL ESPADACHÍN NEGRO
Kirito, un beta tester solitario, avanza rápidamente ganando reputación y habilidades únicas como la 'Doble Empuñadura'. A pesar del trauma por perder a su primer gremio (los Gatos Negros del Sol de Medianoche), forma un vínculo inquebrantable con Asuna, una hábil esgrimista y sublíder del gremio 'Caballeros de la Hermandad de la Sangre'.

[02:24] LA REVELACIÓN DE KAYABA Y EL DUELO
En el piso 75, tras una brutal batalla contra el jefe de zona, Kirito deduce la verdadera identidad del líder de su gremio, Heathcliff: se trata del mismísimo Akihiko Kayaba. Kayaba le ofrece un duelo a muerte anticipado. Si Kirito gana, todos los supervivientes serán liberados de inmediato.

[04:23] CONCLUSIÓN Y EL DESPERTAR
Tras un combate encarnizado donde Asuna se sacrifica para protegerlo, Kirito logra asestar el golpe final. Aincrad se desmorona mientras Kirito y Asuna se despiden flotando sobre el castillo en ruinas. Kirito despierta en el mundo real, débil pero decidido a encontrar a Asuna en el hospital.`
  }
];

function inicializarApp() {
  const menuList = document.getElementById('menu-animes');
  menuList.innerHTML = '';

  datosAnimes.forEach((anime, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerHTML = `<span>${anime.titulo.split('-')[0]}</span> <i class="fa-solid fa-chevron-right"></i>`;
    btn.onclick = () => cargarAnime(index, btn);
    li.appendChild(btn);
    menuList.appendChild(li);
  });
}

function cargarAnime(index, elementoBoton) {
  const anime = datosAnimes[index];
  
  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  if (elementoBoton) elementoBoton.classList.add('active');

  document.getElementById('welcome-screen').classList.add('hidden');
  const card = document.getElementById('anime-card');
  card.classList.remove('hidden');

  document.getElementById('anime-title').innerText = anime.titulo;
  document.getElementById('anime-tag').innerText = anime.categoria;
  document.getElementById('anime-duration').innerText = anime.duracion;
  document.getElementById('anime-author').innerText = anime.autor;
  document.getElementById('anime-content').innerText = anime.texto;

  const videoBtn = document.getElementById('anime-video-link');
  videoBtn.href = anime.videoUrl;
}

document.addEventListener('DOMContentLoaded', inicializarApp);