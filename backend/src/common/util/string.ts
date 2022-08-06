export const toTitleCase = (s: string) => {
  if (!s || s === '' || s === 'undefined') {
    return '';
  }
  return s?.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
};

export const formatName = (f?: string, m?: string, l?: string): string => {
  let full = '';

  if (f) full += f;
  if (m) full += ` ${m}`;
  if (l) full += ` ${l}`;

  return full;
};

export const sanitizeURL = (url: string): string => {
  if (!url || url === '' || url === 'undefined') {
    return '';
  }

  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    return `https://${url}`;
  }

  return url;
};
