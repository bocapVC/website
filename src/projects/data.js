import { resolveProjectImages } from './assets.js'

const definitions = [
  {
    slug: 'estilo-y-espacios-2025',
    title: 'Estilo y Espacios 2025',
    location: 'Cochabamba, Bolivia',
    type: 'Interiores',
    tags: ['Bienestar', 'Shoji'],
    alt: 'Calm interior with shoji and soft light',
    concept: 'Interiores como refugio sensorial. Shoji reinterpretados, paleta tenue, texturas que invitan al tacto. Ventilación cruzada y luz velada para un estado de presencia.',
    description: 'La casa como jardín interior. Objetos esenciales, silencios habitables. Cada umbral es una respiración.',
    galleryMeta: [
      { class: 'g1', alt: 'Soft interior' },
      { class: 'g2', alt: 'Tatami detail' },
      { class: 'gfull', alt: 'Open plan' }
    ],
    fallback: {
      cover: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop'
      ]
    }
  },
  {
    slug: 'casa-bagua',
    title: 'Casa Bagua',
    location: 'Cochabamba, Bolivia',
    type: 'Residencial',
    tags: ['Feng Shui', 'Patio central'],
    alt: 'Residence with central courtyard and gentle light',
    concept: 'Vivienda diseñada siguiendo el diagrama bagua. Cada cuadrante responde a un programa vital, con patios que filtran la luz y conectan la energía entre los niveles.',
    description: 'Un hogar que equilibra tradición andina y orden japonés. Materiales naturales, espejos de agua y vegetación controlada amplifican serenidad y prosperidad.',
    galleryMeta: [
      { class: 'g2', alt: 'Vista general del patio bagua' },
      { class: 'g1', alt: 'Detalle de pérgolas y jardines interiores' },
      { class: 'gfull', alt: 'Sala integrada con el patio central' },
      { class: 'g1', alt: 'Escalera escultórica iluminada' },
      { class: 'g2', alt: 'Dormitorio con vista a jardines zen' }
    ],
    fallback: {
      cover: 'https://images.unsplash.com/photo-1529429617124-aee711a2cd2a?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1465805139202-a644e217f00e?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1600&auto=format&fit=crop'
      ]
    }
  },
  {
    slug: 'vivienda-md',
    title: 'Vivienda MD',
    location: 'Cochabamba, Bolivia',
    type: 'Residencial',
    tags: ['Luz cenital', 'Materialidad táctil'],
    alt: 'Timber living space with soft overhead light',
    concept: 'Casa patio contemporánea donde la luz cenital recorre la vivienda. Espacios modulados que permiten privacidad y expansión social según el momento del día.',
    description: 'Un refugio familiar que prioriza bienestar cotidiano. Texturas táctiles, mobiliario a medida y jardines intermedios construyen atmósferas cálidas y versátiles.',
    galleryMeta: [
      { class: 'g1', alt: 'Ingreso iluminado con madera natural' },
      { class: 'g2', alt: 'Sala de estar con luz cenital filtrada' },
      { class: 'gfull', alt: 'Patio interior con vegetación controlada' },
      { class: 'g1', alt: 'Cocina abierta con detalles en piedra' },
      { class: 'g2', alt: 'Master suite con vistas al jardín' }
    ],
    fallback: {
      cover: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1484100356142-db6ab6244067?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505692794403-55b39b080ad2?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505691723491-19d4c27831ad?q=80&w=1600&auto=format&fit=crop'
      ]
    }
  },
  {
    slug: 'casa-gv',
    title: 'Casa GV',
    location: 'Cochabamba, Bolivia',
    type: 'Cultural',
    tags: ['Simetría', 'Luz cenital'],
    alt: 'Cultural pavilion with rhythmic roof',
    concept: 'Pabellón cultural que amplifica memoria y sonido. Estructura rítmica como instrumento. Paramentos de madera curvada, resonancia del suelo al paso, luz cenital que marca el compás del día.',
    description: 'La comunidad se reconoce en un espacio coreografiado por la luz. Geometría precisa con detalles artesanales. Un susurro colectivo que se vuelve lugar.',
    galleryMeta: [
      { class: 'g2', alt: 'Secuencia de cubierta y ritmo estructural' },
      { class: 'g1', alt: 'Detalle de madera curvada con luz oblicua' },
      { class: 'g1', alt: 'Vista interior con luz cenital' },
      { class: 'g2', alt: 'Galería longitudinal del proyecto' },
      { class: 'gfull', alt: 'Espacio principal del pabellón al atardecer' },
      { class: 'g1', alt: 'Textura del pavimento iluminado' },
      { class: 'g2', alt: 'Relación interior-exterior con reflejos' },
      { class: 'g1', alt: 'Detalle de celosías y sombras' },
      { class: 'g2', alt: 'Patio central con estructuras ligeras' },
      { class: 'gfull', alt: 'Vista nocturna con iluminación cálida' },
      { class: 'g1', alt: 'Perspectiva peatonal a través del pabellón' },
      { class: 'g2', alt: 'Cubierta modulada y ritmo de columnas' },
      { class: 'g1', alt: 'Encuentro material madera y metal' },
      { class: 'g2', alt: 'Detalle de fachada filtrando luz' }
    ],
    fallback: {
      cover: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1530039150950-4845760f92f1?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?q=80&w=2000&auto=format&fit=crop'
      ]
    }
  },
  {
    slug: 'departamento-sv',
    title: 'Departamento SV',
    location: 'Cochabamba, Bolivia',
    type: 'Interiores',
    tags: ['Calidez', 'Shoji contemporáneo'],
    alt: 'Living room bathed in warm light with timber accents',
    concept: 'Refugio urbano que mezcla carpintería japonesa con texturas locales. Panelería shoji reinterpretada, iluminación cálida y circulaciones fluidas que invitan a la contemplación diaria.',
    description: 'Un apartamento pensado para quienes buscan ligereza sensorial. Madera cepillada, fibras naturales y cromática tenue abrazan hábitos conscientes y una vida en equilibrio.',
    galleryMeta: [
      { class: 'g2', alt: 'Sala principal con luz filtrada por shoji' },
      { class: 'g1', alt: 'Detalle de carpintería y texturas naturales' },
      { class: 'gfull', alt: 'Cocina integrada con isla minimalista' },
      { class: 'g1', alt: 'Dormitorio con acentos textiles cálidos' },
      { class: 'g2', alt: 'Baño con luminaria suave y piedra natural' }
    ],
    fallback: {
      cover: 'https://images.unsplash.com/photo-1616628182509-0e3e9727f71d?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1616627611543-d812f9effd87?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616628187844-275a0b64a385?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039964-fc329f7b6b88?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616594039281-2f0dd4ec3d11?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616628182328-1f8100e9628e?q=80&w=1600&auto=format&fit=crop'
      ]
    }
  },
  {
    slug: 'residencia-mj',
    title: 'Residencia MJ',
    location: 'Cochabamba, Bolivia',
    type: 'Institucional',
    tags: ['Concentración', 'Luz natural'],
    alt: 'Institutional atrium with natural light',
    concept: 'Institucional con vocación contemplativa. Luz como guía, silencio como materia. Recorridos que facilitan concentración y aprendizaje somático.',
    description: 'Un edificio que se vuelve brújula de claridad mental. Proporciones serenas, materiales honestos, tecnología discreta.',
    galleryMeta: [
      { class: 'g2', alt: 'Sala de lectura con luz cenital difusa' },
      { class: 'g1', alt: 'Atrio principal iluminado naturalmente' },
      { class: 'gfull', alt: 'Vista exterior de la residencia MJ' },
      { class: 'g1', alt: 'Detalle material de barandales y madera' },
      { class: 'g2', alt: 'Espacio común al atardecer con iluminación cálida' }
    ],
    fallback: {
      cover: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1496302662116-85c9c0c440ac?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523419409543-8c1ab3f591aa?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366695094-0f1d62cd6cf7?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2000&auto=format&fit=crop'
      ]
    }
  },
  {
    slug: 'departamento-rm',
    title: 'Departamento RM',
    location: 'Cochabamba, Bolivia',
    type: 'Residencial',
    tags: ['Luz natural', 'Feng Shui', 'Neuroarquitectura'],
    alt: 'Minimalist courtyard with timber and stone',
    concept: 'Neuroarquitectura aplicada a la calma doméstica. Secuencia espacial que regula respiración y ritmo visual. Materiales honestos, luz rasante, límites difusos entre interior y jardín seco. Principios de Feng Shui y simetría sutil guían la circulación.',
    description: 'Wabi-sabi como poética del tiempo. Imperfecciones bellas, ritmo táctil de madera y piedra. Ventanas calibradas para transiciones de sombra a claridad. La casa respira, el habitante también.',
    galleryMeta: [
      { class: 'g2', alt: 'Ingreso principal bañado por luz rasante' },
      { class: 'g1', alt: 'Sala abierta conectada al patio seco' },
      { class: 'g1', alt: 'Detalle de tatami y madera natural' },
      { class: 'g2', alt: 'Cocina minimalista con iluminación lateral' },
      { class: 'gfull', alt: 'Patio interior con estanque y vegetación controlada' },
      { class: 'g1', alt: 'Dormitorio envuelto por paneles shoji' },
      { class: 'g2', alt: 'Transición entre interior y jardín seco' },
      { class: 'g1', alt: 'Baño con materiales pétreos y luz tenue' },
      { class: 'g2', alt: 'Fachada nocturna iluminada desde el jardín' }
    ],
    fallback: {
      cover: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1523419409543-8c1ab3f591aa?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000&auto=format&fit=crop'
      ]
    }
  }
]

const projects = definitions.map(def => {
  const assets = resolveProjectImages(def.slug)
  const cover = assets.cover ?? def.fallback.cover
  const gallerySources = assets.gallery.length ? assets.gallery : def.fallback.gallery

  const gallery = gallerySources.map((src, index) => ({
    class: def.galleryMeta[index]?.class ?? 'g1',
    src,
    alt: def.galleryMeta[index]?.alt ?? def.alt
  }))

  return {
    slug: def.slug,
    title: def.title,
    location: def.location,
    type: def.type,
    tags: def.tags,
    alt: def.alt,
    concept: def.concept,
    description: def.description,
    cover,
    gallery
  }
})

export default projects
