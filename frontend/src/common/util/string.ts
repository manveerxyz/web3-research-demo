export const formatName = (f?: string, m?: string, l?: string): string => {
  let full = '';

  if (f) full += f;
  if (m) full += ` ${m}`;
  if (l) full += ` ${l}`;

  return full;
};

export const toTitleCase = (str: string): string => str.replace(/\w\S*/g, (txt) => (
  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
)).replace(/\s+/g, ' ');
