import { CatalogProduct } from '../types';

/**
 * Normaliza cadenas removiendo acentos y pasando a minúsculas
 */
export const normalizeStr = (str: string = ''): string => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

/**
 * Identifica con certeza si un producto del catálogo corresponde a una Herramienta o Accesorio
 */
export const isToolProduct = (product: CatalogProduct | null | undefined): boolean => {
  if (!product) return false;
  
  if (product.categoriaCatalogo === 'herramientas') return true;

  // Si tiene variantes con medidas de herramientas (pulgadas, granos de lija, etc.)
  if (product.variantes && product.variantes.length > 0) {
    const vMedida = (product.variantes[0]?.medida || '').toLowerCase();
    const vNombre = (product.variantes[0]?.nombre || '').toLowerCase();
    if (
      vMedida.includes('"') ||
      vMedida.includes('grano') ||
      vMedida.includes('mini') ||
      vMedida.includes('manija') ||
      vMedida.includes('repuesto') ||
      vNombre.includes('brocha') ||
      vNombre.includes('rodillo') ||
      vNombre.includes('lija') ||
      vNombre.includes('espatula')
    ) {
      return true;
    }
  }

  const name = normalizeStr(product.nombre);
  const linea = normalizeStr(product.linea);
  const tipo = normalizeStr(product.tipoPintura);
  const desc = normalizeStr(product.descripcion);
  const sku = normalizeStr(product.skuBase);
  const uso = (product.tipoUso || []).map(normalizeStr).join(' ');

  return (
    linea.includes('herramienta') ||
    linea.includes('accesorio') ||
    tipo.includes('brocha') ||
    tipo.includes('rodillo') ||
    tipo.includes('lija') ||
    tipo.includes('espatula') ||
    tipo.includes('herramienta') ||
    tipo.includes('aplicacion') ||
    name.includes('brocha') ||
    name.includes('rodillo') ||
    name.includes('lija') ||
    name.includes('espatula') ||
    name.includes('cinta') ||
    name.includes('bandeja') ||
    name.includes('mezclador') ||
    name.includes('destapa') ||
    sku.startsWith('pin-bro') ||
    sku.startsWith('pin-rod') ||
    sku.startsWith('pin-lij') ||
    sku.startsWith('pin-esp') ||
    sku.startsWith('tool-') ||
    uso.includes('herramienta')
  );
};
