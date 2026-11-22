// ============================================
// INICIO — textos en español e inglés
// ============================================
// Los titulares admiten <em> para el énfasis en itálica (se pintan con set:html).

import type { Lang } from './index';

interface Paso { src: string; alt: string; titulo: string; texto: string }
interface Transporte { icono: string; titulo: string; texto: string }

interface ContenidoInicio {
  title: string;
  mensajes: { info: string; preguntaTour: string };
  hero: {
    rotulo: string;
    titular: string[]; // una línea por <span>
    descripcion: string;
    whatsapp: string;
    whatsappAria: string;
    tienda: string;
    imagenAlt: string;
  };
  datosAria: string;
  datos: { cifra: string; etiqueta: string }[];
  experiencia: { rotulo: string; titulo: string; entrada: string };
  pasos: Paso[];
  tour: {
    imagenAlt: string;
    rotulo: string;
    titulo: string;
    entrada: string;
    horario: string;
    sinReserva: string;
    idiomas: string;
    distancia: string;
    comoLlegar: string;
    whatsapp: string;
    whatsappAria: string;
  };
  tienda: { rotulo: string; titulo: string; entrada: string; cta: string };
  comoLlegar: { rotulo: string; titulo: string; entrada: string; mapaTitulo: string };
  transportes: Transporte[];
}

const fotos = {
  cosecha: '/Imagenes/Carrucel1/5.webp',
  recorrido: '/Imagenes/Carrucel1/3.webp',
  taza: '/Imagenes/Carrucel1/4.webp',
};

// Iconos de 96×96 (se muestran a 48 px)
const iconos = {
  caballo: '/Imagenes/Llegada/caballo.webp',
  jeep: '/Imagenes/Llegada/jeep.webp',
  caminando: '/Imagenes/Llegada/caminando.webp',
  carro: '/Imagenes/Llegada/carro.webp',
};

