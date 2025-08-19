const datos = {
  mercurio: [
    "🌑 Mercurio es el planeta más cercano al Sol.",
    "🕑 Un año en Mercurio dura solo 88 días terrestres.",
    "🌡️ Sus temperaturas van de -180°C a 430°C."
  ],
  venus: [
    "🔥 Venus es el planeta más caliente del Sistema Solar.",
    "☁️ Tiene una atmósfera densa de dióxido de carbono.",
    "📏 Un día en Venus dura más que un año venusiano."
  ],
  tierra: [
    "🌍 La Tierra es el único planeta conocido con vida.",
    "💧 El 70% de su superficie está cubierta de agua.",
    "🌎 Su atmósfera protege de la radiación solar."
  ],
  marte: [
    "🔴 Marte es conocido como el 'planeta rojo'.",
    "🏔️ Tiene el volcán más grande del Sistema Solar: el Monte Olimpo.",
    "💦 En el pasado pudo haber tenido océanos."
  ],
  jupiter: [
    "🌪 Júpiter es el planeta más grande del Sistema Solar.",
    "🌀 Tiene una tormenta gigante llamada la Gran Mancha Roja.",
    "🛰️ Cuenta con más de 90 lunas, incluida Ganímedes."
  ],
  saturno: [
    "💍 Saturno es famoso por sus impresionantes anillos.",
    "🌌 Es el segundo planeta más grande del Sistema Solar.",
    "🪐 Podría flotar en agua debido a su baja densidad."
  ],
  urano: [
    "🌀 Urano gira de lado, casi perpendicular a su órbita.",
    "❄️ Es un gigante de hielo con temperaturas muy bajas.",
    "🌍 Sus estaciones duran más de 20 años cada una."
  ],
  neptuno: [
    "🌊 Neptuno es el planeta más ventoso del Sistema Solar.",
    "🌌 Es el planeta más lejano del Sol.",
    "🌀 Sus vientos alcanzan más de 2.000 km/h."
  ]
};

let indice = 0;
let planetaActual = "";

function mostrarInfo(planeta) {
  const infoBox = document.getElementById("info");

  if (planetaActual !== planeta) {
    planetaActual = planeta;
    indice = 0;
  }

  infoBox.style.display = "block";
  infoBox.innerHTML = `
    <p>${datos[planeta][indice]}</p>
    <button onclick="siguienteDato()">➡️ Siguiente dato</button>
  `;
}

function siguienteDato() {
  indice = (indice + 1) % datos[planetaActual].length;
  mostrarInfo(planetaActual);
}
