import { ColorPaletteItem, COLOR_PALETTE } from '../data/pintucoData';
import { CatalogProduct } from '../types';

export interface PintucoColorTone {
  name: string;
  code: string;
  shortName: string;
  hex: string;
  category: 'Clásicos' | 'Modernos' | 'Tierras' | 'Acentos' | 'Naturales' | 'Vibrantes' | 'Contemporáneos';
  acabado: 'Mate' | 'Satinado' | 'Brillante' | 'Semibrillante';
  lrv: number;
  description: string;
}

export const KNOWN_PINTUCO_TONES: Record<string, PintucoColorTone> = {
  // Clásicos y Blancos
  'blanco puro mate 1001': {
    name: 'Blanco Puro Mate 1001',
    code: '1001',
    shortName: 'Blanco Puro',
    hex: '#F9FAFB',
    category: 'Clásicos',
    acabado: 'Mate',
    lrv: 88,
    description: 'Máxima luminosidad y amplitud espacial. Tono neutro puro ideal para cielorrasos e interiores modernos.'
  },
  'blanco nieve mate 1002': {
    name: 'Blanco Nieve Mate 1002',
    code: '1002',
    shortName: 'Blanco Nieve',
    hex: '#FFFFFF',
    category: 'Clásicos',
    acabado: 'Mate',
    lrv: 90,
    description: 'Blanco puro de alta reflectancia solar para fachadas y muros exteriores.'
  },
  'blanco nieve brillante 1000': {
    name: 'Blanco Nieve Brillante 1000',
    code: '1000',
    shortName: 'Blanco Brillante',
    hex: '#FFFFFF',
    category: 'Clásicos',
    acabado: 'Brillante',
    lrv: 90,
    description: 'Acabado vitrificado reflectivo de fácil limpieza para metales y maderas.'
  },
  'blanco almendra satinado 1020': {
    name: 'Blanco Almendra Satinado 1020',
    code: '1020',
    shortName: 'Blanco Almendra',
    hex: '#F4EFEA',
    category: 'Clásicos',
    acabado: 'Satinado',
    lrv: 82,
    description: 'Calidez sutil con destellos marfil. Brinda confort visual y refleja una luz suave acogedora.'
  },
  'blanco higiénico 1001-b': {
    name: 'Blanco Higiénico 1001-B',
    code: '1001-B',
    shortName: 'Blanco Higiénico',
    hex: '#F8FAFC',
    category: 'Clásicos',
    acabado: 'Satinado',
    lrv: 87,
    description: 'Fórmula grado hospitalario antibacterial para baños y cocinas.'
  },
  'blanco hueso 1003': {
    name: 'Blanco Hueso 1003',
    code: '1003',
    shortName: 'Blanco Hueso',
    hex: '#F5F2EB',
    category: 'Clásicos',
    acabado: 'Mate',
    lrv: 80,
    description: 'Tono tradicional cálido ideal para techos y cielorrasos.'
  },
  'blanco térmico ultra reflectivo aq-01': {
    name: 'Blanco Térmico Ultra Reflectivo AQ-01',
    code: 'AQ-01',
    shortName: 'Blanco Térmico',
    hex: '#FFFFFF',
    category: 'Clásicos',
    acabado: 'Mate',
    lrv: 92,
    description: 'Alta reflectividad de rayos solares, reduce la temperatura interior hasta 4°C.'
  },
  'blanco señalización vial t-01': {
    name: 'Blanco Señalización Vial T-01',
    code: 'T-01',
    shortName: 'Blanco Señalización',
    hex: '#F8FAFC',
    category: 'Clásicos',
    acabado: 'Mate',
    lrv: 85,
    description: 'Demarcación de pasos de cebra peatonales y flechas viales según norma NTC 1360.'
  },

  // Grises y Modernos
  'gris niebla mate 7035': {
    name: 'Gris Niebla Mate 7035',
    code: '7035',
    shortName: 'Gris Niebla',
    hex: '#CBD5E1',
    category: 'Modernos',
    acabado: 'Mate',
    lrv: 62,
    description: 'Tono intermedio balanceado. Neutraliza contrastes fuertes y armoniza con maderas y concreto.'
  },
  'gris basalto satinado 7012': {
    name: 'Gris Basalto Satinado 7012',
    code: '7012',
    shortName: 'Gris Basalto',
    hex: '#4A5568',
    category: 'Modernos',
    acabado: 'Satinado',
    lrv: 26,
    description: 'Gris arquitectónico de alta presencia para muros de acento y exteriores contemporáneos.'
  },
  'gris perla spa 7035-b': {
    name: 'Gris Perla Spa 7035-B',
    code: '7035-B',
    shortName: 'Gris Perla Spa',
    hex: '#E2E8F0',
    category: 'Modernos',
    acabado: 'Satinado',
    lrv: 68,
    description: 'Elegancia tipo spa con resistencia a vapor y salpicaduras constantes.'
  },
  'gris ceniza 7038': {
    name: 'Gris Ceniza 7038',
    code: '7038',
    shortName: 'Gris Ceniza',
    hex: '#B0B7BD',
    category: 'Modernos',
    acabado: 'Mate',
    lrv: 50,
    description: 'Gris medio mate antireflejo para cielos y oficinas.'
  },
  'gris máquina 7031': {
    name: 'Gris Máquina 7031',
    code: '7031',
    shortName: 'Gris Máquina',
    hex: '#5B686D',
    category: 'Modernos',
    acabado: 'Brillante',
    lrv: 30,
    description: 'Estándar para carpintería metálica, portones industriales y tuberías.'
  },
  'gris cemento impermeable aq-70': {
    name: 'Gris Cemento Impermeable AQ-70',
    code: 'AQ-70',
    shortName: 'Gris Cemento',
    hex: '#64748B',
    category: 'Modernos',
    acabado: 'Mate',
    lrv: 35,
    description: 'Integración estética con losas de concreto, terrazas y cubiertas transitables.'
  },
  'gris concreto pavimento t-70': {
    name: 'Gris Concreto Pavimento T-70',
    code: 'T-70',
    shortName: 'Gris Pavimento',
    hex: '#4B5563',
    category: 'Modernos',
    acabado: 'Mate',
    lrv: 30,
    description: 'Fondo de parqueaderos, pistas y talleres mecánicos.'
  },

  // Tierras y Cálidos
  'arena cálida 1023': {
    name: 'Arena Cálida 1023',
    code: '1023',
    shortName: 'Arena Cálida',
    hex: '#E2D9C8',
    category: 'Tierras',
    acabado: 'Mate',
    lrv: 67,
    description: 'Inspirado en sedimentos naturales. Aporta calma orgánica para dormitorios y estancias.'
  },
  'terracota colonial 3016': {
    name: 'Terracota Colonial 3016',
    code: '3016',
    shortName: 'Terracota Colonial',
    hex: '#C05621',
    category: 'Tierras',
    acabado: 'Satinado',
    lrv: 24,
    description: 'Carácter tradicional de arcilla horneada para fachadas rústicas y terrazas.'
  },
  'café habano 8011': {
    name: 'Café Habano 8011',
    code: '8011',
    shortName: 'Café Habano',
    hex: '#4A3728',
    category: 'Tierras',
    acabado: 'Satinado',
    lrv: 18,
    description: 'Marrón profundo sobrio para zócalos, columnas exteriores y remates de fachada.'
  },
  'rojo teja colonial aq-30': {
    name: 'Rojo Teja Colonial AQ-30',
    code: 'AQ-30',
    shortName: 'Rojo Teja',
    hex: '#991B1B',
    category: 'Tierras',
    acabado: 'Mate',
    lrv: 22,
    description: 'Impermeabilización estética de tejas de barro, fibrocemento y techos inclinados.'
  },
  'rojo bermellón 3000': {
    name: 'Rojo Bermellón 3000',
    code: '3000',
    shortName: 'Rojo Bermellón',
    hex: '#DC2626',
    category: 'Vibrantes',
    acabado: 'Brillante',
    lrv: 25,
    description: 'Alta visibilidad para hidrantes, cerramientos y acentos arquitectónicos.'
  },
  'ocre dorado 1024': {
    name: 'Ocre Dorado 1024',
    code: '1024',
    shortName: 'Ocre Dorado',
    hex: '#D97706',
    category: 'Tierras',
    acabado: 'Mate',
    lrv: 38,
    description: 'Tierra cálida de tonalidad mediterránea con excelente estabilidad lumínica.'
  },

  // Azules y Acentos
  'azul océano profundo 5003': {
    name: 'Azul Océano Profundo 5003',
    code: '5003',
    shortName: 'Azul Océano',
    hex: '#1E3A8A',
    category: 'Acentos',
    acabado: 'Semibrillante',
    lrv: 14,
    description: 'Elegancia sobria de gran profundidad marina para muros de acento.'
  },
  'azul celeste fresco 5012': {
    name: 'Azul Celeste Fresco 5012',
    code: '5012',
    shortName: 'Azul Celeste',
    hex: '#93C5FD',
    category: 'Acentos',
    acabado: 'Mate',
    lrv: 60,
    description: 'Sensación de cielo despejado y ligereza para espacios relajantes.'
  },
  'azul niebla antibacterial 5012-b': {
    name: 'Azul Niebla Antibacterial 5012-B',
    code: '5012-B',
    shortName: 'Azul Niebla Spa',
    hex: '#93C5FD',
    category: 'Acentos',
    acabado: 'Satinado',
    lrv: 58,
    description: 'Frescura antibacteriana certificada para áreas húmedas y sanitarias.'
  },
  'azul real 5002': {
    name: 'Azul Real 5002',
    code: '5002',
    shortName: 'Azul Real',
    hex: '#1D4ED8',
    category: 'Acentos',
    acabado: 'Brillante',
    lrv: 20,
    description: 'Esmalte anticorrosivo vibrante para rejas y carpintería de diseño.'
  },
  'azul discapacidad reglamentario t-50': {
    name: 'Azul Discapacidad Reglamentario T-50',
    code: 'T-50',
    shortName: 'Azul Accesibilidad',
    hex: '#2563EB',
    category: 'Acentos',
    acabado: 'Mate',
    lrv: 22,
    description: 'Demarcación reglamentaria de rampas y parqueaderos de movilidad reducida.'
  },

  // Verdes y Naturales
  'verde bosque andino 6005': {
    name: 'Verde Bosque Andino 6005',
    code: '6005',
    shortName: 'Verde Bosque',
    hex: '#14532D',
    category: 'Naturales',
    acabado: 'Satinado',
    lrv: 12,
    description: 'Riqueza vegetal andina que genera atmósferas biofílicas sofisticadas.'
  },
  'verde salvia calm 6021': {
    name: 'Verde Salvia Calm 6021',
    code: '6021',
    shortName: 'Verde Salvia',
    hex: '#A3B18A',
    category: 'Naturales',
    acabado: 'Mate',
    lrv: 48,
    description: 'Tono botánico atenuado con matiz grisáceo. Tendencia en diseño escandinavo.'
  },
  'verde menta puro 6021-b': {
    name: 'Verde Menta Puro 6021-B',
    code: '6021-B',
    shortName: 'Verde Menta',
    hex: '#86EFAC',
    category: 'Naturales',
    acabado: 'Satinado',
    lrv: 62,
    description: 'Frescura botánica con aditivo antihongos para zonas de cocina y baño.'
  },
  'verde máquina 6002': {
    name: 'Verde Máquina 6002',
    code: '6002',
    shortName: 'Verde Máquina',
    hex: '#15803D',
    category: 'Naturales',
    acabado: 'Brillante',
    lrv: 22,
    description: 'Protección anticorrosiva de alto brillo para maquinaria y estructuras.'
  },
  'verde seguridad industrial t-60': {
    name: 'Verde Seguridad Industrial T-60',
    code: 'T-60',
    shortName: 'Verde Seguridad',
    hex: '#16A34A',
    category: 'Naturales',
    acabado: 'Mate',
    lrv: 25,
    description: 'Señalización reglamentaria de rutas de evacuación y puntos de encuentro.'
  },
  'verde terraza aq-60': {
    name: 'Verde Terraza AQ-60',
    code: 'AQ-60',
    shortName: 'Verde Terraza',
    hex: '#15803D',
    category: 'Naturales',
    acabado: 'Mate',
    lrv: 24,
    description: 'Impermeabilización transitable con aspecto de cubierta ajardinada.'
  },

  // Amarillos y Señalización
  'amarillo canario 1018': {
    name: 'Amarillo Canario 1018',
    code: '1018',
    shortName: 'Amarillo Canario',
    hex: '#FBBF24',
    category: 'Vibrantes',
    acabado: 'Semibrillante',
    lrv: 55,
    description: 'Energía solar y vitalidad para detalles de impacto o zonas comerciales.'
  },
  'amarillo tráfico vial ntc 1360': {
    name: 'Amarillo Tráfico Vial NTC 1360',
    code: 'T-10',
    shortName: 'Amarillo Tráfico',
    hex: '#FACC15',
    category: 'Vibrantes',
    acabado: 'Mate',
    lrv: 55,
    description: 'Doble línea central continua, bordillos y demarcación de parqueaderos.'
  },

  // Negros y Contemporáneos
  'negro ébano mate 9005': {
    name: 'Negro Ébano Mate 9005',
    code: '9005',
    shortName: 'Negro Ébano',
    hex: '#1E293B',
    category: 'Contemporáneos',
    acabado: 'Mate',
    lrv: 6,
    description: 'El dramatismo del negro puro con bajo brillo. Excelente para perfilar carpintería metálica o muros escenográficos.'
  },
  'negro ébano brillante 9005': {
    name: 'Negro Ébano Brillante 9005',
    code: '9005',
    shortName: 'Negro Brillante',
    hex: '#0F172A',
    category: 'Contemporáneos',
    acabado: 'Brillante',
    lrv: 5,
    description: 'Brillo espejo anticorrosivo para rejas y perfiles metálicos exteriores.'
  },
  'negro demarcación t-90': {
    name: 'Negro Demarcación T-90',
    code: 'T-90',
    shortName: 'Negro Demarcación',
    hex: '#0F172A',
    category: 'Contemporáneos',
    acabado: 'Mate',
    lrv: 6,
    description: 'Borrado y contraste de señalizaciones antiguas en pavimentos.'
  },

  // Maderas
  'natural / incoloro m-01': {
    name: 'Natural / Incoloro M-01',
    code: 'M-01',
    shortName: 'Natural Incoloro',
    hex: '#E5D0B1',
    category: 'Naturales',
    acabado: 'Brillante',
    lrv: 65,
    description: 'Realza la veta original sin alterar el color base de la madera.'
  },
  'cedro tradicional m-02': {
    name: 'Cedro Tradicional M-02',
    code: 'M-02',
    shortName: 'Cedro Tradicional',
    hex: '#A0522D',
    category: 'Tierras',
    acabado: 'Satinado',
    lrv: 35,
    description: 'Tono rojizo cálido clásico para puertas y marcos.'
  },
  'caoba real m-03': {
    name: 'Caoba Real M-03',
    code: 'M-03',
    shortName: 'Caoba Real',
    hex: '#8B2500',
    category: 'Tierras',
    acabado: 'Brillante',
    lrv: 20,
    description: 'Elegancia clásica profunda con matices vino tinto.'
  },
  'teca maderas tropicales m-04': {
    name: 'Teca Maderas Tropicales M-04',
    code: 'M-04',
    shortName: 'Teca Tropical',
    hex: '#8B5A2B',
    category: 'Tierras',
    acabado: 'Satinado',
    lrv: 28,
    description: 'Especial para decks, muebles de terraza y maderas expuestas al sol.'
  },
  'caramel / roble claro m-05': {
    name: 'Caramel / Roble Claro M-05',
    code: 'M-05',
    shortName: 'Caramel Roble',
    hex: '#C68B59',
    category: 'Clásicos',
    acabado: 'Satinado',
    lrv: 42,
    description: 'Miel ambarino suave para interiores nórdicos.'
  },
  'wengué contemporáneo m-06': {
    name: 'Wengué Contemporáneo M-06',
    code: 'M-06',
    shortName: 'Wengué Moderno',
    hex: '#3E2723',
    category: 'Contemporáneos',
    acabado: 'Mate',
    lrv: 8,
    description: 'Marrón café casi negro para ebanistería moderna.'
  },
};