export const inicio = {
  es: {
    title: 'Coffee Tour en Salento · Finca cafetera Las Acacias',
    // El tour no se reserva: WhatsApp es para pedir información o resolver dudas
    mensajes: {
      info: 'Hola, quiero más información sobre la finca Las Acacias',
      preguntaTour: 'Hola, tengo una pregunta sobre el Coffee Tour en Las Acacias',
    },
    hero: {
      rotulo: 'Salento · Quindío · 1.850 m s. n. m.',
      titular: ['Vive el café', '<em>desde la semilla</em>', 'hasta la taza'],
      descripcion: 'Una finca cafetera familiar en la cordillera central colombiana. Recorre el cultivo, el beneficio y el tueste con nosotros, y llévate a casa un café cosechado y procesado a mano.',
      whatsapp: 'Escríbenos por WhatsApp',
      whatsappAria: 'Escríbenos por WhatsApp (se abre en una pestaña nueva)',
      tienda: 'Comprar café de origen',
      imagenAlt: 'Visitante recolectando café con un canasto entre los cafetos de la finca',
    },
    datosAria: 'La finca en cifras',
    datos: [
      { cifra: '1.850 m', etiqueta: 'sobre el nivel del mar' },
      { cifra: '3,5 km',  etiqueta: 'desde la plaza de Salento' },
      { cifra: '100%',    etiqueta: 'proceso manual' },
      { cifra: 'ES · EN', etiqueta: 'tours en español o inglés' },
    ],
    experiencia: {
      rotulo: 'La experiencia',
      titulo: 'Del cafetal <em>a tu taza</em>',
      entrada: 'Cada etapa del café se hace a mano en la finca, y puedes vivirlas todas en una sola visita.',
    },
    pasos: [
      {
        src: fotos.cosecha,
        alt: 'Mano recogiendo una cereza madura de café',
        titulo: 'La cosecha',
        texto: 'Recolectamos el café a mano, cereza por cereza, entre los cafetales de la finca.',
      },
      {
        src: fotos.recorrido,
        alt: 'Grupo de visitantes en la barra durante el tour de café',
        titulo: 'El recorrido',
        texto: 'Recorre con nosotros el cultivo, el beneficio y el tueste, y prueba el café en la barra.',
      },
      {
        src: fotos.taza,
        alt: 'Taza de café frente a las montañas de Salento',
        titulo: 'La taza',
        texto: 'Un café cosechado y procesado a mano, servido frente a las montañas de Salento.',
      },
    ],
    tour: {
      imagenAlt: 'Perro de la finca mirando los cafetales en ladera bajo la niebla',
      rotulo: 'Coffee Tour',
      titulo: 'Visítanos en <em>la finca</em>',
      entrada: 'Recorre con nosotros el cultivo, el beneficio y el tueste del café, y conoce de cerca el trabajo de una finca familiar.',
      horario: 'Todos los días, de 9:00 a. m. a 4:00 p. m.',
      sinReserva: 'No necesitas reserva: llega dentro del horario',
      idiomas: 'En español o inglés',
      distancia: 'A 3,5 km de la plaza de Salento',
      comoLlegar: 'Cómo llegar',
      whatsapp: 'Pregúntanos por WhatsApp',
      whatsappAria: 'Pregúntanos por WhatsApp (se abre en una pestaña nueva)',
    },
    tienda: {
      rotulo: 'Café de origen',
      titulo: 'Llévate la finca <em>a casa</em>',
      entrada: 'Café 100% artesanal, cultivado y procesado a mano en nuestra finca familiar. En grano o molido, en varias presentaciones.',
      cta: 'Ver el café de origen',
    },
    comoLlegar: {
      rotulo: 'Cómo llegar',
      titulo: 'El camino <em>a la finca</em>',
      entrada: 'Estamos a solo 3,5 km de la plaza de Salento.',
      mapaTitulo: 'Ruta desde la Plaza de Salento hasta Finca Las Acacias',
    },
    transportes: [
      {
        icono: iconos.caballo,
        titulo: 'A caballo',
        texto: 'Una opción de transporte muy atractiva es realizar un recorrido a caballo desde el casco urbano de Salento hasta la finca. Esta experiencia permite disfrutar del paisaje de una manera diferente y relajada, convirtiendo el trayecto en parte de la aventura. Es una alternativa ideal para quienes desean agregar un toque especial y auténtico a su visita.',
      },
      {
        icono: iconos.jeep,
        titulo: 'En Jeep',
        texto: 'Puedes llegar a la finca en un tradicional Jeep Willys, utilizando un servicio público o privado desde Salento. Estos emblemáticos vehículos de la región tienen capacidad para grupos de hasta 10 personas y ofrecen una experiencia auténtica, permitiendo disfrutar del paisaje cafetero durante el recorrido de una forma cómoda y memorable.',
      },
      {
        icono: iconos.caminando,
        titulo: 'Caminando',
        texto: 'Si disfrutas de la aventura y el contacto con la naturaleza, puedes llegar caminando desde la plaza principal de Salento. La finca se encuentra a solo 3,5 km, en un recorrido de aproximadamente una hora. El trayecto es mayormente en descenso, lo que lo hace cómodo y agradable. Además, es una ruta segura y frecuentada por viajeros de todo el mundo.',
      },
      {
        icono: iconos.carro,
        titulo: 'En carro',
        texto: 'Desde Salento, toma la vía que pasa junto al cementerio y continúa por la misma carretera durante aproximadamente 3 kilómetros, sin tomar desvíos. Nos encontrarás al costado derecho de la vía. Además, el recorrido cuenta con una señalización clara y visible que facilita la llegada a la finca.',
      },
    ],
  },

  en: {
    title: 'Coffee Tour in Salento, Colombia · Las Acacias Coffee Farm',
    // The tour isn't booked: WhatsApp is for information and questions
    mensajes: {
      info: "Hi, I'd like more information about Las Acacias farm",
      preguntaTour: 'Hi, I have a question about the Coffee Tour at Las Acacias',
    },
    hero: {
      rotulo: 'Salento · Quindío · 1,850 m above sea level',
      titular: ['Experience coffee', '<em>from seed</em>', 'to cup'],
      descripcion: "A family-run coffee farm in the Colombian Andes. Walk with us through the growing, processing and roasting, and take home coffee picked and processed by hand.",
      whatsapp: 'Message us on WhatsApp',
      whatsappAria: 'Message us on WhatsApp (opens in a new tab)',
      tienda: 'Buy single-origin coffee',
      imagenAlt: "Visitor picking coffee with a basket among the farm's coffee plants",
    },
    datosAria: 'The farm at a glance',
    datos: [
      { cifra: '1,850 m', etiqueta: 'above sea level' },
      { cifra: '3.5 km',  etiqueta: "from Salento's main square" },
      { cifra: '100%',    etiqueta: 'done by hand' },
      { cifra: 'ES · EN', etiqueta: 'tours in Spanish or English' },
    ],
    experiencia: {
      rotulo: 'The experience',
      titulo: 'From the plant <em>to your cup</em>',
      entrada: 'Every stage of our coffee is done by hand on the farm, and you can see them all in a single visit.',
    },
    pasos: [
      {
        src: fotos.cosecha,
        alt: 'Hand picking a ripe coffee cherry',
        titulo: 'The harvest',
        texto: "We pick our coffee by hand, cherry by cherry, among the farm's coffee plants.",
      },
      {
        src: fotos.recorrido,
        alt: 'Group of visitors at the coffee bar during the tour',
        titulo: 'The tour',
        texto: 'Walk with us through the growing, processing and roasting, then taste the coffee at our bar.',
      },
      {
        src: fotos.taza,
        alt: 'Cup of coffee in front of the Salento mountains',
        titulo: 'The cup',
        texto: 'Coffee picked and processed by hand, served with a view of the Salento mountains.',
      },
    ],
    tour: {
      imagenAlt: 'The farm dog looking out over the hillside coffee fields in the mist',
      rotulo: 'Coffee Tour',
      titulo: 'Visit us <em>at the farm</em>',
      entrada: 'Walk with us through the growing, processing and roasting of our coffee, and see up close the work of a family farm.',
      horario: 'Every day, 9:00 a.m. to 4:00 p.m.',
      sinReserva: 'No booking needed: just come during opening hours',
      idiomas: 'In Spanish or English',
      distancia: "3.5 km from Salento's main square",
      comoLlegar: 'Getting here',
      whatsapp: 'Ask us on WhatsApp',
      whatsappAria: 'Ask us on WhatsApp (opens in a new tab)',
    },
    tienda: {
      rotulo: 'Single-origin coffee',
      titulo: 'Take the farm <em>home</em>',
      entrada: '100% handcrafted coffee, grown and processed by hand on our family farm. Whole bean or ground, in several sizes.',
      cta: 'See our coffee',
    },
    comoLlegar: {
      rotulo: 'Getting here',
      titulo: 'The road <em>to the farm</em>',
      entrada: "We're just 3.5 km from Salento's main square.",
      mapaTitulo: "Route from Salento's main square to Las Acacias farm",
    },
    transportes: [
      {
        icono: iconos.caballo,
        titulo: 'On horseback',
        texto: "A lovely way to get here is on horseback, riding from Salento's town center to the farm. You'll take in the landscape at an easy, relaxed pace, and the ride becomes part of the adventure. It's an ideal choice if you want to add something special and authentic to your visit.",
      },
      {
        icono: iconos.jeep,
        titulo: 'By Jeep',
        texto: "You can reach the farm in a traditional Willys Jeep, using a shared or private service from Salento. These iconic vehicles of the region carry groups of up to 10 people and make for an authentic ride through the coffee landscape, comfortable and memorable.",
      },
      {
        icono: iconos.caminando,
        titulo: 'On foot',
        texto: "If you enjoy adventure and being out in nature, you can walk from Salento's main square. The farm is just 3.5 km away, about an hour's walk. The route is mostly downhill, which makes it easy and pleasant, and it's a safe path walked by travelers from all over the world.",
      },
      {
        icono: iconos.carro,
        titulo: 'By car',
        texto: "From Salento, take the road that runs past the cemetery and stay on it for about 3 kilometers, without turning off. You'll find us on the right-hand side of the road. The way is clearly signposted all the way to the farm.",
      },
    ],
  },
} satisfies Record<Lang, ContenidoInicio>;