/**
 * Normaliza una cadena para búsqueda de tono
 */
export function normalizeToneQuery(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Resuelve los detalles completos de un color/tono Pintuco (Nombre Oficial, HEX, Código, LRV)
 */
export function getPintucoToneDetails(toneNameOrCode?: string): PintucoColorTone {
  if (!toneNameOrCode) {
    return KNOWN_PINTUCO_TONES['blanco puro mate 1001'];
  }

  const norm = normalizeToneQuery(toneNameOrCode);

  // 1. Coincidencia directa por clave normalizada
  for (const [key, tone] of Object.entries(KNOWN_PINTUCO_TONES)) {
    if (normalizeToneQuery(key) === norm || normalizeToneQuery(tone.name) === norm) {
      return tone;
    }
  }

  // 2. Coincidencia por código de color (ej. "1001", "7012", "3016", "AQ-01", etc.)
  for (const tone of Object.values(KNOWN_PINTUCO_TONES)) {
    if (norm.includes(tone.code.toLowerCase()) || tone.code.toLowerCase().includes(norm)) {
      return tone;
    }
  }

  // 3. Coincidencia parcial por palabras clave
  if (norm.includes('nieve') || norm.includes('blanco')) {
    if (norm.includes('almendra')) return KNOWN_PINTUCO_TONES['blanco almendra satinado 1020'];
    if (norm.includes('hueso')) return KNOWN_PINTUCO_TONES['blanco hueso 1003'];
    if (norm.includes('higien') || norm.includes('banos')) return KNOWN_PINTUCO_TONES['blanco higiénico 1001-b'];
    if (norm.includes('termic') || norm.includes('solar')) return KNOWN_PINTUCO_TONES['blanco térmico ultra reflectivo aq-01'];
    return KNOWN_PINTUCO_TONES['blanco puro mate 1001'];
  }

  if (norm.includes('basalto')) return KNOWN_PINTUCO_TONES['gris basalto satinado 7012'];
  if (norm.includes('niebla') && norm.includes('azul')) return KNOWN_PINTUCO_TONES['azul niebla antibacterial 5012-b'];
  if (norm.includes('niebla') || norm.includes('gris')) return KNOWN_PINTUCO_TONES['gris niebla mate 7035'];
  if (norm.includes('arena')) return KNOWN_PINTUCO_TONES['arena cálida 1023'];
  if (norm.includes('terracota') || norm.includes('teja')) return KNOWN_PINTUCO_TONES['terracota colonial 3016'];
  if (norm.includes('habano') || norm.includes('cafe')) return KNOWN_PINTUCO_TONES['café habano 8011'];
  if (norm.includes('salvia')) return KNOWN_PINTUCO_TONES['verde salvia calm 6021'];
  if (norm.includes('bosque')) return KNOWN_PINTUCO_TONES['verde bosque andino 6005'];
  if (norm.includes('menta')) return KNOWN_PINTUCO_TONES['verde menta puro 6021-b'];
  if (norm.includes('oceano')) return KNOWN_PINTUCO_TONES['azul océano profundo 5003'];
  if (norm.includes('celeste')) return KNOWN_PINTUCO_TONES['azul celeste fresco 5012'];
  if (norm.includes('trafico')) return KNOWN_PINTUCO_TONES['amarillo tráfico vial ntc 1360'];
  if (norm.includes('amarillo')) return KNOWN_PINTUCO_TONES['amarillo canario 1018'];
  if (norm.includes('negro') || norm.includes('ebano')) return KNOWN_PINTUCO_TONES['negro ébano mate 9005'];
  if (norm.includes('cedro')) return KNOWN_PINTUCO_TONES['cedro tradicional m-02'];
  if (norm.includes('caoba')) return KNOWN_PINTUCO_TONES['caoba real m-03'];
  if (norm.includes('teca')) return KNOWN_PINTUCO_TONES['teca maderas tropicales m-04'];
  if (norm.includes('wengue')) return KNOWN_PINTUCO_TONES['wengué contemporáneo m-06'];

  // 4. Si el nombre tiene un hex en paréntesis ej. "Tono (#00A3E0)"
  const hexMatch = toneNameOrCode.match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
  if (hexMatch) {
    return {
      name: toneNameOrCode,
      code: 'ESP',
      shortName: toneNameOrCode.split('(')[0].trim() || 'Color Personalizado',
      hex: hexMatch[0],
      category: 'Contemporáneos',
      acabado: 'Satinado',
      lrv: 50,
      description: 'Color formulado personalizado sistema Color In Pintuco.'
    };
  }

  // Fallback seguro a Blanco Puro
  return {
    name: toneNameOrCode,
    code: '1001',
    shortName: toneNameOrCode,
    hex: '#F9FAFB',
    category: 'Clásicos',
    acabado: 'Mate',
    lrv: 85,
    description: 'Color certificado Pintuco.'
  };
}

/**
 * Obtiene la lista completa de tonos certificados para un producto del catálogo
 */
export function getProductCertifiedColors(product?: CatalogProduct | null): PintucoColorTone[] {
  if (!product) {
    return Object.values(KNOWN_PINTUCO_TONES).slice(0, 8);
  }

  if (product.coloresCertificados && product.coloresCertificados.length > 0) {
    return product.coloresCertificados.map((toneName) => getPintucoToneDetails(toneName));
  }

  // Si es un producto de exterior
  if (product.categoriaCatalogo === 'exteriores' || product.nombre.toLowerCase().includes('koraza')) {
    return [
      KNOWN_PINTUCO_TONES['blanco nieve mate 1002'],
      KNOWN_PINTUCO_TONES['gris basalto satinado 7012'],
      KNOWN_PINTUCO_TONES['terracota colonial 3016'],
      KNOWN_PINTUCO_TONES['arena cálida 1023'],
      KNOWN_PINTUCO_TONES['café habano 8011']
    ];
  }

  // Si es producto para metales / madera
  if (product.categoriaCatalogo === 'metales_madera' || product.nombre.toLowerCase().includes('pintulux')) {
    return [
      KNOWN_PINTUCO_TONES['blanco nieve brillante 1000'],
      KNOWN_PINTUCO_TONES['negro ébano brillante 9005'],
      KNOWN_PINTUCO_TONES['azul real 5002'],
      KNOWN_PINTUCO_TONES['rojo bermellón 3000'],
      KNOWN_PINTUCO_TONES['gris máquina 7031'],
      KNOWN_PINTUCO_TONES['verde máquina 6002']
    ];
  }

  // Si es especial / impermeabilizante
  if (product.categoriaCatalogo === 'especiales' || product.nombre.toLowerCase().includes('aquablock')) {
    return [
      KNOWN_PINTUCO_TONES['blanco térmico ultra reflectivo aq-01'],
      KNOWN_PINTUCO_TONES['gris cemento impermeable aq-70'],
      KNOWN_PINTUCO_TONES['rojo teja colonial aq-30'],
      KNOWN_PINTUCO_TONES['verde terraza aq-60']
    ];
  }

  // Por defecto (interiores / vinilos)
  return [
    KNOWN_PINTUCO_TONES['blanco puro mate 1001'],
    KNOWN_PINTUCO_TONES['blanco almendra satinado 1020'],
    KNOWN_PINTUCO_TONES['gris niebla mate 7035'],
    KNOWN_PINTUCO_TONES['arena cálida 1023'],
    KNOWN_PINTUCO_TONES['verde salvia calm 6021']
  ];
}
